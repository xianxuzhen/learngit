require.config({
	paths:{
		jquery:'jquery-1.10.2'
	}
});
require(['jquery','tab'],function($,tab){
	//创建一个Tab对象
	var tab1=new tab.Tab({
		container:$(".parent1"),
		items:[{title:"title1",content:"content1"},{title:"title2",content:"content2"},{title:"title3",content:"content3"}],
		eventType:"mouseover",
		selectDelay:50,
		defaultIndex:0
	});
	//切换到第二个选项卡（从1开始算）
	tab1.select(2);
	//焦点改变前促发
	tab1.on("onbeforeselect",function(){
		alert(tab1.getCurrentTitle());		//title2
	});
	//焦点改变后促发
	tab1.on("onafterselect",function(){
		alert(tab1.getCurrentTitle());		//title
	});

	var tab2=new tab.Tab({
		container:$(".parent2"),
		items:[{title:"title1",content:"content1"},{title:"title2",content:"content2"},{title:"title3",content:"content3"}],
		skinClassName:"skin_a"
	});
	
	
});