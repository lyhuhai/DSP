$(function () {
	$(".outer").width(1920)
	$(".right").width(1816)
	$(".right>div").width(1816)
	var DT = new Date()
	$(".nav span").html(DT.getFullYear()+"年 "+(DT.getMonth()+1)+" 月 "+DT.getDate()+" 日");
	// 导航背景色设置
	$(".nav").append('<div class="nav-bg"></div>')
    $(".nav .nav-bg").css({
        left:$(".nav ul li").eq(5).offset().left-99+"px",
    })
    $(".nav ul li").each(function(i){
        $(this).hover(function () {
            $(".nav .nav-bg").stop().animate({
                left:($(this).offset().left-99)+"px",
            },100)
        },function  () {
            $(".nav .nav-bg").stop().animate({
                left:($(".nav ul li").eq(5).offset().left-99)+"px",
            },100)
        })
    })

	$(window).scroll(function () {
		var Top = $("body").scrollTop()
		if(Top>=618){
			$(".nav").css({
				position: 'absolute',
				left: '0px',
				top:'618px',
			})
			$(".nav").css({
				position: 'fixed',
				top:0,
				// 进行处理
				left:100-$("body").scrollLeft()+'px',
				right:0,
				margin:'auto',
				zIndex:9999
			})
		}else{
			$(".nav").css({
				position: 'absolute',
				left: '0px',
				top:'618px',
			})
		};
	})
	// 关于其他的单选框的处理
	$(".ad input[name='ad']").each(function(i){
		$(this).click(function  () {
			if($(this).val()==4){
				$(".ad input[type='text']").removeAttr('disabled')
			}else{
				$(".ad input[type='text']").val("")
				$(".ad input[type='text']").attr({'disabled':true})
			}
		})
	})

})