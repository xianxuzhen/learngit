$(function(){
	//引入工具方法
	var util = Util$();

	//前端之路下拉列表模块
	(function(){
		$(".learnWeb").hover(function(){
			$(".dropDownList").stop(true,false).slideDown();
		},function(){
			$(".dropDownList").stop(true,false).slideUp();
		});
	})();

	//登陆以及添加文章模块
	(function(){
		//引入工具方法
		var util = Util$();
		//点击添加文章
		$(".addArticleBtn").click(function(){
			//弹出登陆框
			$(".m-screenTop").show();
			$(".m-login").show();
		});
		//关闭登陆框
		$(".loginClose").click(function(){
			//关闭登陆框
			$(".m-screenTop").hide();
			$(".m-login").hide();
		});
		//登陆
		$(".loginBtn").click(function(){
			var name=$(".username").val();
			var password=$(".password").val();
			//校验登陆
			if(name=="xxz"&&password=="xxz"){
				//隐藏登陆框
				$(".m-screenTop").hide();
				$(".m-login").hide();
				//登陆成功，显示添加文章
				$(".m-addArticleBox").show();						
			}else{
				//隐藏登陆框
				$(".m-screenTop").hide();
				$(".m-login").hide();
				//登陆失败，出现提示
				alert("您是游客，没有写文章的权限！");
			}
		});

		//点击提交添加文章
		$(".addBtn").click(function(){
			//获取输入值
			var addArticleTtitle=$(".addArticleTtitle").val();
			var classify=$(".classify").val();
			var addarticleContent=$(".addarticleContent").val();
			//将内容转化为HTML可用格式
			addarticleContent=util.turntoInnerHtml(addarticleContent);
			var addLink=$(".addLink").val();
			addLink=util.turntoLinkHtml(addLink);
			//构建文章对象	
			var addArticleObject={};
			addArticleObject.addArticleTtitle=addArticleTtitle;
			addArticleObject.classify=classify;
			addArticleObject.addarticleContent=addarticleContent;
			addArticleObject.addLink=addLink;
			var date=new Date();
			addArticleObject.date=util.formatDate(date);
			addArticleObject.author="xxz";
			addArticleObject.good=0;
			addArticleObject.view=0;
			addArticleObject.comments=0;
			addArticleObject.commentsStrArr=[];
			//添加新数据到数据对象
			switch(classify){
				case "html":
					addArticleObject.articleId=dataObj["html"].length;
					dataObj.html.push(addArticleObject);
					break;
				case "css":
					addArticleObject.articleId=dataObj["css"].length;
					dataObj.css.push(addArticleObject);
					break;
				case "javascript":
					addArticleObject.articleId=dataObj["javascript"].length;
					dataObj.javascript.push(addArticleObject);
					break;
				case "dom":
					addArticleObject.articleId=dataObj["dom"].length;
					dataObj.dom.push(addArticleObject);
					break;
				case "jquery":
					addArticleObject.articleId=dataObj["jquery"].length;
					dataObj.jquery.push(addArticleObject);
					break;
				case "zepto":
					addArticleObject.articleId=dataObj["zepto"].length;
					dataObj.zepto.push(addArticleObject);
					break;
				case "git":
					addArticleObject.articleId=dataObj["git"].length;
					dataObj.git.push(addArticleObject);
					break;
				case "flex":
					addArticleObject.articleId=dataObj["flex"].length;
					dataObj.flex.push(addArticleObject);
					break;
				case "layout":
					addArticleObject.articleId=dataObj["layout"].length;
					dataObj.layout.push(addArticleObject);
					break;
				case "buildWebsite":
					addArticleObject.articleId=dataObj["buildWebsite"].length;
					dataObj.buildWebsite.push(addArticleObject);
					break;
				case "resources":
					addArticleObject.articleId=dataObj["resources"].length;
					dataObj.resources.push(addArticleObject);
					break;
				case "encourage":
					addArticleObject.articleId=dataObj["encourage"].length;
					dataObj.encourage.push(addArticleObject);
					break;
				case "noCategory":
					addArticleObject.articleId=dataObj["noCategory"].length;
					dataObj.noCategory.push(addArticleObject);
					break;
			};
			// 把对象输出到控制台，因为没有服务器，需要手动更新，更新时把输出的JSON字符串复制到data.js文件，
			// 替代原来的JSON字符串，再把文件用git上传到github。
			var dataObJsonStr=JSON.stringify(dataObj);
			console.log(dataObJsonStr);
			//console.log(dataObj);
			//隐藏添加文章
			$(".m-addArticleBox").hide();
			//console.log("hah");
			//$(".articleList").html(util.turntoInnerHtml(dataObj.css[0].addarticleContent));			
		});

		//关闭添加文章
		$(".leaveBtn").click(function(){
			$(".m-addArticleBox").hide();
		});

		//点击重置按钮
		$(".clearBtn").click(function(){
			$(".addForm")[0].reset();
		});
	})();

	//收藏资源模块
	(function(){
		$(".collection").click(function(){
			alert("努力更新中...");
		});
	})();

});