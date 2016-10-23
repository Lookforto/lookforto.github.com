$(function (){
	//右上角二维码
	(function (){
		$('#code_btn').click(function (){
			$('.code').css('display','none');
		});
	})();
	//搜索框
	$('.search_bd ul .li1').click(function (){
		$('.search_bd ul li').removeClass('active');
		$('.search_bd ul .li1').addClass('active');
		$('form').css('border-color','#ff5400');
		$('form .type').attr('placeholder','     听说涂鸦本已经不流行了，流行练字啦？');
		$('form .submit').css('background','#ff5400');
	});
	$('.search_bd ul .li2').click(function (){
		$('.search_bd ul li').removeClass('active');
		$('.search_bd ul .li2').addClass('active');
		$('form').css('border-color','#c60000');
		$('form .type').attr('placeholder','     阿里88汽车节，车品好货选不停');
		$('form .submit').css('background','#c60000');
	});
	$('.search_bd ul .li3').click(function (){
		$('.search_bd ul li').removeClass('active');
		$('.search_bd ul .li3').addClass('active');
		$('form').css('border-color','#ff5400');
		$('form .type').attr('placeholder','     听说涂鸦本已经不流行了，流行练字啦？');
		$('form .submit').css('background','#ff5400');
	});
	//选项卡
	$('.list .list_dd1 div').mouseover(function (){
		$('.list .list_dd1 div').removeClass('active');
		$('.list .list_ct').removeClass('active');
		
		$(this).addClass('active');
		var n=$(this).index();
		$('.list .list_ct').eq(n).addClass('active');
	});
	$('.list .list_dd1 div').mouseout(function (){
		$('.list .list_dd1 div').removeClass('active');
		$('.list .list_ct').removeClass('active');
	});
	
	//自动播放选项卡
	(function (){
	$(".tab1 .right").click(function(){ nextscroll() });
	//自动播放
	var timer=setInterval(nextscroll,3000);
	$('.tab1').hover(function (){
		clearInterval(timer);
	},function (){
		setInterval(nextscroll,3000);
	});
	//下一张
	function nextscroll()
	{
		var oUl=$(".tab1 ul");
		var offset=($(".tab1 li").width())*-1;// -520
		oUl.stop().animate({left:offset},"slow",function(){
			 var first=$(".tab1 ul li").first();
			 oUl.append(first);
			 $(this).css("left","0px");
			 circle();
		});  
	};

	function circle()//交换
	{	  
		var currentItem = $(".tab1 ul li").first();
		var currentIndex = currentItem.attr("index");
		$(".tab1 .bt_scroll span").removeClass("active");
		$(".tab1 .bt_scroll span").eq(currentIndex).addClass("active");	
	}
	//上一张
	$(".tab1 .left").click(function(){
		var oUl=$(".tab1 ul");
		var offset=($(".tab1 li").width()*-1);
		var last=$(".tab1 ul li").last();
		oUl.prepend(last);
		oUl.css("left",offset);
		oUl.stop().animate({left:"0px"},"slow",function(){
			circle();
		})
	 });

	var theEnd = 1;
	$(".tab1 .bt_scroll span").click(function(){
		if(theEnd==0){return;}
		$(this).addClass("active").siblings().removeClass("active");
		var nextindex=$(this).index();
		var currentindex = $(".tab1 li").first().attr("index");
		var curr = $(".tab1 li").first().clone();	
		if(nextindex > currentindex)
		{
			for (var i = 0; i < nextindex - currentindex; i++)
			{			 
				var first = $(".tab1 li").first();
				$(".tab1 ul").append(first); 			
			}
			$(".tab1 ul").prepend(curr);
			var offset = ($(".tab1 li").width())*-1;
			if(theEnd==1)
			{
				theEnd=0;	
				$(".tab1 ul").stop().animate({left:offset},"slow",function(){
					$(".tab1 ul li").first().remove();
					$(".tab1 ul").css("left","0px");
					theEnd=1;
				}); 
			} 
		}
		else
		{
			var curt = $(".tab1 li").last().clone();
			for (var i = 0; i < currentindex - nextindex; i++)
			{
				var last = $(".tab1 li").last();
				$(".tab1 ul").prepend(last);
			}
			$(".tab1 ul").append(curt);
			var offset = ($(".tab1 li").width())*-1;
			$(".tab1 ul").css("left",offset);
			if(theEnd==1)
			{
				theEnd=0;	
				$(".tab1 ul").stop().animate({left:"0px"},"slow",function(){				
					$(".tab1 ul li").last().remove();
					theEnd=1;	  
				}); 
			} 
		}
	});
	})();
	
	$(".tab2 .right").click(function(){ nextscroll() });
	//自动播放
	setInterval(nextscroll,3000);
	//下一张
	function nextscroll()
	{
		var oUl = $(".tab2 ul");
		var offset = ($(".tab2 li").width())*-1;// -520
		oUl.stop().animate({left:offset},"slow",function(){
			 var first = $(".tab2 ul li").first();
			 oUl.append(first);
			 $(this).css("left","0px");
			 circle();
		});  
	};

	function circle()
	{	  
		var currentItem = $(".tab2 ul li").first();
		var currentIndex = currentItem.attr("index");
		$(".tab2 .bt_scroll span").removeClass("active");
		$(".tab2 .bt_scroll span").eq(currentIndex).addClass("active");	
	}
	//setInterval(nextscroll,2000)
	//上一张
	$(".tab2 .left").click(function(){
		var oUl = $(".tab2 ul");
		var offset = ($(".tab2 li").width()*-1);
		var last = $(".tab2 ul li").last();
		oUl.prepend(last);
		oUl.css("left",offset);
		oUl.animate({left:"0px"},"slow",function(){
			circle();
		})
	 });

   /*======btn====circle======*/
	var theEnd = 1;
	$(".tab2 .bt_scroll span").click(function(){
		if(theEnd==0){return;}
		$(this).addClass("active").siblings().removeClass("active");
		var nextindex = $(this).index();
		var currentindex = $(".tab2 li").first().attr("index");
		var curr = $(".tab2 li").first().clone();	
		if(nextindex > currentindex)
		{
			for (var i = 0; i < nextindex - currentindex; i++)
			{			 
				var first = $(".tab2 li").first();
				$(".tab2 ul").append(first); 			
			}
			$(".tab2 ul").prepend(curr);
			var offset = ($(".tab2 li").width())*-1;
			if(theEnd==1)
			{
				theEnd=0;	
				$(".tab2 ul").stop().animate({left:offset},"slow",function(){
					$(".tab2 ul li").first().remove();
					$(".tab2 ul").css("left","0px");
					theEnd=1;
				}); 
			} 
		}
		else
		{
			var curt = $(".tab2 li").last().clone();
			for (var i = 0; i < currentindex - nextindex; i++)
			{
				var last = $(".tab2 li").last();
				$(".tab2 ul").prepend(last);
			}
			$(".tab2 ul").append(curt);
			var offset = ($(".tab2 li").width())*-1;
			$(".tab2 ul").css("left",offset);
			if(theEnd==1)
			{
				theEnd=0;	
				$(".tab2 ul").stop().animate({left:"0px"},"slow",function(){				
					$(".tab2 ul li").last().remove();
					theEnd=1;	  
				}); 
			} 
		}
	});
	
	//手风琴
	$('.right_six ul li').mouseover(function (){
		$('.right_six ul li').removeClass('active');
		$('.right_six ul li').css('border','1px solid transparent');
	
		$('.right_six ul li').stop().animate({'width':'60px', 'opacity':'1', 'border':'1px solid transparent'},{duration:300});
		$(this).css('border','1px solid #ff4400');
		$(this).stop().animate({'width':'136px', 'opacity':'0.8'},{duration:300});
	});
	
	//右侧选项卡
	$('.one_list ul li').mouseover(function (){
		$('.one_list ul li').removeClass('active');
		$(this).addClass('active');
		$('.one_ct ul').removeClass('active');
		var n=$(this).index();
		$('.one_ct ul').eq(n).addClass('active');
	});
	
	//中间点击选项卡
	$('.container5_top li').click(function (){
		$('.container5_top li').removeClass('active');
		$(this).addClass('active');
		$('.container5_bt').removeClass('active');
		var n=$(this).index();
		$('.container5_bt').eq(n).addClass('active');
	});
	
	
	$('.right_four li').mouseenter(function (index){
		var n=$(this).index();
		$('.right_four li span').eq(n).stop().animate({top:-50,opacity:0},{duration:200,complete:function (){
			$('.right_four li span').eq(n).css({top:0,opacity:1});
		}});
	});
	
	
	
	
	
	
	
	
});
