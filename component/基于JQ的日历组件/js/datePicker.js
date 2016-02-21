define(['widget','jquery'],function(widget,$){
	// Window类
	function DatePicker(options){
		this.options={			//配置参数
			container:null,
			dateInput:null,
			format:"yy-mm-dd",
			weekStart:"Mon",
			yearRange:null,
			offsetX:0,
			offsetY:0,
			skinClassName:""
		};

		this.init(options);
		
	}
	DatePicker.prototype=$.extend({},new widget.Widget(),{
		//初始化函数
		init:function(options){			
			$.extend(this.options,options);
			this.render(this.options.container);
			return this;
		},
		//实现接口创建dom
		rendUI:function(){
			// 获取当前年月日
			var date=new Date();			
			this.currentYear=date.getFullYear();
			this.currentMonth=date.getMonth()+1;
			this.currentDay=date.getDate();
			// 创建日历容器
			this.boundingBox=$('<div class="datepicker"><div class="datePicker_header"><div class="datePicker_headercontainer"><span class="datePicker_yearspan">'+this.currentYear+'</span><ul class="datePicker_yearlist"></ul><span class="datePicker_monthspan">'+(this.currentMonth)+'</span><ul class="datePicker_monthlist"></ul></div></div><table class="datePicker_body" border="0" cellpadding="0" cellspacing="0"><thead class="datePicker_tabthead"></thead><tbody class="datePicker_tabbody"></tbody></table></div>');
			// 获取年份列表容器
			this.yearList=$(this.boundingBox).find('.datePicker_yearlist');
			// 获取月份列表容器
			this.monthList=$(this.boundingBox).find('.datePicker_monthlist');
			// 获取填充头部星期的容器
			this.tabWeekList=$(this.boundingBox).find(".datePicker_tabthead");
			// 获取填充日期的容器
			this.tabBody=$(this.boundingBox).find(".datePicker_tabbody");
			//创建年份列表
			if(this.options.yearRange){
				//自定义年的范围
				var yearStart=this.options.yearRange[0];
				var yearEnd=this.options.yearRange[1];
				for(var i=yearStart;i<=yearEnd;i++){
					var li=$("<li>"+i+"</li>");
					this.yearList.append(li);
				}
			}else{
				//默认年的范围为前后10年
				for(var i=this.currentYear-10;i<=this.currentYear+10;i++){
					var li=$("<li>"+i+"</li>");
					this.yearList.append(li);
				}
			}
			//创建月份列表
			for(var i=1;i<=12;i++){
				if(i<10) i="0"+i;
				var li=$("<li>"+i+"</li>");
				this.monthList.append(li);
			}			
			//创建日历头部星期
			if(this.options.weekStart=="Mon"){
				//创建日历头部的星期
				var WeekArr=["一","二","三","四","五","六","日"];
				var tr=$("<tr></tr>");
				for(var i=0;i<7;i++){
					var th=$("<th>"+WeekArr[i]+"</th>");
					tr.append(th);
				}
				this.tabWeekList.append(tr);
			}else if(this.options.weekStart=="Sun"){
				//创建日历头部的星期
				var WeekArr=["日","一","二","三","四","五","六"];
				var tr=$("<tr></tr>");
				for(var i=0;i<7;i++){
					var th=$("<th>"+WeekArr[i]+"</th>");
					tr.append(th);
				}
				this.tabWeekList.append(tr);
			}
			// 根据当前年月显示日历数据
			this.ShowDate(this.currentYear,this.currentMonth-1);
		},
		//实现接口绑定事件方法
		bindUI:function(){
			var that=this;	
			//点击显示年份、月份列表		
			var yearSpan=$(this.boundingBox).find('.datePicker_yearspan');
			var monthSpan=$(this.boundingBox).find('.datePicker_monthspan');
			yearSpan.on('click',function(){
				$(that.monthList).css({"display":"none"});
				$(that.yearList).css({"display":"block"});
			});
			monthSpan.on('click',function(){
				$(that.yearList).css({"display":"none"});
				$(that.monthList).css({"display":"block"});
			});
			// 根据选择的年月份动态显示日历
			var yearLiItems=$(this.yearList).find('li');
			var monthLiItems=$(this.monthList).find('li');
			yearLiItems.on("click",function(){
				$(that.yearList).css({"display":"none"});
				that.currentYear=$(this).html();
				$(yearSpan).html(that.currentYear);
				// 根据当前年月显示日历数据
				that.ShowDate(that.currentYear,that.currentMonth-1);
								
			});
			monthLiItems.on("click",function(){
				$(that.monthList).css({"display":"none"});
				that.currentMonth=$(this).html();
				$(monthSpan).html(that.currentMonth);
				// 根据当前年月显示日历数据
				that.ShowDate(that.currentYear,that.currentMonth-1);				
			});

		},
		//实现接口初始化UI
		syncUI:function(){
			$(this.boundingBox).css({"left":this.options.offsetX});
			$(this.boundingBox).css({"top":this.options.offsetY});
			if(this.options.skinClassName!=""){
				$(this.boundingBox).addClass(this.options.skinClassName);
			}
		},
		//根据当前年月显示日历数据的函数
		ShowDate:function(year,month){
			//存储要显示的数据的数组
			var showDateArr=[];

			// 这个月的第一天
			var fdInCurrentMon=new Date(year,month,1);
			// 这个月的第一天是星期几？
			var firstDateInWeek=fdInCurrentMon.getDay();
			//下个月的第0天，即当月的最后一天
			var ldInCurrentMon=new Date(year,month+1,0);
			// 这个月的最后一天是星期几？
			var lastDateInWeek=ldInCurrentMon.getDay();
			//这个月的总天数
			var thisMonthDayCount=ldInCurrentMon.getDate();			
			//把当月数据存入
			for(var i=1;i<=thisMonthDayCount;i++){
				showDateArr.push(i);
			}

			// 上个月的第一天
			var fdInLastMon=new Date(year,month-1,1);
			//上个月的最后一天
			var ldInLastMon=new Date(year,month,0);
			//上个月的总天数
			var lastMonthDayCount=ldInLastMon.getDate();
			// 要获取的上个月的数据长度
			var beforeDataLen;
			// 根据这个月第一天是星期几把上个月的数据存入
			if(this.options.weekStart=="Mon"){
				if(firstDateInWeek==0) firstDateInWeek=7;
				beforeDataLen=firstDateInWeek-1;								
			}else if(this.options.weekStart=="Sun"){
				if(firstDateInWeek==0) firstDateInWeek=0;
				beforeDataLen=firstDateInWeek;						
			}
			// 把指定长度的上月数据插入到数组前面
			for(var i=lastMonthDayCount;i>lastMonthDayCount-beforeDataLen;i--){
				showDateArr.unshift(i);
			}

			// 要获取的下个月的数据长度
			var afterDataLen;
			// 根据这个月最后一天是星期几把下个月的数据存入
			//if(lastDateInWeek==0) lastDateInWeek=7;
			if(this.options.weekStart=="Mon"){
				if(lastDateInWeek==0) lastDateInWeek=7;
				afterDataLen=7-lastDateInWeek;				
			}else if(this.options.weekStart=="Sun"){
				if(lastDateInWeek==0) lastDateInWeek=0;
				afterDataLen=7-lastDateInWeek-1;					
			}
			// 把指定长度的下个月数据插入到数组后面
			for(var i=1;i<=afterDataLen;i++){
				showDateArr.push(i);
			}
			//根据数据创建日历日期
			this.createShowDate(showDateArr,beforeDataLen,afterDataLen,thisMonthDayCount);
		},
		//根据数据创建日历日期的函数
		createShowDate:function(showDateArr,beforeDataLen,afterDataLen,thisMonthDayCount){
			var that=this;
			$(this.tabBody).html("");
			//根据数据创建日历日期
			var count=showDateArr.length/7;
			for(var i=0;i<count;i++){
				var arr=[];
				for(var j=i*7;j<(i+1)*7;j++){
					arr.push(showDateArr[j]);
				}
				var tr=$("<tr></tr>");
				for(var k=0;k<arr.length;k++){
					var td=$("<td>"+arr[k]+"</td>");
					tr.append(td);
				}
				this.tabBody.append(tr);
			}
			// 点击某个日期
			this.tdlists=$(this.tabBody).find("td");
			for(var i=0;i<this.tdlists.length;i++){
				if(i>=beforeDataLen&&i<beforeDataLen+thisMonthDayCount){
					// 当前月份的数据加黑
					$(this.tdlists[i]).addClass("currentMonthData");
					// 点击每一个日期td，获取要显示字符串
					$(this.tdlists[i]).on('click',function(){
						that.fire("beforeSelectDate",new Date(that.currentYear,that.currentMonth-1,that.currentDay));
						that.currentDay=$(this).html();
						var selectDate=that.getSelectDate();	
						$(that.options.dateInput).val(selectDate);
						$(that.options.dateInput).html(selectDate);
						that.destory();			
						that.fire("afterSelectDate",new Date(that.currentYear,that.currentMonth-1,that.currentDay));
					});
					// 获取当前年月日
					var date=new Date();			
					var thisYear=date.getFullYear();
					var thisMonth=date.getMonth()+1;
					var thisDay=date.getDate();
					if($(this.tdlists[i]).html()==thisDay&&thisYear==this.currentYear&&thisMonth==this.currentMonth){
						$(this.tdlists[i]).addClass("datePicker_today");
					}
				}
			}
			
		},
		// 获取当前选择的日期
		getSelectDate:function(){
			if(this.currentMonth<10&&(""+this.currentMonth).charAt(0)!="0") this.currentMonth="0"+this.currentMonth;
			if(this.currentDay<10&&(""+this.currentDay).charAt(0)!="0") this.currentDay="0"+this.currentDay;
			if(this.options.format=="yy/mm/dd"){
				var dateStr=this.currentYear+"/"+this.currentMonth+"/"+this.currentDay;
			}else{
				var dateStr=this.currentYear+"-"+this.currentMonth+"-"+this.currentDay;
			}			
			return dateStr;
		},
		// 显示日历插件
		show:function(){
			$(this.boundingBox).css({"display":"block"});	
		},
		// 隐藏日历插件
		hide:function(){
			$(this.boundingBox).css({"display":"none"});	
		}
		
	});
	return {
		DatePicker:DatePicker
	}
});