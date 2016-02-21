require.config({
	paths:{
		jquery:'jquery-1.10.2'
	}
});
require(['jquery','pager'],function($,Pager){
	var pager=new Pager.Pager({
		container:$(".pager1"),
		totalPage:100,
		viewSize :8,
		currentPage: 1,
		currentPagePosition :3,
		labelFirst :"首页",
		labelPrev :"上一页",
		labelNext :"下一页",
		labelLast :"尾页"
	});
	// 自定义事件：页码改变前促发
	pager.on("beforeChange",function(beforeChangePage){
		console.log("点击前的页码是："+beforeChangePage);
		// 组件事件：getCurrentPage，获取当前的页码
		alert("点击前的页码是："+pager.getCurrentPage());
	});
	// 自定义事件：页码改变后促发
	pager.on("afterChange",function(afterChangePage){
		console.log("点击后的页码是："+afterChangePage);
		// 组件事件：getCurrentPage，获取当前的页码
		alert("点击后的页码是："+pager.getCurrentPage());
	});
	var pager2=new Pager.Pager({
		container:$(".pager2"),
		totalPage:100,
		viewSize :15,
		currentPage: 1,
		currentPagePosition :7,
		labelFirst :"首页",
		labelPrev :"上一页",
		labelNext :"下一页",
		labelLast :"尾页",
		skinClassName:"skin_a"
	});
});