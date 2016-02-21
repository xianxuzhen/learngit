define(['widget','jquery'],function(widget,$){
	// Window类
	function Carousel(options){
		this.options={			//配置参数
			container:null,
			items:[],		//描述每个滚动项的字符数据
			viewSize:3,		//描述一页显示多少个滚动项，默认3
			hadBtn:true,
			autoplay:true,
			skinClassName:null,
			duration :500,
			interval :3000
		};

		this.init(options);

		
	}
	Carousel.prototype=$.extend({},new widget.Widget(),{
		//初始化函数
		init:function(options){			
			$.extend(this.options,options);
			this.render($(this.options.container));
			return this;
		},
		//实现接口创建dom方法
		rendUI:function(){
			//创建轮播项			
			this.boundingBox=$('<div class="carousel_parent"><ul class="carousel_box"></ul></div>');
			this.carousel_box=$(this.boundingBox).find(".carousel_box");
			for(var i=0,len=this.options.items.length;i<len;i++){
				var liitem=$('<li class="carousel_item"><a href="#"><img src='+this.options.items[i].img+'></a></li>');
			    this.carousel_box.append(liitem);				
			}
			// 创建按钮
			if(this.options.hadBtn){
				this.carousel_leftBtn=$('<div class="carousel_leftBtn"></div>');
				this.carousel_rightBtn=$('<div class="carousel_rightBtn"></div>');
				$(this.options.container).append(this.carousel_leftBtn);
				$(this.options.container).append(this.carousel_rightBtn);
			}	
		},
		//实现接口绑定事件方法
		bindUI:function(){			
			//按钮绑定事件
			var that=this;
			var left=$(this.options.container).width()/this.options.viewSize;
			//向左轮播
			$(this.carousel_leftBtn).on('click',function(){
				clearInterval(that.timer);
				$(that.carousel_box).stop(true,false).animate({
					left:-left
				},that.options.duration,function(){
					$(that.carousel_box).append($(that.carousel_box).find("li").first());
					$(that.carousel_box).css({"left":"0px"});
				});
				that.timer=setInterval(autoplay,that.options.interval);
			});
			//向右轮播
			$(this.carousel_rightBtn).on('click',function(){
				clearInterval(that.timer);
				$(that.carousel_box).prepend($(that.carousel_box).find("li").last());
				$(that.carousel_box).css({"left":-left});
				$(that.carousel_box).stop(true,false).animate({
					left:"0px"
				},that.options.duration,function(){					
					$(that.carousel_box).css({"left":"0px"});
				});
				that.timer=setInterval(autoplay,that.options.interval);				
			});
			function autoplay(){
				$(that.carousel_box).animate({
					left:-left
				},that.options.duration,function(){
					$(that.carousel_box).append($(that.carousel_box).find("li").first());
					$(that.carousel_box).css({"left":"0px"});
				});
			}				
		},
		//实现接口初始化UI
		syncUI:function(){
			var that=this;
			var left=$(this.options.container).width()/this.options.viewSize;
			//根据要显示的项的个数和容器总宽度来计算每个乡的宽度				
			if(this.options.viewSize!=undefined){
				var lisitem=$(this.carousel_box).find('.carousel_item');
				var width=this.options.container?parseInt($(this.options.container).width()/this.options.viewSize):$(document.body).width()/this.options.viewSize;
				//设置每一项li宽度
				lisitem.innerWidth(width);
				//设置ul宽度
				$(this.carousel_box).width(width*lisitem.length);
			}
			//自动轮播
			if(this.options.autoplay){
				this.timer=setInterval(autoplay,this.options.interval);
			}
			function autoplay(){
				$(that.carousel_box).animate({
					left:-left
				},that.options.duration,function(){
					$(that.carousel_box).append($(that.carousel_box).find("li").first());
					$(that.carousel_box).css({"left":"0px"});
				});
			}
			//更换样式
			if(this.options.skinClassName){
				this.boundingBox.addClass(this.options.skinClassName);
			}
		},
		start:function(){
			var that=this;
			var left=$(this.options.container).width()/this.options.viewSize;
			this.timer=setInterval(autoplay,this.options.interval);
			function autoplay(){
				$(that.carousel_box).animate({
					left:-left
				},that.options.duration,function(){
					$(that.carousel_box).append($(that.carousel_box).find("li").first());
					$(that.carousel_box).css({"left":"0px"});
				});
			}
		},
		stop:function(){
			clearInterval(this.timer);
		},
		getTotalCount:function(){
			return $(this.carousel_box).find('.carousel_item').length;
		}
		
	});
	return {
		Carousel:Carousel
	}
});