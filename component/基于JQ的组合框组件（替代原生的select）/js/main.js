require.config({
	paths:{
		jquery:'jquery-1.10.2'
	}
});
require(['jquery','ComboBox'],function($,ComboBox){
	var comboBox=new ComboBox.ComboBox({
		container:$(".comboBox1"),
		items :[{content:"北京",value:"beijing"},{content:"上海",value:"shanghai"},{content:"广州",value:"guangzhou"},{content:"深圳",value:"shenzhen"},{content:"杭州",value:"hangzhou"},{content:"苏州",value:"suzhou"},{content:"南京",value:"nanjing"},{content:"天津",value:"tianjin"},{content:"重庆",value:"chongqing"}],
		boxWidth:100,
		readonly:false,
		originIndex:0
	});
	var comboBox1=new ComboBox.ComboBox({
		container:$(".comboBox2"),
		items :[{content:"北京",value:"beijing"},{content:"上海",value:"shanghai"},{content:"广州",value:"guangzhou"},{content:"深圳",value:"shenzhen"},{content:"杭州",value:"hangzhou"},{content:"苏州",value:"suzhou"},{content:"南京",value:"nanjing"},{content:"天津",value:"tianjin"},{content:"重庆",value:"chongqing"}],
		boxWidth:100,
		readonly:false,
		originIndex:0,
		skinClassName:"skin_a",
		viewSize:8
	});
	// comboBox.disable();
	// comboBox.enable();
	// comboBox.setWidth("224px");
	// comboBox.on("beforeshow",function(){
	// 	alert("列表展示前执行！");
	// });
	// comboBox.on("aftershow",function(){
	// 	alert("列表展示后执行！");
	// });
	// comboBox.on("beforehide",function(){
	// 	alert("列表隐藏前执行！");
	// });
	// comboBox.on("afterhide",function(){
	// 	alert("列表隐藏后执行！");
	// });
	// comboBox.on("beforeselectitem",function(selectcontent){
	// 	alert("选择某项前执行！选择前的值为:"+comboBox.getSelectIndex());
	// });
	// comboBox.on("afterselectitem",function(selectcontent){
	// 	alert("选择某项后执行！选择前的值为:"+comboBox.getSelectIndex());
	// });
	// comboBox.on("getfocus",function(content){
	// 	console.log("输入框获得焦点时促发"+content);
	// });

});