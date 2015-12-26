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
    /*
     * 绑定事件函数(兼容低版本IE)
     *
     * @param {'HTMLElement'} 要绑定事件的元素
     * @param {'string'} 事件类型
     * @param {'function'} 回调函数
     */
    addEvent: function(element,type,handler){
	    if(!!element.addEventListener){
	      element.addEventListener(type,handler,false);
	    }else{
	      element.attachEvent("on"+type,function(){
	        handler.call(element,arguments);//改变this指向
	      });      
	    }
	},

	/*
     * 返回事件对象(兼容低版本IE)
     */
	getEvent: function(){
	    return event||window.event;
	},

	/*
     * 返回事件目标，即实际触发对象(兼容低版本IE)
     */
	getTarget: function(event){
	    return event.target||event.srcElement;
	},

	/*
     * 读取cookie
     *
     * @returns {'object'} cookie为'',返回''，否则返回包含'name=value'的名值对的对象。
     */
    getcookie: function() {
	    var cookie = {};
	    var all = document.cookie;
	    if (all === '')
	        return cookie;
	    var list = all.split(';');
	    for (var i = 0; i < list.length; i++) {
	        var item = list[i];
	        var p = item.indexOf('=');
	        var name = item.substring(0, p);
	        name = decodeURIComponent(name);
	        var value = item.substring(p + 1);
	        value = decodeURIComponent(value);
	        cookie[name] = value;
	    }
	    return cookie;
	},

	/*
     * 设置一个cookie
     *
     * @param  {string} name cookie的名字
     * @param  {string} value cookie对应的值
     * @param  {date} expires cookie对应的实效时间
     */
    setCookie: function(name, value,validity) {
      document.cookie = name + "=" + value+";expires="+validity;
    },

    /*
     * Ajax请求GET方法的封装
     *
     * @param {string} url 要请求的地址
     * @param {object} data 要传到后台的数据
     * @param {function} callback ajax请求成功后要调用的函数
     */
    ajaxGetRequest: function(url, options, callback){
	    //对象转化为查询字符串
	    function serialize(data){
	        if(!data) return '';
	        var pairs = [];
	        for(var name in data){
	            if(!data.hasOwnProperty(name)) continue;
	            if(typeof data[name]==='function') continue;
	            var value = data[name].toString();
	            name = encodeURIComponent(name);
	            value = encodeURIComponent(value);
	            pairs.push(name+'='+value);
	        }
	        return pairs.join('&');
	    }
	    var xhr=new XMLHttpRequest();
	    xhr.onreadystatechange=function(){
	        if(xhr.readyState==4){
	            if((xhr.status>=200 && xhr.status<300) || (xhr.status==304)){
	                callback(xhr.responseText);
	            }else{
	                alert("Request was unseccessed: "+xhr.status);
	            }
	        }
	    }
	    var url=url+'?'+serialize(options);
	    xhr.open('get',url,true);
	    xhr.send(null);
	},

	/**
	* 判断是否有某个className
	*
	* @param {HTMLElement} element 元素
	* @param {string} className className
	* @return {boolean}
	*/
	hasClass: function(element, className) {
	    var classNames = element.className;
	    if (!classNames) {
	        return false;
	    }
	    classNames = classNames.split(/\s+/);
	    for (var i = 0, len = classNames.length; i < len; i++) {
	        if (classNames[i] === className) {
	            return true;
	        }
	    }
	    return false;
	},
	/**
	* 添加className
	*
	* @param {HTMLElement} element 元素
	* @param {string} className className
	*/
	addClass: function(element, className) {
	    if (!this.hasClass(element, className)) {
	        element.className = element.className ?[element.className, className].join(' ') : className;
	    }
	},

	/**
	* 删除元素className
	*
	* @param {HTMLElement} element 元素
	* @param {string} className className
	*/
	removeClass: function(element, className) {
	    if (className && this.hasClass(element, className)) {
	        var classNames = element.className.split(/\s+/);
	        for (var i = 0, len = classNames.length; i < len; i++) {
	            if (classNames[i] === className) {
	                classNames.splice(i, 1);
	                break;
	            }
	        }
	    element.className = classNames.join(' ');
	    }
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

	/**
	* 获取某个元素在集合中的索引
	*
	* @param {NodeList} list 包含数据的对象
	* @param {HTMLElement} element 要填充数据的html字符串
	* @return {Number} 返回元素索引
	*/
	getIndex: function(list,element) {  
	    for(var i=0;i<list.length;i++){
	    	if(list[i]==element){
	    		return i;
	    	}
	    }

	},

	/**
	* 返回集合中包含某个类名的元素
	*
	* @param {NodeList} list 包含数据的对象
	* @param {HTMLElement} element 要填充数据的html字符串
	* @return {Number} 返回元素索引
	*/
	getElementByClassName: function(list,className) {  
	    for(var i=0;i<list.length;i++){
	    	if(list[i].className.indexOf(className)!=-1){
	    		return list[i];
	    	}
	    }

	},


  };

  Fn.init = function() {};

  Fn.init.prototype = Fn.prototype;

  global.Util$ = Fn;

}(window));

//1.1点击关闭顶部通知条
(function(){
	var util = Util$();
	var note=document.getElementById("m-notice");
	var notice=document.getElementById("notice");
	util.addEvent(notice,"click",function(){
		note.style.display="none";
		var date=new Date();
		date.setYear(2100);
		util.setCookie("notice","true",date);
	});
	//var cookie=getcookie();
	var cookie=util.getcookie();
	if(cookie.notice){
		note.style.display="none";
	}
})();

//1.2点击关注“网易教育产品部”，登录模块
(function(){
	var util = Util$();
	var focus=document.getElementById("focus");
	var screenTop=document.getElementById("screenTop");
	var login=document.getElementById("m-login");
	var loginClose=document.getElementById("loginClose");
	var userName=document.getElementById("userName");
	var passWord=document.getElementById("password");
	var userNameLab=document.getElementById("userNameLab");
	var passWordLab=document.getElementById("passwordLab");
	util.addEvent(userName,"focus",function(){
		userNameLab.style.display="none";
	});
	util.addEvent(userName,"blur",function(){
		if(userName.value==""){
			userNameLab.style.display="block";
		}		
	});
	util.addEvent(passWord,"focus",function(){
		passWordLab.style.display="none";
	});
	util.addEvent(passWord,"blur",function(){
		if(passWord.value==""){
			passWordLab.style.display="block";
		}		
	});
	//弹出登陆框
	util.addEvent(focus,"click",function(event){
		var cookie=util.getcookie();
		if(!cookie.loginSuc){
			screenTop.style.height=parseInt(document.body.clientHeight)+"px";
			screenTop.style.display="block";
			var offsetleft=parseInt((document.documentElement.clientWidth-387)/2);
			var offsettop=parseInt((document.documentElement.clientHeight-288)/2);
			login.style.left=offsetleft+"px";
			login.style.top=offsettop+"px";
			login.style.display="block";
		}
	});
	//登陆框随浏览器大小变化而位置改变
	util.addEvent(window,"resize",function(){
		var offsetleft=parseInt((document.documentElement.clientWidth-387)/2);
		var offsettop=parseInt((document.documentElement.clientHeight-288)/2);
		login.style.left=offsetleft+"px";
		login.style.top=offsettop+"px";
	});
	//关闭登陆框
	util.addEvent(loginClose,"click",function(){
		screenTop.style.display="none";
		login.style.display="none";
	});
	//登陆，ajax请求数据
	var loginForm=document.getElementById("loginForm");
	var loginBtn=document.getElementById("loginBtn");
	util.addEvent(loginBtn,"click",function(event){
		var userName=loginForm["userName"].value;
		var password=loginForm["password"].value;
		var url="http://study.163.com/webDev/login.htm";
		var object={};
		object.userName=hex_md5(userName);
		object.password=hex_md5(password);
		util.ajaxGetRequest(url,object,getLoginData);
		function getLoginData(responseText){
			if(responseText==0){
				//登陆失败
				alert("登陆失败！");
			}else if(responseText==1){
				//登陆成功
				var date=new Date();
				date.setDate(date.getDate()+7);
				//document.cookie="loginSuc=true;expires="+date;
				util.setCookie("loginSuc","true",date);
				screenTop.style.display="none";
				login.style.display="none";
				var nofocus=document.getElementById("nofocus");
				var focus=document.getElementById("focus");
				focus.style.display="none";
				nofocus.style.display="block";
			}
		}
	});
})();

//1.4轮播图模块
(function(){
	var util = Util$();
	var bannerModule=document.getElementById("bannerModule");
	var bannerBox=document.getElementById("bannerBox");
	var bannerChildrens=bannerBox.getElementsByTagName("li");
	var pointerBox=document.getElementById("pointerBox");
	var pointerChildrens=pointerBox.getElementsByTagName("li");
	var index=0;
	//自动轮播，实现每隔5s,切换图片（500ms淡入）
	var intervalID=setInterval(banner,5000);
	//鼠标放上去，停止播放，移开播放
	util.addEvent(bannerModule,"mouseover",function(){
		clearInterval(intervalID);
	});
	util.addEvent(bannerModule,"mouseout",function(){
		intervalID=setInterval(banner,5000);		
	});
	for(var i=0;i<pointerChildrens.length;i++){
		util.addEvent(pointerChildrens[i],"click",function(){
			for(var i=0;i<pointerChildrens.length;i++){
				pointerChildrens[i].className="";
			}
			this.className="selected";
			//
			index=this.getAttribute("index");
			for(var i=0;i<bannerChildrens.length;i++){
				bannerChildrens[i].className="";
			}
			//500ms淡入
			fadeout(bannerChildrens[index]);
			bannerChildrens[index].className="show";
		});
	}
	//图片自动轮播函数
	function banner(){
		index++;
		if(index==3){
			index=0;
		}
		for(var i=0;i<bannerChildrens.length;i++){
			bannerChildrens[i].className="";
			pointerChildrens[i].className="";
		}
		//500ms淡入
		fadeout(bannerChildrens[index]);
		bannerChildrens[index].className="show";
		pointerChildrens[index].className="selected";		
	}
	//500ms淡入动画函数
	function fadeout(element){
		//设置元素透明度函数
		function set_opacity(element,value){  
		    if(!!element.filters){
		     	element.style.filter='alpha(opacity='+value+')'
		    }else{
		     	element.style.opacity=value/100;
		    }
		}  
		var value=0;
		set_opacity(element,value);
		//每隔10毫秒透明度加2,加到100正好花费500毫秒
		var IntervalID=setInterval(function(){
			set_opacity(element,value);
			if(value<100){
				value+=2;
			}else{
				clearInterval(IntervalID);
			}
		},10);
	}
})();

//视频弹窗模块
(function(){
	var util = Util$();
	var videoImg=document.getElementById("videoImg");
	var videoBox=document.getElementById("m-video");
	var screenTop=document.getElementById("screenTop");
	var videoClose=document.getElementById("videoClose");
	var video=document.getElementById("video");
	//弹出登陆框
	util.addEvent(videoImg,"click",function(event){
		screenTop.style.height=parseInt(document.body.clientHeight)+"px";
		screenTop.style.display="block";
		videoBox.style.display="block";
	});
	//关闭登陆框
	util.addEvent(videoClose,"click",function(){
		screenTop.style.display="none";
		videoBox.style.display="none";
		video.pause();
	});
})();

/*
 * --封装分页器--
 * ------------
 * 生成一个分页器, html结构如下：(其中，li是动态生成的并添加到ul中，其他的写在html文档中)
 *   <div id="m-page">
 * 		<div class="prevPage" id="prevPage"></div>
 * 		<ul id="turnpageUl">
 *			 <li class="pageActive">1</li>          
 *           <li>2</li>
 *           <li>3</li>
 *           <li>4</li>
 *           <li>5</li>
 *           <li>6</li>
 *           <li>7</li>
 *           <li>8</li>
 *			 ......
 *		</ul>
 * 		<div class="nextPage" id="nextPage"></div>
 * 	 </div>
 * -------------
 * 用法：
 * Pagination$(parentUlNode,option,func(objectpageNo){
 *		
 * })
 * ----------------------------------------------------
 * @param {HTMLElement} parentUlNode 分页器附着的节点，一定为ul
 * @param {object} option 其它选项
 * 		option {
 *  		totlePageCount: {number} 总页数
 *  		visiblePageNum: {number} 分页器一次所显示的页面数量
 * 		}
 * @param {function} func 页面改变后需要调用的函数，翻页器回传一个可用参数objectpageNo（当前页码）  
 */
;
(function(global){
	var util = Util$();
	var Pagination=function(turnpageUl,option,fnc){
		return new trunPage(turnpageUl,option,fnc);
	}
	//翻页器
	function trunPage(turnpageUl,option,fnc){
		//创建翻页选项li，并添加到父节点turnpageUl中
		var ulinnerhtml="";
		for(var i=1;i<=option.totlePageCount;i++){
			ulinnerhtml=ulinnerhtml+"<li>"+i+"</li>";
		}
		turnpageUl.innerHTML=ulinnerhtml;
		//获取翻页器里面的li
		var lilist=turnpageUl.getElementsByTagName("li");
		//默认显示pageCount页数
		for(var j=0;j<lilist.length;j++){
			if(j>=option.visiblePageNum){
				lilist[j].style.display="none";
			}
		}	
		var prevPageBtn=document.getElementById("prevPage");
		var nextPageBtn=document.getElementById("nextPage");
		prevPageBtn.style.backgroundColor="#dddddd";
		util.addClass(lilist[0],"pageActive");
		var objectpageNo=0;
		//判断最前和最后一页
		function testPage(pageNo){
			var pageIndex=pageNo;
			if(pageIndex<1){
				pageIndex=1;
				objectpageNo=1;
			}
			if(pageIndex>lilist.length){
				pageIndex=lilist.length;
				objectpageNo=lilist.length;
			}
			if(pageIndex==1){
				//第一页
				prevPage.style.backgroundColor="#dddddd";
			}else if(pageIndex==lilist.length){
				//最后一页
				nextPage.style.backgroundColor="#dddddd";
			}else{
				//其他页数
				prevPage.style.backgroundColor="#9dd8b1";
				nextPage.style.backgroundColor="#9dd8b1";
			}
			return pageIndex;
		}
		//点击翻页
		for(i=0;i<lilist.length;i++){
			util.addEvent(lilist[i],"click",function(){
				//获取当前页码
				objectpageNo=util.getIndex(lilist,this)+1;
				var pageIndex=testPage(objectpageNo);
				for(j=0;j<lilist.length;j++){
					//移除所有页码的点击效果
					util.removeClass(lilist[j],"pageActive");
				}
				//给点击的页码添加效果
				util.addClass(this,"pageActive");
				//设置数据
				//getCourseData(getCourseUrl,object);
				fnc(objectpageNo);
			});
		}
		//前一页
		util.addEvent(prevPageBtn,"click",function(){
			//获取类名为“pageActive”的元素以及其索引值
			var prevElement=util.getElementByClassName(lilist,"pageActive");
			prevElementIndex=util.getIndex(lilist,prevElement)+1;
			//页码减一，objectpageNo为前一页页码
			objectpageNo=prevElementIndex-1;
			//检测是否是第一页以及最后一页
			var pageIndex=testPage(objectpageNo);
			//移除所有页码的点击效果
			for(j=0;j<lilist.length;j++){
				util.removeClass(lilist[j],"pageActive");
			}
			//给当前的页码添加效果	
			util.addClass(lilist[pageIndex-1],"pageActive");
			//要显示的页数
			if(pageIndex<option.visiblePageNum){
				for(var i=0;i<option.visiblePageNum;i++){
					lilist[i].style.display="block";
				}
				for(var j=option.visiblePageNum;j<lilist.length;j++){
					lilist[j].style.display="none";
				}
			}else{
				if(lilist[pageIndex-1].style.display=="none"){
					var pagedisnum=pageIndex-option.visiblePageNum;
					for(var i=0;i<lilist.length;i++){
						lilist[i].style.display="none";
					}
					for(var j=pagedisnum;j<pageIndex;j++){
						lilist[j].style.display="block";
					}
				}	
			}
			//已经获得页码，调用回调函数，设置数据
			fnc(objectpageNo);
		});
		//后一页
		util.addEvent(nextPageBtn,"click",function(){
			//获取类名为“pageActive”的元素以及其索引值
			var prevElement=util.getElementByClassName(lilist,"pageActive");
			prevElementIndex=util.getIndex(lilist,prevElement)+1;
			//页码减一，objectpageNo为前一页页码
			objectpageNo=prevElementIndex+1;
			var pageIndex=testPage(objectpageNo);	
			for(j=0;j<lilist.length;j++){
				//移除所有页码的点击效果
				util.removeClass(lilist[j],"pageActive");
			}
			//给当前的页码添加效果
			util.addClass(lilist[pageIndex-1],"pageActive");
			if(pageIndex<8){
				for(var i=0;i<8;i++){
					lilist[i].style.display="block";
				}
				for(var j=8;j<lilist.length;j++){
					lilist[j].style.display="none";
				}
			}else{
				if(lilist[pageIndex-1].style.display=="none"){
					var pagedisnum=pageIndex-8;
					for(var i=0;i<lilist.length;i++){
						lilist[i].style.display="none";
					}
					for(var j=pagedisnum;j<pageIndex;j++){
						lilist[j].style.display="block";
					}
				}				
			}
			//设置当前页数据
			fnc(objectpageNo);
		});
	}
	global.Pagination$ = Pagination;
})(window);

//tab切换与翻页模块
(function(){
	var util = Util$();
	var courseBox=document.getElementById("courseBox");
	var courseTpl=document.getElementById("coursetemplate");	
	var courseHtml=courseTpl.innerHTML;
	var tableftBtn=document.getElementById("tableftBtn");
	var tabrightBtn=document.getElementById("tabrightBtn");
	var turnpageUl=document.getElementById("turnpageUl");
	var turnPageTpl=document.getElementById("turnPageTemplate");
	var clientWidth=parseInt(document.documentElement.clientWidth);
	var totlePageCount;
	var getCourseUrl="http://study.163.com/webDev/couresByCategory.htm";
	var flag=true;
	var object={};
	//初始化
	var pageIndex=1,type=10;
	var pageSize;
	if(clientWidth<1205){
		pageSize=15;
	}else{
		pageSize=20;
	}
	object.pageNo=pageIndex;
	object.psize=pageSize;
	object.type=type;
	//获取、填充课程（初始化为第一页）
	getCourseData(getCourseUrl,object);	
	//获取、填充课程函数
	function getCourseData(url,object){
		util.ajaxGetRequest(url,object,function(responseText){
			var courseObt=JSON.parse(responseText);
			var list=courseObt.list;
			var ulinnerhtml="";
			//设置课程列表
			for(var i=0;i<list.length;i++){
				var Obt=list[i];
				var parameter={};
				parameter.middlePhotoUrl=list[i]["middlePhotoUrl"];
				parameter.name=list[i]["name"];
				parameter.provider=list[i]["provider"];
				parameter.learnerCount=list[i]["learnerCount"];
				parameter.price=list[i]["price"];
				parameter.categoryName=list[i]["categoryName"];
				parameter.description=list[i]["description"];
				ulinnerhtml=ulinnerhtml+util.formatTemplate(parameter,courseHtml);
			}
			courseBox.innerHTML=ulinnerhtml;
			//设置翻页器，只执行一次
			if(flag){
				flag=false;
				//请求成功，显示翻页器
				var mpage=document.getElementById("m-page");
				mpage.style.display="block";
				//填充翻页器
				totlePageCount=courseObt.pagination.totlePageCount;
				var option={};
				option.totlePageCount=totlePageCount;
				option.visiblePageNum=8;
				//设置翻页器
				var trunPage=Pagination$(turnpageUl,option,function(objectpageNo){
					object.pageNo=objectpageNo;
					console.log(object);
					getCourseData(getCourseUrl,object);
				});				
			}
		});
	}
	//自适应获取课程的数量
	util.addEvent(window,"resize",function(){
		var clientWidth=parseInt(document.documentElement.clientWidth);
		if(clientWidth<1205){
			pageSize=15;
		}else{
			pageSize=20;
		}
		object.psize=pageSize;
		object.pageNo=1;
		getCourseData(getCourseUrl,object);	
	});
	//点击切换
	util.addEvent(tableftBtn,"click",function(){
		//获取翻页器里面的li
		var lilist=turnpageUl.getElementsByTagName("li");
		//移除所有页码的点击效果
		for(j=0;j<lilist.length;j++){
			util.removeClass(lilist[j],"pageActive");
		}
		//第一页添加点击效果
		util.addClass(lilist[0],"pageActive");
		//给点击的tab添加效果
		util.addClass(this,"tabActive");
		//移除另外一个tab的点击效果
		util.removeClass(tabrightBtn,"tabActive");
		//默认显示第一页
		object.pageNo=1;
		//type=10，产品设计
		object.type=10;
		getCourseData(getCourseUrl,object);
		//第一页样式改变
		var prevPage=document.getElementById("prevPage");
		prevPage.style.backgroundColor="#dddddd";
	});
	util.addEvent(tabrightBtn,"click",function(){
		//获取翻页器里面的li
		var lilist=turnpageUl.getElementsByTagName("li");
		for(j=0;j<lilist.length;j++){
			util.removeClass(lilist[j],"pageActive");
		}
		util.addClass(lilist[0],"pageActive");
		util.addClass(this,"tabActive");
		util.removeClass(tableftBtn,"tabActive");
		object.pageNo=1;
		object.type=20;
		getCourseData(getCourseUrl,object);
		var prevPage=document.getElementById("prevPage");
		prevPage.style.backgroundColor="#dddddd";
	});

})();

/*热门推荐及滚动模块*/
(function(){
	var util = Util$();
	var getHotcourseUrl="http://study.163.com/webDev/hotcouresByCategory.htm";
	var hotcourse=document.getElementById("hotcourse");
	var hotcoursetpl=document.getElementById("hotcoursetpl");
	var hotcoursetplhtml=hotcoursetpl.innerHTML;
	//获取热门推荐课程列表
	util.ajaxGetRequest(getHotcourseUrl,null,setHotcourse);
	//填充数据、设置动画
	function setHotcourse(responseText){
			//填充数据
			var hotcourses=JSON.parse(responseText);
			var object={};
			var hotcoursehtml="";
			for(var i=0;i<hotcourses.length;i++){
				object.middlePhotoUrl=hotcourses[i]["middlePhotoUrl"];
				object.name=hotcourses[i]["name"];
				object.learnerCount=hotcourses[i]["learnerCount"];
				hotcoursehtml=hotcoursehtml+util.formatTemplate(object,hotcoursetplhtml);
			}
			hotcourse.innerHTML=hotcoursehtml;
			/*滚动，隔5秒更新一门课程*/
			var lilist=hotcourse.getElementsByTagName("li");
			setInterval(function(){
				var newli=lilist[19].cloneNode(true);
				hotcourse.insertBefore(newli,lilist[0]);
				hotcourse.removeChild(lilist[20]);
				/*动画，1s匀速向下滑动*/
				moveDown(hotcourse,-70,0,1000,100);
			},5000);			
	}
	/*动画函数
		@element：滑动的对象
		@begin：开始位置
		@end：结束位置
		@time：动画执行时间
		@step：动画执行的步数
	*/
	function moveDown(element,begin,end,time,step){
		var speed=(end-begin)/step;
		var timeinterval=time/step;
		element.style.top=begin+"px";
		var intervalID=setInterval(function(){
			element.style.top=parseInt(element.style.top)+speed+"px";
			if(parseInt(element.style.top)==end){
				clearInterval(intervalID);
				return;
			}
		},timeinterval);
	}
})();

//js实现宽、窄屏
(function(){
	var util = Util$();
	adaptive();
	util.addEvent(window,"resize",adaptive);
	function adaptive(){
		var clientWidth=parseInt(document.documentElement.clientWidth);
		var noticeAdaptive=document.getElementById("noticeAdaptive");
		var navAdaptive=document.getElementById("navAdaptive");
		var productAdaptive=document.getElementById("productAdaptive");
		var courseAdaptive=document.getElementById("m-course");
		var footerAdaptive=document.getElementById("footerAdaptive");
		var leftBoxAdaptive=document.getElementById("leftBoxAdaptive");
		var fansAdaptive=document.getElementById("fansAdaptive");
		var productBoxAdaptive=document.getElementById("productBoxAdaptive");
		var productsAdaptive=productBoxAdaptive.getElementsByTagName("div");
		var footerLeftAdaptive=document.getElementById("footerLeftAdaptive");		
		if(clientWidth<=1205){
			util.addClass(noticeAdaptive,"adaptive_comwidth");
			util.addClass(navAdaptive,"adaptive_comwidth");
			util.addClass(productAdaptive,"adaptive_comwidth");
			util.addClass(courseAdaptive,"adaptive_comwidth");
			util.addClass(courseAdaptive,"adaptive_comwidth");
			util.addClass(leftBoxAdaptive,"adaptive_leftBox");
			util.addClass(fansAdaptive,"adaptive_fans");
			util.addClass(productBoxAdaptive,"adaptive_productBox");
			for(var i=0;i<productsAdaptive.length;i++){
				if(util.hasClass(productsAdaptive[i]),"product"){
					util.addClass(productsAdaptive[i],"adaptive_product");
				}
				if(util.hasClass(productsAdaptive[i]),"productLeft"){
					util.addClass(productsAdaptive[i],"adaptive_productLeft");
				}
				if(util.hasClass(productsAdaptive[i]),"productCenter"){
					util.addClass(productsAdaptive[i],"adaptive_productCenter");
				}
				if(util.hasClass(productsAdaptive[i]),"productRight"){
					util.addClass(productsAdaptive[i],"adaptive_productRight");
				}
			}
			util.addClass(footerLeftAdaptive,"adaptive_footerLeft");
		}else{
			util.removeClass(noticeAdaptive,"adaptive_comwidth");
			util.removeClass(navAdaptive,"adaptive_comwidth");
			util.removeClass(productAdaptive,"adaptive_comwidth");
			util.removeClass(courseAdaptive,"adaptive_comwidth");
			util.removeClass(courseAdaptive,"adaptive_comwidth");
			util.removeClass(leftBoxAdaptive,"adaptive_leftBox");
			util.removeClass(fansAdaptive,"adaptive_fans");
			util.removeClass(productBoxAdaptive,"adaptive_productBox");
			for(var i=0;i<productsAdaptive.length;i++){
				if(util.hasClass(productsAdaptive[i]),"product"){
					util.removeClass(productsAdaptive[i],"adaptive_product");
				}
				if(util.hasClass(productsAdaptive[i]),"productLeft"){
					util.removeClass(productsAdaptive[i],"adaptive_productLeft");
				}
				if(util.hasClass(productsAdaptive[i]),"productCenter"){
					util.removeClass(productsAdaptive[i],"adaptive_productCenter");
				}
				if(util.hasClass(productsAdaptive[i]),"productRight"){
					util.removeClass(productsAdaptive[i],"adaptive_productRight");
				}
			}
			util.removeClass(footerLeftAdaptive,"adaptive_footerLeft");
		}
	}
})();



