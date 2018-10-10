// 标签栏Tab切换
$('.title > li').each(function(navId){
	$(this).bind('mouseenter',function(){
		if(navId >1 && navId <=7){
			$('.navContentBox> .nav ').hide();
			$('.navContentBox> .nav ').eq(navId-2).show();
			$('.navContentBox > .nav ').parent().stop().slideDown();
		}
		else{
			$('.navContentBox > .nav').parent().slideUp();
		}
	});
	$('.navContentBox > .nav').parent().bind('mouseleave',function(){
		$('.navContentBox> .nav').parent().slideUp();
		//lisa[navId].id="blockcolor";
	});
});

// totop
$(function(){
	$(this).find(".totop").click(function(){
		$("html, body").animate({
			"scroll-top":0
		},"fast");
	});
});