define(['widget','jquery'],function(widget,$){
	// Window类
	function Tab(options){
		this.options={			//配置参数
			container:null,		//将Tab选择卡渲染到指定的父容器中 
			items:[],			//选项卡项，格式为[{title:'第一项',content:'第一项内容'},{title:'第二项',content:'第二项内容'}]
			eventType:"click",	//事件类型，可以为click或者mouseover
			selectDelay :0,		//当事件为mouseover时，可设置延时selectDelay
			defaultIndex :0,	//默认选中的项目，1表示第一项
			skinClassName:""	//换肤：类名
		};

		this.currentIndex=0;			//当前选择项的索引

		this.init(options);			//初始化
	}
	Tab.prototype=$.extend({},new widget.Widget(),{
		//初始化函数
		init:function(options){			
			$.extend(this.options,options);
			this.render($(this.options.container));
			return this;
		},
		//实现接口创建dom方法
		rendUI:function(){			
			//创建标题和内容
			var title="";
			var content="";
			for(var i=0;i<this.options.items.length;i++){
				title=title+'<div class="tab_title">'+this.options.items[i].title+'</div>'; 
				content=content+'<div class="tab_content">'+this.options.items[i].content+'</div>';
			}
			// 创建tab父容器
			this.boundingBox=$('<div class="tab">'+
				'<div class="tab_header">'+title+'</div>'+
				'<div class="tab_body">'+content+'</div>'+
				'</div>');
			// 获取标题和内容父容器
			this.tabTitles=$(this.boundingBox).find(".tab_header").find("div");
			this.tabContents=$(this.boundingBox).find(".tab_body").find("div");			
		},
		//实现接口绑定事件方法
		bindUI:function(){			
			// 给标题按钮绑定事件
			var that=this;
			var timer=null;
			this.tabTitles.on(this.options.eventType,function(){
				var activeBtn=this;
				if(that.options.selectDelay){
					timer=setTimeout(function(){
						//促发自定义事件：在焦点变化前促发“onbeforeselect”
						that.fire("onbeforeselect");
						show(activeBtn);
						//促发自定义事件：在焦点变化前后促发“onbeforeselect”
						that.fire("onafterselect");
					},that.options.selectDelay);
				}else{
					//促发自定义事件：在焦点变化前促发“onbeforeselect”
					that.fire("onbeforeselect");
					show(activeBtn);
					//促发自定义事件：在焦点变化后促发“onbeforeselect”
					that.fire("onafterselect");
				}				
			}).on("mouseout",function(){
				clearTimeout(timer);
			});
			function show(activeBtn){
				that.tabTitles.css({"backgroundColor":""});
				$(activeBtn).css({"backgroundColor":"red"});
				that.tabContents.css({"display":"none"});
				that.tabContents.eq($(activeBtn).index()).css({"display":"block"});
				//设置当前选择项的索引
				that.currentIndex=$(activeBtn).index();
			}			
		},
		//实现接口初始化UI
		syncUI:function(){				
			if(this.options.defaultIndex){
				this.tabTitles.eq(this.options.defaultIndex-1).css({"backgroundColor":"red"});
				this.tabContents.eq(this.options.defaultIndex-1).css({"display":"block"});
			}else{
				this.tabTitles.eq(0).css({"backgroundColor":"red"});
				this.tabContents.eq(0).css({"display":"block"});
			}
			if(this.options.skinClassName!=""){
				$(this.boundingBox).addClass(this.options.skinClassName);
			}			
		},
		//切换到某个选项卡
		select:function(index){			
			this.tabTitles.css({"backgroundColor":""});
			this.tabTitles.eq(index-1).css({"backgroundColor":"red"});
			this.tabContents.css({"display":"none"});
			this.tabContents.eq(index-1).css({"display":"block"});
			//设置当前选择项的索引
			this.currentIndex=index-1;
		},
		//获得当前选项卡的标题
		getCurrentTitle:function(){			
			return this.tabTitles.eq(this.currentIndex).html();
		},
		//获得当前选项卡的内容
		getCurrentContent:function(){
			return this.tabContents.eq(this.currentIndex).html();
		}		
		
	});
	return {
		Tab:Tab
	}
});