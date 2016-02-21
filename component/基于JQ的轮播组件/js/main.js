require.config({
	paths:{
		jquery:'jquery-1.10.2'
	}
});
require(['jquery','carousel'],function($,carousel){
	
	var carousel0=new carousel.Carousel({
		 container:$('.carousel0'),
		items:[{img: "./images/0.png",contentText:"contentText0"},{img: "./images/1.png",contentText:"contentText1"},{img: "./images/2.png",contentText:"contentText2"},{img: "./images/3.png",contentText:"contentText3"},{img: "./images/4.png",contentText:"contentText4"},{img: "./images/5.png",contentText:"contentText5"},{img: "./images/6.png",contentText:"contentText6"}],		//描述每个滚动项的字符数据
		viewSize:3,
		duration:1000,
		interval:3000
	});

	var carousel1=new carousel.Carousel({
		container:$('.carousel1'),
		items:[{img: "./images/6.png",contentText:"contentText0"},{img: "./images/5.png",contentText:"contentText1"},{img: "./images/4.png",contentText:"contentText2"},{img: "./images/3.png",contentText:"contentText3"},{img: "./images/2.png",contentText:"contentText4"},{img: "./images/1.png",contentText:"contentText5"},{img: "./images/0.png",contentText:"contentText6"}],		//描述每个滚动项的字符数据
		viewSize:4,
		skinClassName:"skin_a",
		autoplay:true,
		duration:1200,
		interval:5000
	});
	carousel1.stop();
	carousel1.start();
	console.log(carousel1.getTotalCount());


	var carousel2=new carousel.Carousel({
		container:$('.carousel2'),
		items:[{img: "./images/6.png",contentText:"contentText0"},{img: "./images/5.png",contentText:"contentText1"},{img: "./images/4.png",contentText:"contentText2"},{img: "./images/3.png",contentText:"contentText3"},{img: "./images/2.png",contentText:"contentText4"},{img: "./images/1.png",contentText:"contentText5"},{img: "./images/0.png",contentText:"contentText6"}],		//描述每个滚动项的字符数据
		viewSize:1,
		skinClassName:"skin_b",
		duration:1500,
		interval:3000
	});
});