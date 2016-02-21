define(['widget','jquery'],function(widget,$){
	// Window类
	function Pager(options){
		this.options={			//配置参数
			container:null,
			totalPage :100,
			viewSize :1,
			currentPage: 1,				
			currentPagePosition :4, 
			labelFirst :"首页",
			labelPrev :"上一页",
			labelNext :"下一页",
			labelLast :"尾页",
			skinClassName:""
		};
		// 初始化
		this.init(options);	
		return this;	
	}
	Pager.prototype=$.extend({},new widget.Widget(),{
		//初始化函数
		init:function(options){			
			$.extend(this.options,options);
			this.render(this.options.container);
			return this;
		},
		//实现接口创建dom
		rendUI:function(){
			this.boundingBox=$('<div class="pager_container">'+
									'<span class="pager_first">'+this.options.labelFirst+'</span>'+
									'<span class="pager_prev">'+this.options.labelPrev+'</span>'+	
									'<span class="pager_parent"></span>'+
									'<span class="pager_next">'+this.options.labelNext+'</span>'+
									'<span class="pager_last">'+this.options.labelLast+'</span>'+		
								'</div>');
			// 根据viewSize创建页码个数
			var viewSize=this.options.viewSize;
			this.pagerParent=$(this.boundingBox).find(".pager_parent");	
			for(var i=1;i<=viewSize;i++){
				var pagerLinkItems=$('<a class="pager_normal">'+i+'</a>');
				$(this.pagerParent).append(pagerLinkItems);
			}
			// 获取页码
			this.pageList=$(this.pagerParent).find("a");
			// 初始化显示
			this.ShowData();						
		},
		//实现接口绑定事件方法
		bindUI:function(){
			// 存储this对象，方便使用
			var that=this;
			// 获取首页、上一页、下一页、尾页四个按钮
			this.firstPageBtn=$(this.boundingBox).find(".pager_first");		
			this.prevPageBtn=$(this.boundingBox).find(".pager_prev");		
			this.nextPageBtn=$(this.boundingBox).find(".pager_next");
			this.lastPageBtn=$(this.boundingBox).find(".pager_last");
			// 点击首页按钮
			$(this.firstPageBtn).on('click',function(){
				// 页码改变前促发
				that.fire("beforeChange",that.options.currentPage);
				// 把当前页码设置为1
				that.options.currentPage=1;
				// 根据当前页码显示数据
				that.ShowData();
				// 页码改变后促发
				that.fire("afterChange",that.options.currentPage);
			});
			// 点击尾页按钮
			$(this.lastPageBtn).on('click',function(){
				// 页码改变前促发
				that.fire("beforeChange",that.options.currentPage);
				// 把当前页码设置为：totalPage
				that.options.currentPage=that.options.totalPage;
				// 根据当前页码显示数据
				that.ShowData();
				// 页码改变后促发
				that.fire("afterChange",that.options.currentPage);
			});
			// 点击上一页按钮
			$(this.prevPageBtn).on('click',function(){
				// 页码改变前促发
				that.fire("beforeChange",that.options.currentPage);
				// 获取上次的页码
				//that.options.currentPage=$(".pager_current").html();
				// 页码减1
				that.options.currentPage--;				
				// 根据当前页码显示数据
				that.ShowData();
				// 页码改变后促发
				that.fire("afterChange",that.options.currentPage);
			});
			// 点击下一页按钮
			$(this.nextPageBtn).on('click',function(){
				// 页码改变前促发
				that.fire("beforeChange",that.options.currentPage);
				// 获取上次的页码
				//that.options.currentPage=$(".pager_current").html();
				// 页码加1
				that.options.currentPage++;	
				// 根据当前页码显示数据
				that.ShowData();
				// 页码改变后促发
				that.fire("afterChange",that.options.currentPage);					
			});
			// 点击任意一页
			$(this.pageList).on('click',function(){
				// 页码改变前促发
				that.fire("beforeChange",that.options.currentPage);
				// 获取当前页码
				that.options.currentPage=$(this).html();
				// 根据当前页码显示数据
				that.ShowData();
				// 页码改变后促发
				that.fire("afterChange",that.options.currentPage);
			});
		},
		//实现接口初始化UI
		syncUI:function(){
			//更换样式
			if(this.options.skinClassName){
				this.boundingBox.addClass(this.options.skinClassName);
			}
		},
		ShowData:function(){
			//原来的页码变正常状态
			$(this.pageList).removeClass("pager_current");
			$(this.pageList).addClass("pager_normal");
			// 要显示的数据数组
			var showDataArr=[];	
			// 当前页
			var currentPage=this.options.currentPage;
			// 当前页位置
			var currentPagePosition=this.options.currentPagePosition;
			// 显示的页数
			var viewSize=this.options.viewSize;
			// 总页数
			var totalPage=this.options.totalPage;
			//根据当前页大小显示不同数据			
			if(currentPage<=currentPagePosition+1){
				//当前页码小于（当前页面链接在页面链接列表中的默认位置）时
				//页码数不能小于1			
				if(currentPage<1){
					currentPage=1;
					this.options.currentPage=1;
				}
				// 显示1~viewSize（默认显示多少个）的页码
				for(var i=1;i<=viewSize;i++){
					showDataArr.push(i);
				}
				// 当前的页码改变状态
				$(this.pageList).eq(currentPage-1).addClass("pager_current");
			}else if(currentPage>currentPagePosition+1&&currentPage<=totalPage-viewSize){
				// 当前页码大于（当前页面链接在页面链接列表中的默认位置），并且小于（总页数-要显示的页数）时
				for(var i=currentPage-currentPagePosition;i<currentPage+viewSize-currentPagePosition;i++){
					showDataArr.push(i);
				}	
				// 当前的页码改变状态
				$(this.pageList).eq(currentPagePosition).addClass("pager_current");
			}else if(currentPage>totalPage-viewSize){
				// 当前页码大于（总页数-要显示的页数）时
				// 页码数不能大于totalPage（总页数）
				if(currentPage>totalPage){
					currentPage=totalPage;
					this.options.currentPage=totalPage;
				}
				for(var i=totalPage-viewSize+1;i<=totalPage;i++){
					showDataArr.push(i);
				}
				$(this.pageList).eq(viewSize-(totalPage-currentPage)-1).addClass("pager_current");					
			}
			// 改变页码内容
			for(var i=0;i<this.pageList.length;i++){
				$(this.pageList[i]).html(showDataArr[i]);
			}
		},
		getCurrentPage:function(){
			return this.options.currentPage;
		}		
	})
	return {
		Pager:Pager
	}
});