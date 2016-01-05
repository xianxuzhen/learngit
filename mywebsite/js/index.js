$(function(){

	//引入工具方法
	var util = Util$();

	//文章列表
	(function(){
		//获取模板里面的html字符串
		var articleListTplHtml=$(".articleListTpl").html();
		var articleListBox=$(".articleList");
		var attr=dataObj["layout"];
		//默认显示5篇文章，若此类目不超过5篇，显示全部
		var length=5;
		if(length>attr.length){
			length=attr.length;
		}
		var innerhtml="";
		for(var i=0;i<length;i++){
			var obj={};
			obj.imgIndex=0;
			obj.addArticleTtitle=attr[i].addArticleTtitle;
			obj.addarticleContent=attr[i].addarticleContent;
			obj.classify=attr[i].classify;
			obj.articleId=attr[i].articleId;
			obj.good=attr[i].good;
			obj.view=attr[i].view;
			obj.comments=attr[i].comments;
			innerhtml=innerhtml+util.formatTemplate(obj,articleListTplHtml);
		}
		articleListBox.html(innerhtml);
	})();

	//主页点赞模块
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