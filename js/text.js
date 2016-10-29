$(function (){
//    导航栏
    var DT = new Date()
    $(".data span").html(DT.getFullYear()+"年 "+(DT.getMonth()+1)+" 月 "+DT.getDate()+" 日");
    // 导航背景色设置
    $(".public-right").append('<div class="nav-bg"></div>')
    $(".public-right .nav-bg").css({
        left:$(".nav li").eq(2).offset().left-99+"px",
    })
    $(".nav li").each(function(i){
        $(this).hover(function () {
            $(".public-right .nav-bg").stop().animate({
                left:($(this).offset().left-99)+"px",
            },100)
        },function  () {
            $(".public-right .nav-bg").stop().animate({
                left:($(".nav li").eq(2).offset().left-99)+"px",
            },100)
        })
    })
    $(window).scroll(function () {
        var Top = $("body").scrollTop()
        if(Top>=566){
            navigation();
        }else{
            $(".public-right").css({
                position: 'absolute',
                left: '100px',
                top:'560px',
            })
        };
    })
    // 导航栏效果
    function navigation() {
        $(".public-right").css({
            position: 'absolute',
            left: '0px',
            top:'556px',
        })
        $(".public-right").css({
            position: 'fixed',
            top:0,
            // 进行处理
            left:100-$("body").scrollLeft()+'px',
            right:0,
            margin:'auto',
            zIndex:9999
        })
    }

    //function sc1(){
    //    //    导航栏上移
    //    $(".data,.opa,.nav").css({
    //        //top:$(window).scrollTop()+'px',
    //        position:"fixed",
    //        top:"0px"
    //    });
    //}
    function sc2(){
        //    文字淡入淡出
        $(".tle").css({
            opacity:"0",
            marginLeft: "300px"
        })
        $(".pic").slideUp(0);


        $(".tle").animate({
            opacity:"1"
        },500)
        var time = null;
        time = setInterval(getLeft,1);
        function getLeft() {
            var l = parseInt($(".tle").css("marginLeft"));
            if (l >= 300){
                l++;
                $(".tle").fadeIn(1000);
                $(".tle").css({
                    marginLeft: l+"px"
                })
            }
            if(l>=600){
                clearInterval(time);
            }
        }
//    图片下拉
        $(".pic").slideDown(1000);

//   头像变大变小

        $(".icon_4 img").animate({
            width:"80px",
            height:"80px",
            opacity:"1"
        },1000).delay(100).animate({
            width:"48px",
            height:"48px"
        },500)
//    视频logo下落
        $("#frame li").animate({
            opacity:"1"
        },1000)
        var tx=document.getElementById('tx');
        var wu = document.getElementById('wu');
        var uu = document.getElementById('uu');
        var ku = document.getElementById('ku');
        var wu1 = document.getElementById('wu1');
        var dy = document.getElementById('dy');
        var wu3 = document.getElementById('wu3');
        var tx2 = document.getElementById('tx2');
        var aq = document.getElementById('aq');
        var wu4 = document.getElementById('wu4');
        var tx3 = document.getElementById('tx3');
        var td = document.getElementById('td');
        var tx4 = document.getElementById('tx4');
        var wu5 = document.getElementById('wu5');

        var tx1=null;
        var a=-45;
        tx1=setInterval(fn1,30);
        function fn1(){
            a++;
            tx.style.transform= "rotate("+a+"deg)";
            wu.style.transform= "rotate("+a+"deg)";
            uu.style.transform= "rotate("+a+"deg)";
            ku.style.transform= "rotate("+a+"deg)";
            wu1.style.transform= "rotate("+a+"deg)";
            dy.style.transform= "rotate("+a+"deg)";
            wu3.style.transform= "rotate("+a+"deg)";
            tx2.style.transform= "rotate("+a+"deg)";
            aq.style.transform= "rotate("+a+"deg)";
            wu4.style.transform= "rotate("+a+"deg)";
            tx3.style.transform= "rotate("+a+"deg)";
            td.style.transform= "rotate("+a+"deg)";
            tx4.style.transform= "rotate("+a+"deg)";
            wu5.style.transform= "rotate("+a+"deg)";
            if(a>=0){
                clearInterval(tx1);
            }
        }

        $("#frame li").each(function(i){
            $("#frame li").eq(i).animate({
                opacity:"1"
            },1000)
        })

    }
    function sc3() {
        //    手机放大

        $(".show img").each(function (i) {
            $(".show img").eq(i).hover(function ch1() {
                $(this).stop().addClass("tu");
                $(this).stop().removeClass("tuu");
                shake(this);
            }, function ch2() {
                $(this).stop().removeClass("tu");
                $(this).stop().addClass("tuu");

            })
        })
        //手机抖动
        function shake(o) {
            var $panel = $(o);
            for (var i = 1; 4 >= i; i++) {
                $panel.animate({marginLeft: (10 - 1 * i)}, 50);
                $panel.animate({marginLeft:  2.5 * (10 - 1 * i)}, 50);
            }
        }
    }
    var flag = [1,1]
    $(window).scroll (function(){
        var z = $("body").scrollTop();
        //if(z>=556){
        //    sc1();
        //}else{
        //    $(".data,.opa,.nav").css({
        //        top:'556px',
        //        position:"absolute"
        //
        //    });
        //}
        if(z>=500&&z<=700){
            if (flag[0]==1) {
                flag[0] = 0;
                sc2()
            };
        }else{
            flag[0] = 1;
        }
        if(z>=800){
            if (flag[1]==1) {
                flag[1] = 0;
                sc3();
            };
        }else{
            flag[1] = 1;
        }
    })
})
