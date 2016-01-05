$(function(){

	//引入工具方法
	var util = Util$();

	//根据点击不同类目（html、css、javascript...）链接，显示不同类目文章
	(function(){
		//获取用户url传递过来的参数type
		var parameterStr=window.location.search;
		var type=parameterStr.slice(6);
		//获取模板里面的html字符串
		var addArticleTplInnerHtml=$(".addArticleTpl").html();
		var articleListBox=$(".articleList");
		//根据不同类目，设置显示不同类目文章
		switch(type){
			case "html":
				$(".category li").eq(1).addClass("default");
				setAddArticleListBox("html");
				break;
			case "css":
				$(".category li").eq(2).addClass("default");
				setAddArticleListBox("css");
				break;
			case "javascript":
				$(".category li").eq(3).addClass("default");
				setAddArticleListBox("javascript");
				break;
			case "jquery":
				$(".category li").eq(4).addClass("default");
				setAddArticleListBox("jquery");
				break;
			case "zepto":
				$(".category li").eq(5).addClass("default");
				setAddArticleListBox("zepto");
				break;
			case "layout":
				$(".category li").eq(6).addClass("default");
				setAddArticleListBox("layout");
				break;
			case "flex":
				$(".category li").eq(7).addClass("default");
				setAddArticleListBox("flex");
				break;
			case "git":
				$(".category li").eq(8).addClass("default");
				setAddArticleListBox("git");
				break;
			case "buildWebsite":
				$(".category li").eq(9).addClass("default");
				setAddArticleListBox("buildWebsite");
				break;
			case "resources":
				$(".category li").eq(10).addClass("default");
				setAddArticleListBox("resources");
				break;									
			case "encourage":
				$(".category li").eq(11).addClass("default");
				setAddArticleListBox("encourage");
				break;
			case "noCategory":
				$(".category li").eq(12).addClass("default");
				setAddArticleListBox("noCategory");
				break;
		};
		//填充文章的函数
		function setAddArticleListBox(type){
			var attr=dataObj[type];
			//默认显示5篇文章，若此类目不超过5篇，显示全部
			var length=5;
			if(length>attr.length){
				length=attr.length;
			}
			var innerhtml="";
			for(var i=0;i<length;i++){
				var obj={};
				obj.imgIndex=1;
				obj.addArticleTtitle=attr[i].addArticleTtitle;
				obj.addarticleContent=attr[i].addarticleContent;
				obj.classify=attr[i].classify;
				obj.articleId=attr[i].articleId;
				obj.good=attr[i].good;
				obj.view=attr[i].view;
				obj.comments=attr[i].comments;
				innerhtml=innerhtml+util.formatTemplate(obj,addArticleTplInnerHtml);
			}
			articleListBox.html(innerhtml);
		}		
	})();
	
	//点赞模块
	(function(){
		$(".article .good").click(function(){
			//获取此篇文章的类型和ID
			var url=$(this).parentsUntil("div.articleList").children("h3").children("a").attr("href");
			var start=url.indexOf("?")+1;
			var parameterStr=url.slice(start);
			var arr=parameterStr.split("&");
			var parameter=[];
			for(var i=0;i<arr.length;i++){
				var parameterArr=arr[i].split("=");
				parameter.push(parameterArr[1]);
			}
			var type=parameter[0];
			var articleId=parameter[1];
			//获取此类文章列表
			var articleList=dataObj[type];
			for(var i=0;i<articleList.length;i++){
				if(articleList[i].articleId==articleId){
					articleList[i].good++;
					$(this).html(articleList[i].good);
					console.log(dataObj);
				}
			}

		});
	})();


});