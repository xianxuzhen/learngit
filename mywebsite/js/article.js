$(function(){
	//引入工具方法
	var util = Util$();

	//显示文章模块
	(function(){
		//获取模板里面的html字符串
		var showArticleTplInnerHtml=$(".showArticleTemplate").html();
		var showArticleBox=$(".articleBody");
		//获取用户url传递过来的参数
		var parameterStr=window.location.search;
		var start=parameterStr.indexOf("type");
		var str=parameterStr.slice(start);
		console.log(str);
		var arr=str.split("&");
		var parameterArr=[];
		for(var i=0;i<arr.length;i++){
			var newArr=arr[i].split("=");
			parameterArr.push(newArr[1]);
		}
		var type=parameterArr[0];
		var articleId=parameterArr[1];	
		console.log(type);	
		console.log(articleId);
		//根据不同类目，设置显示不同类目文章
		switch(type){
			case "html":
				setArticleBox("html",articleId);
				break;
			case "css":
				setArticleBox("css",articleId);
				break;
			case "javascript":
				setArticleBox("javascript",articleId);
				break;
			case "jquery":
				setArticleBox("jquery",articleId);
				break;
			case "zepto":
				setArticleBox("zepto",articleId);
				break;
			case "git":
				setArticleBox("git",articleId);
				break;
			case "flex":
				setArticleBox("flex",articleId);
				break;
			case "layout":
				setArticleBox("layout",articleId);
				break;
			case "buildWebsite":
				setArticleBox("buildWebsite",articleId);
				break;
			case "resources":
				setArticleBox("resources",articleId);
				break;
			case "noCategory":
				setArticleBox("noCategory",articleId);
				break;
			case "encourage":
				setArticleBox("encourage",articleId);
				break;
		};
		//填充文章的函数
		function setArticleBox(type,articleId){
			var attr=dataObj[type];
			var article=attr[articleId];
			//点击数量+1
			article.view++;	
			var obj={};
			obj.addArticleTtitle=article.addArticleTtitle;
			obj.addarticleContent=article.addarticleContent;
			obj.classify=article.classify;
			obj.author=article.author;
			obj.date=article.date;
			obj.good=article.good;
			obj.view=article.view;
			var addLink=article.addLink;
			if(article.addLink){
				obj.addLink=addLink.replace(/&quot;/g,'"');
			}else{
				obj.addLink="";
			}			
			var innerHtml=util.formatTemplate(obj,showArticleTplInnerHtml);
			showArticleBox.html(innerHtml);
		}		

	})();

});