require.config({
	paths:{
		jquery:'jquery-1.10.2'
	}
});
require(['jquery','datePicker'],function($,datePicker){
	var datePicker1,datePicker2=null;
	$(".getDateInput").on('focus',function(){
		datePicker1=new datePicker.DatePicker({
			container:$('.container'),
			dateInput:$('.getDateInput'),
			weekStart:"Mon",
			format:"yy-mm-dd",
			offsetX:0,
			offsetY:34
		});		
	});

	$(".div").on('click',function(){
		datePicker2=new datePicker.DatePicker({
			container:$(document.body),
			dateInput:$(".divspan"),
			weekStart:"Sun",
			yearRange:[2000,2040],
			format:"yy/mm/dd",
			offsetX:20,
			offsetY:380,
			skinClassName:"skin_a"
		});
		datePicker2.on("beforeSelectDate",function(beforeData){
			alert("您准备选择日期！选择前的日期为："+beforeData);
		});
		datePicker2.on("afterSelectDate",function(afterData){
			alert("您已经选择了日期！选择后的日期为："+afterData);
		});
	});
	$(".btn1").on('click',function(){
		alert("您选择了："+datePicker2.getSelectDate());		
	});
	$(".btn2").on('click',function(){
		datePicker2.hide();
	});
	$(".btn3").on('click',function(){
		datePicker2.show();
	});
});