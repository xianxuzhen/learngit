define(['widget','jquery','jqueryUI'],function(widget,$,$UI){
	// Window类
	function Window(){
		this.cfg={
			width:500,
			height:300,
			title:"系统消息",
			content:"",
			hasCloseBtn:false,
			hasMask:true,
			isDraggable:true,
			dragHandle:null,
			skinClassName:null,
			text4AlertBtn:"确定",
			text4ConfirmBtn:"确定",
			text4CancelBtn:"取消",
			handler4AlertBtn:null,
			handler4CloseBtn:null,
			handler4ConfirmBtn:null,
			handler4CancelBtn:null
		};
	}
	Window.prototype=$.extend({},new widget.Widget(),{
		rendUI:function(){
			// 创建弹窗主体
			var footerContent="";
			switch(this.cfg.winType){
				case "alert":
					footerContent='<input type="button" class="window_alertBtn" value="'+this.cfg.text4AlertBtn+'">';
					break;
				case "confirm":
					footerContent='<input type="button" value="'+this.cfg.text4ConfirmBtn+'" class="window_confirmBtn"><input type="button" value="'+this.cfg.text4CancelBtn+'" class="window_cancelBtn">';
					break;
				case "prompt":
					this.cfg.content+='<p><input type="text" class="window_promptInput"></p>';
					footerContent='<input class="window_promptBtn" type="button" value="'+this.cfg.text4PromptBtn+'"><input class="window_promptCancelBtn" type="button" value="'+this.cfg.text4PromptCancelBtn+'">';
					break;
			}
			this.boundingBox=$('<div class="window_bounding">'
				+'<div class="window_header">'+this.cfg.title+'</div>'
				+'<div class="window_body">'+this.cfg.content+'</div>'
				+'<div class="window_footer">'+footerContent+'</div>'
				+'</div>');
			// 创建遮罩
			if(this.cfg.hasMask){
				this._mask=$('<div class="window_mask"></div>');
				this._mask.appendTo("body");
			};
			// 创建按钮
			if(this.cfg.hasCloseBtn){
				this.boundingBox.append('<span class="window_closeBtn">X</span>');
			};
			this.boundingBox.appendTo(document.body);
			this.cfg.promptInput=$(".window_promptInput");
		},
		bindUI:function(){
			var that=this;
			// 确定按钮绑定事件
			this.boundingBox.delegate(".window_alertBtn","click",function(){
				that.fire("alert");
				that.destory();
			}).delegate(".window_closeBtn","click",function(){
				// 关闭按钮绑定事件
				that.fire("close");
				that.destory();
			}).delegate(".window_confirmBtn","click",function(){
				that.fire("confirm");
				that.destory();
			}).delegate(".window_cancelBtn","click",function(){
				that.fire("cancel");
				that.destory();
			}).delegate(".window_promptBtn","click",function(){
				that.fire("prompt",that.cfg.promptInput.val());
				that.destory();
			}).delegate(".window_promptCancelBtn","click",function(){
				that.fire("promptCancel",that.cfg.promptInput.val());
				that.destory();
			});			
			// 绑定自定义事件：“点击确定按钮前促发”
			if(this.cfg.handler4AlertBtn){
				this.on("alert",this.cfg.handler4AlertBtn);
			}			
			// 绑定自定义事件：“关闭前促发”
			if(this.cfg.handler4CloseBtn){
				this.on("close",this.cfg.handler4CloseBtn);
			}
			// 绑定自定义事件：“点击确定按钮前促发”
			if(this.cfg.handler4ConfirmBtn){
				this.on("confirm",this.cfg.handler4ConfirmBtn);
			}			
			// 绑定自定义事件：“关闭前促发”
			if(this.cfg.handler4CancelBtn){
				this.on("cancel",this.cfg.handler4CancelBtn);
			}
		},
		syncUI:function(){
			// 初始化大小和位置
			this.boundingBox.css({
				width:this.cfg.width+"px",
				height:this.cfg.height+"px",
				left:this.cfg.x?this.cfg.x:(window.innerWidth-this.cfg.width)/2+"px",
				top:this.cfg.y?this.cfg.y:(window.innerHeight-this.cfg.height)/2+"px"
			});
			// 换肤
			if(this.cfg.skinClassName){
				this.boundingBox.addClass(this.cfg.skinClassName);
			};
			// 拖动
			if(this.cfg.isDraggable){
				if(this.cfg.dragHandle){
					this.boundingBox.draggable({handle:this.cfg.dragHandle});
				}else{
					this.boundingBox.draggable();
				}				
			}
		},
		destructor:function(){
			this._mask&&this._mask.remove();
		},
		// 模拟弹窗
		alert:function(cfg){
			$.extend(this.cfg,cfg,{winType:"alert"});
			this.render();
			return this;
		},
		// 模拟弹窗
		confirm:function(cfg){
			$.extend(this.cfg,cfg,{winType:"confirm"});
			this.render();
			return this;
		},
		prompt:function(cfg){
			$.extend(this.cfg,cfg,{winType:"prompt"});
			this.render();
			return this;
		}
	});
	return {
		Window:Window
	}
});