define(['widget','jquery'],function(widget,$){
	// Window类
	function ComboBox(options){
		this.options={			//配置参数
			container :null,
			items :[],
			viewSize :5,
			readonly :false,
			boxWidth :"100%",
			originIndex :0,
			skinClassName:""	//换肤：类名			 
		};
		// 初始化
		this.init(options);	
		return this;	
	}
	ComboBox.prototype=$.extend({},new widget.Widget(),{
		//初始化函数
		init:function(options){			
			$.extend(this.options,options);
			this.render(this.options.container);
			return this;
		},
		//实现接口创建dom
		rendUI:function(){
			this.boundingBox=$('<div class="comboBox_container">'+
									'<div class="comboBox_inputBox">'+
										'<input class="comboBox_input" type="text" />'+
										'<div class="comboBox_btn "></div>'+
									'</div>'+
									'<ul class="comboBox_listBox"></ul>'+
								'</div>');
			this.comboBox_input=$(this.boundingBox).find(".comboBox_input");	
			this.comboBox_btn=$(this.boundingBox).find(".comboBox_btn");		
			this.comboBox_listBox=$(this.boundingBox).find(".comboBox_listBox");
			for(var i=0;i<this.options.items.length;i++){
				var liitem=$('<li value="'+this.options.items[i].value+'">'+this.options.items[i].content+'</li>');
				$(this.comboBox_listBox).append(liitem);
			}
			this.lioptions=$(this.comboBox_listBox).find("li");	
			this.selectcontent="";
		},
		//实现接口绑定事件方法
		bindUI:function(){
			var that=this;
			$(this.comboBox_btn).on('click',function(){
				event.stopPropagation();
				that.fire("beforeshow");
				$(that.comboBox_listBox).show();
				that.fire("aftershow");
			});
			$(this.lioptions).on('click',function(){
				event.stopPropagation();
				that.fire("beforeselectitem",that.selectcontent);
				$(that.comboBox_input).val($(this).html());
				that.selectcontent=$(this).html();
				that.selectValue=$(this).attr("value");
				that.selectIndex=$(this).index();
				that.fire("beforehide");
				$(that.comboBox_listBox).hide();
				that.fire("afterhide");
				that.fire("afterselectitem",that.selectcontent);
			});
			$(this.comboBox_input).on("focus",function(){
				that.fire("getfocus",$(this).val());
			});
			$(this.comboBox_input).on("change",function(){
				that.selectcontent=$(this).val();
			});
			$(document).on("click",function(){
				$(that.comboBox_listBox).hide();
			});
		},
		//实现接口初始化UI
		syncUI:function(){
			$(this.boundingBox).css({"width":this.options.boxWidth+''});
			if(this.options.readonly==true){
				this.disable();
			}
			if(this.options.originIndex!=undefined){
				$(this.comboBox_input).val($(this.lioptions).eq(this.options.originIndex).html());
				this.selectcontent=$(this.options.originIndex).html();
				this.selectValue=$(this.options.originIndex).attr("value");
				this.selectIndex=$(this.options.originIndex).index();
			}
			if(this.options.skinClassName!=""){
				$(this.boundingBox).addClass(this.options.skinClassName);
			}
			var lihright=parseInt($(this.lioptions).eq(0).css("height"));
			$(this.comboBox_listBox).css({"height":lihright*this.options.viewSize});
		},
		getselectContent:function(){
			return this.selectcontent;
		},
		getselectValue:function(){
			return this.selectValue;
		},
		getSelectIndex:function(){
			if(this.selectIndex!=undefined){
				return this.selectIndex+1;
			}
			return -1;
		},
		reset:function(){
			$(this.comboBox_input).val("");
		},
		disable:function(){
			$(this.comboBox_input).attr("disabled",true);
		},
		enable:function(){
			$(this.comboBox_input).attr("disabled",false);

		},
		setWidth:function(width){
			$(this.boundingBox).css({"width":width+""});
		}	
	})
	return {
		ComboBox:ComboBox
	}
});