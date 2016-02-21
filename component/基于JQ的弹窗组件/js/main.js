require.config({
	paths:{
		jquery:'jquery-1.10.2',
		jqueryUI:'jquery-ui.min'
	}
});
require(['jquery','window'],function($,w){
	$('#a').click(function(){
		var win=new w.Window();
		win.alert({
			width:300,
			height:200,
			content:"您的系统已经崩溃！！！",
			hasCloseBtn:true,
			//hasMask:false,
			dragHandle:".window_header",
			skinClassName:"window_skin_a",
			text4AlertBtn:"警告",
			handler4AlertBtn:function(){
				alert("you click the sure button 1");
			},
			handler4CloseBtn:function(){
				alert("you click the close button 1");
			}
		}).on("alert",function(){
			alert("you click the sure button 2");
		}).on("alert",function(){
			alert("you click the sure button 3");
		}).on("close",function(){
			alert("you click the close button 2");
		}).on("close",function(){
			alert("you click the close button 3");
		});
		
	});	
	$('#b').click(function(){
		var win=new w.Window();
		win.confirm({
			title:"系统消息",
			content:"你确定要删除这个文件吗？",
			hasCloseBtn:true,
			width:300,
			height:200,
			y:100,
			text4ConfirmBtn:"是",
			text4CancelBtn:"否",
			dragHandle:".window_header",
		}).on("confirm",function(){
			alert("确定");
		}).on("cancel",function(){
			alert("取消");
		}).on("close",function(){
			alert("you click the close button 1");
		}).on("close",function(){
			alert("you click the close button 2");
		});
	});	

	$('#c').click(function(){
		var win=new w.Window();
		win.prompt({
			title:"系统消息",
			content:"请输入您的姓名",
			hasCloseBtn:true,
			width:300,
			height:200,
			y:100,
			text4PromptBtn:"输入",
			text4PromptCancelBtn:"取消",
			dragHandle:".window_header"
		}).on("prompt",function(inputVal){
			alert("您输入了"+inputVal);
		}).on("promptCancel",function(inputVal){
			alert("您取消了");
		});
	});			
	
});