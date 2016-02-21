define(['jquery'],function($){
	function Widget(){
		this.boundingBox=null;		//属性：最外层容器
	};
	Widget.prototype={
		rendUI:function(){},		//接口：添加dom节点
		bindUI:function(){},		//接口：监听事件
		syncUI:function(){},		//接口：初始化组件
		destructor:function(){},	//接口：销毁前的处理函数
		render:function(container){		//方法：渲染组件
			this.rendUI();
			this.handlers={};
			$(container||document.body).append(this.boundingBox);	//将渲染到指定的容器中
			this.bindUI();
			this.syncUI();
			
		},
		destory:function(){			//方法：销毁组件
			this.destructor();
			this.boundingBox.off();
			this.boundingBox.remove();
		},
		//绑定事件
		on:function(type,handler){
			if(typeof this.handlers[type]=="undefined"){
				this.handlers[type]=[];
			}
			this.handlers[type].push(handler);
			return this;
		},
		//促发事件
		fire:function(type,data){
			if(this.handlers[type] instanceof Array){
				var handlers=this.handlers[type];
				for(var i=0,len=handlers.length;i<len;i++){
					handlers[i](data);
				}
			}
			return this;
		}
	}
	return {
		Widget:Widget
	}
});