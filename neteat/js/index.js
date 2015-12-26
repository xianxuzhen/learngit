/*
 *  常用方法集合
 *  用法:
 *  var util = Util$();
 *  util.method();
 */
(function(global) {
  var Fn = function() {
    return new Fn.init();
  };

  Fn.prototype = {
  	/**
	* 兼容PC端和移动端的点击事件
	*/
  	clickFunction: function(){
  		var UA=window.navigator.userAgent;
		var CLICK="click";
		if(/ipad|iphone|android/.test(UA)){
			CLICK="tap";
		}
		return CLICK;
  	},
	/**
	* 用数据填充模板
	*
	* @param {object} object 包含数据的对象
	* @param {string} tmplHtml 要填充数据的html字符串
	* @return {string} 填充好数据的字符串
	*/
	formatTemplate: function(object,tmplHtml) {  
	    return tmplHtml.replace(/{(\w+)}/g, function(m1, m2) {  
	        if (!m2)  
	            return "";  
	        return object[m2];  
	    });  
	},

  };

  Fn.init = function() {};

  Fn.init.prototype = Fn.prototype;

  global.Util$ = Fn;

}(window));

//封装轮播图
(function(global){
	function Fn(){
		return new Banner();
	}

	function Banner(){
		//动态设置图片宽度
		var width=$(".bannerBox").width();
		$("li",".banner").width(width);
		//动态设置轮播器高度
		$(".bannerBox").height($("li",".banner").height());
		window.intervalId=setInterval(function(){	
			//自动轮播动画			
			$(".banner").animate({
				left: -width,
			},500,'ease-out',function(){
				$(".banner").append($("li",".banner").first().clone());					
				$("li",".banner").first().remove();	
				$(".banner").css("left",0);
			});
			//指示器
			var thispointer=$(".active",".pointer");
			if(thispointer.next().length!=0){
				thispointer.next().addClass("active");		
			}else{
				$("li",".pointer").first().addClass("active");
			}
			thispointer.removeClass("active");			
		},4000);	
	}

	global.Banner$=Fn;
		
})(window);

//鼠标点击导航栏切换
(function(){
	//工具方法
	var util = Util$();
	var CLICK=util.clickFunction();
	//给导航菜单绑定事件
	var navlist=$("li",$(".navParent"));
	navlist[CLICK](function(){
		$(".page",".m-content").hide();		
		if(window.intervalId){
			clearInterval(window.intervalId);
			$(".banner").css("left",0);
		}
		navlist.removeClass("active");
		$(this).addClass("active");
		var index=$(this).index();		
		switch(index){
			case 0:
				$(".page1").show();
				break;
			case 1:
				$(".page2").show();
				break; 
			case 2:
				$(".page3").show();
				break; 
			case 3:
				$(".page4").show();
				Banner$();
				break; 
		}	
	});
})();

//滑动屏幕切换
(function(){
	//淡入
	function fadeIn(element){
		element.show();
		element.css("opacity","0");
		element.animate({
			opacity: "1",
		},1000,'ease-out');
	}		
	//向左滑动
	$(".page").swipeLeft(function(e){
		e.stopPropagation();	
		if(window.intervalId){
			clearInterval(window.intervalId);
			$(".banner").css("left",0);
		}
		var index=$(this).index()+1;
		if(index<0||index>3) return ;
		var navlist=$("li",$(".navParent"));
		navlist.removeClass("active");
		navlist.eq(index).addClass("active");		
		$(".page",".m-content").hide();	
		switch(index){
			case 0:
				fadeIn($(".page1"));
				break;
			case 1:
				fadeIn($(".page2"));							
				break; 
			case 2:
				fadeIn($(".page3"));
				break; 
			case 3:
				fadeIn($(".page4"));
				Banner$();
				break; 
		}		
	});
	//向右滑动
	$(".page").swipeRight(function(e){
		e.stopPropagation();		
		if(window.intervalId){
			clearInterval(window.intervalId);
			$(".banner").css("left",0);
		}
		var index=$(this).index()-1;
		if(index<0||index>3) return;
		var navlist=$("li",$(".navParent"));
		navlist.removeClass("active");
		navlist.eq(index).addClass("active");		
		$(".page",".m-content").hide();				
		switch(index){
			case 0:
				fadeIn($(".page1"));
				break;
			case 1:
				fadeIn($(".page2"));
				break; 
			case 2:
				fadeIn($(".page3"));
				break; 
			case 3:
				fadeIn($(".page4"));
				Banner$();
				break; 
		}		
	});
})();

//第一和第二页
(function(){
	//工具方法
	var util = Util$();
	var CLICK=util.clickFunction();
	//获取模板里面的html字符串
	var courseHtml=$("#"+"coursetemplate").html();
	//装载课程节点
	var designCourseBox=$(".designCourseBox");
	var programCourseBox=$(".programCourseBox");
	//获取课程的url
	var getCourseUrl='http://study.163.com/webDev/couresByCategory.htm';
	//默认显示第一页
	$(".page1").show();
	//初始化第一页数据（显示）
	var designObject={};
	designObject.pageNo=1;
	designObject.psize=24;
	designObject.type=10;
	getData(getCourseUrl,designObject,function(totlePageCount,html){
		designCourseBox.html(html);
		$(".designMoreBtn").show();
	});
	//初始化第二页数据（隐藏）
	var programObject={};
	programObject.pageNo=1;
	programObject.psize=24;
	programObject.type=20;
	getData(getCourseUrl,programObject,function(totlePageCount,html){
		programCourseBox.html(html);
		$(".programMoreBtn").show();
	});	
	
	//给产品设计的加载更多按钮绑定事件
	var designMoreBtn=$('.designMoreBtn');
	designMoreBtn[CLICK](function(){
		//获取有多少行，12行为一次加载
		var rowNum=$('.row',$('.designCourseBox'));
		designObject.pageNo=rowNum.length/12+1;
		//设置数据
		getData(getCourseUrl,designObject,function(totlePageCount,htmlString){
			var newHtml=designCourseBox.html()+htmlString;
			designCourseBox.html(newHtml);
			//判断还有没有数据
			if(designObject.pageNo==totlePageCount){
				designMoreBtn.hide();
			}
		});

	});

	//给程序语言的加载更多按钮绑定事件
	var programMoreBtn=$('.programMoreBtn');
	programMoreBtn[CLICK](function(){
		//获取有多少行，12行为一次加载
		var rowNum=$('.row',$('.programCourseBox'));
		programObject.pageNo=rowNum.length/12+1;
		//设置数据
		getData(getCourseUrl,programObject,function(totlePageCount,htmlString){
			var newHtml=programCourseBox.html()+htmlString;
			programCourseBox.html(newHtml);
			//判断还有没有数据
			if(programObject.pageNo==totlePageCount){
				programMoreBtn.hide();
			}
		});
	});

	//获取数据的函数
	function getData(url,object,fnc){
		$.ajax({
			 type: 'GET',
			 url: url,
			 data: object,
			 dataType: 'json',
			 context: $('body'),
			 success: function(data){
			 	var list=data.list;
				var innerhtml="";
				//获取总页数
				var totlePageCount=data.pagination.totlePageCount;
				//设置课程列表
				for(var i=0;i<list.length;i=i+2){

					var object={};

					object.middlePhotoUrl1=list[i]["middlePhotoUrl"];
					object.name1=list[i]["name"];
					object.provider1=list[i]["provider"];
					object.learnerCount1=list[i]["learnerCount"];
					object.price1=list[i]["price"];
		
					object.middlePhotoUrl2=list[i+1]["middlePhotoUrl"];
					object.name2=list[i+1]["name"];
					object.provider2=list[i+1]["provider"];
					object.learnerCount2=list[i+1]["learnerCount"];
					object.price2=list[i+1]["price"];

					innerhtml=innerhtml+util.formatTemplate(object,courseHtml);
				}
				fnc(totlePageCount,innerhtml);
			 },
			 error: function(xhr, type){
			     alert('Ajax error!')
			 }
		})
	}	

})();

//第三页热门课程
(function(){
	//工具方法
	var util = Util$();
	var hotCourseBox=$(".hotCourseBox");
	var hotcoursetplhtml=$("#hotCoursetemplate").html();
	$.ajax({
		 type: 'GET',
		 url: "http://study.163.com/webDev/hotcouresByCategory.htm",
		 data: null,
		 dataType: 'json',
		 context: $('body'),
		 success: function(data){
		 	var object={};
			var hotcoursehtml="";
		 	for(var i=0;i<data.length;i++){
				object.middlePhotoUrl=data[i]["middlePhotoUrl"];
				object.name=data[i]["name"];
				object.learnerCount=data[i]["learnerCount"];
				hotcoursehtml=hotcoursehtml+util.formatTemplate(object,hotcoursetplhtml);
			}
			hotCourseBox.html(hotcoursehtml);		
		 },
		 error: function(xhr, type){
		     alert('Ajax error!')
		 }
	})

})();

