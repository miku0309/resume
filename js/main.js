//demo展示动画
function show(){
	var $a = $('.a'),
	    $b = $('.b'),
	    $c = $('.c'),
	    $d = $('.d');
	//设定展示的动画函数
	function demoRun(name,num,char){
		var topA = $a.css('top'),
		    topB = $b.css('top'),
		    topC = $c.css('top'),
		    topD = $d.css('top'),
		    $this = $(''+name+''),
		    $char = $(''+char+'');
		if (topA == '50px'&&topB == '50px'&&topC == '50px'&&topD == '50px') {
			$this.css({'z-index':'99','border-radius':'50%','transform':'scale(0.2,0.3)','top':'250px','marginLeft':num+'%'});
			var timer = setTimeout(function(){
				$this.css({'transform':'scale(4,4)','border-radius':'10%'});
				var time = setTimeout(function(){
					$char.slideDown(1000);
				},1000)
			},1000)
		}else{
			$this.css({'z-index':'10','border-radius':'0%','transform':'scale(1,1)','top':'50px','marginLeft':'0px'});
			$char.css({'display':'none'});
		}
	}
	//调用函数
	$('.a').click(function(){
		demoRun('.a',38,'.fontA');
	});

	$('.b').click(function(){
		demoRun('.b',12,'.fontB');
	});
	$('.c').click(function(){
		demoRun('.c',-12,'.fontC');
	});
	$('.d').click(function(){
		demoRun('.d',-38,'.fontD');
	});
}
//判定x，y旋转函数
function rotater(name,direction,angle){
	var $name = $(''+name+''),
	rotation = (direction == 'x' ? 'rotateX' : 'rotateY');
	$name.css({
		'transform':rotation+'('+angle+'deg)'
	})
}
//全屏滑动插件
$(function(){
	$('#container').fullpage({
		'verticalCentered': false,
		'css3':true,
		'navigation':true,
		'navigationPosition': 'right',
		'navigationTooltips':['简介','专业技能','工作经历','项目','关于 我','结尾'],
		afterLoad: function(anchorLink, index){
			if(index == 2){
				//页面二动画
			    $('.icon-htm').animate({left:'15%'},200,function(){
					$('.icon-css').animate({left:'35%'},200,function(){
						$('.icon-js').animate({left:'55%'},200,function(){
							$('.icon-jq').animate({left:'75%'},200);
						});
					});
				});
				$('.icon-bt').animate({left:'15%'},200,function(){
					$('.icon-angl').animate({left:'35%'},200,function(){
						$('.icon-re').animate({left:'55%'},200,function(){
							$('.icon-php').animate({left:'75%'},200);
						});
					});
				});
			}
			if(index == 3){
				$('.work').addClass('workrun');
				$('.work').css({'display':'block'});
			}
			if(index == 4){
				//页面四旋转动画
				rotater('.demor','y',1080);
			}
			if(index == 5){
				$('.book').addClass('bookrunA');
				var time2 = setTimeout(function(){
					$('.pagesA').addClass('bookrunB');
					$('.say').fadeIn(3000);
				},1000);
			}
			if(index == 6){
				$('.shop').addClass('run');
				$('.shop').css({'display':'block'});
				$('.contaction').fadeIn(2000);
			}
		},
		onLeave: function(index, direction){
			if(index == '2'){
				$('.icon').css({left:'100%'})
			}
			if(index == '3'){
				$('.work').removeClass('workrun');
				$('.work').css({'display':'none'});
			}
			if(index == '4'){
				rotater('.demor','y',0);
				$('.demo-font').css({'display':'none'})
			}
			if(index == '5'){
				$('.book').removeClass('bookrunA');
				$('.pagesA').removeClass('bookrunB');
				$('.say').css({'display':'none'});
			}
			if(index == '6'){
				$('.shop').removeClass('run');
				$('.shop').css({'display':'none'});
				$('.contaction').css({'display':'none'})
			}
		}
	});
	//标题动画
	$('.head-pic').fadeIn(2000,function(){
		$('.illusration').slideDown(2000);
	});
	show();
});
