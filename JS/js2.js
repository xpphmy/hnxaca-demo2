// 标签栏Tab切换
	var lia=document.getElementsByClassName("top_nav")[0].getElementsByTagName("a");
	var lis=document.getElementsByClassName("top_nav")[0].getElementsByTagName("li");
	var lias=document.getElementsByClassName("top_nav")[0].getElementsByClassName("as");
	var navs=document.getElementsByClassName("nav");
	var xiala=document.getElementsByClassName("xiala");
	for(var i=0;i<lis.length;i++){//遍历
		lis[i].onmouseover=function(){
			lia[0].id="";
			for(var j=0;j<lis.length;j++){
				if(lis[j]==this){//匹配
					lia[j].id="select";
				}else{
					lia[j].id="";
				}
			}
		}
	}
lis[1].onmouseout=function(){
	lia[1].id="";
	lia[0].id="select";
}
$('#ulHeaderNav > li').each(function(navId){
	$(this).bind('mouseenter',function(){
		if(navId > 1 && navId <= 7){
			$('#popHeaderNav > div').hide();
			$('#popHeaderNav > div').eq(navId - 2).show();
			$('#popHeaderNav').parent().stop().slideDown();
		}
		else{

			$('#popHeaderNav').parent().slideUp();
		}
	});
	$('#popHeaderNav').parent().bind('mouseleave',function(){
		$('#popHeaderNav').parent().slideUp();
		lia[0].id="select";
		lia[navId].id="";
	});
});

// 大图轮播
	// var outer=document.getElementsByClassName("outer")[0];
	// var outIns=document.getElementsByClassName("outIn");
	// var liss=document.getElementsByClassName("ulLi")[0].getElementsByTagName("li");
	// var op=document.getElementsByClassName("ps");
	// var x=0,timer=null,timer2=null;
	// function move(){
	// 	clearInterval(timer);
	// 	var start=outer.scrollLeft;
	// 	var end=outIns[0].offsetWidth*x;
	// 	var step=0;
	// 	var maxStep=5;
	// 	var everyStep=(end-start)/maxStep;
	// 	timer=setInterval(function(){
	// 		step++;
	// 		if(step>=maxStep){
	// 			step=0;
	// 			clearInterval(timer);
	// 		}
	// 		outer.scrollLeft+=everyStep;
	// 	},1);
	// }
	// function autoMove(){
	// 	clearInterval(timer2);
	// 	timer2=setInterval(function(){
	// 		x++;
	// 		if(x>=outIns.length){
	// 			x=0;
	// 		}
	// 		//console.log(x);
	// 		move();
	// 		fn_style();
	// 	},3000);
	// }
	// autoMove();
	// function fn_style(){
	// 	for(var i=0;i<liss.length;i++){
	// 		liss[i].id="";
	// 	}
	// 	liss[x].id="select0";
	// }
	// for(var m=0;m<liss.length;m++){
	// 	liss[m].onmouseover=function(){
	// 		for(var n=0;n<liss.length;n++){
	// 			if(liss[n]==this){
	// 				x=n;
	// 				clearInterval(timer2);
	// 				move();
	// 				fn_style();
	// 				autoMove();
	// 			}
	// 		}
	// 	}
	// }