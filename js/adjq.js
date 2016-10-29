/**
 * Created by Administrator on 2016/9/21.
 */
$(function() {
    var date=new Date()
        var y=date.getFullYear();
        var m=date.getMonth()+1;
        var d=date.getDate();
        var arrS=[y,m,d]
        $("#shj span").each( function(i){
            $("#shj span").eq(i).html(arrS[i])
        })
    var flag = [1,1,1,1,1,1,1,1,1]
    $(window).scroll(function() {
        var Top = $("body").scrollTop()
        if(Top>=618){
            if (flag[0]==1) {
                flag[0] = 0;
                adHeader()
            }
        }else{
            flag[0] = 1;

        };
        if(Top>=142&&Top<=618){
            if (flag[0]==1) {
                flag[0] = 0;
                adHeader()
            }
        }else{
            flag[0] = 1;

        };


        if(Top>616 && Top<900){
            if (flag[1]==1) {
                flag[1] = 0;
                mediumDsp()
            }
        }else{
            flag[1] = 1;
        }
        if (Top>868 && Top<1560) {
            if (flag[2]==1) {
                flag[2] = 0;
                nationDsp();
            }
        }else{
            flag[2] = 1;
        }
        if (Top>1322 && Top<2124) {
            if (flag[3]==1) {
                flag[3] = 0;
                abroadDsp()
            }
        }else{
            flag[3] = 1;

        }
        if (Top>2000&&Top<2342) {
            if (flag[4]==1) {
                flag[4] = 0;
                placeDsp()
            }
        }else{
            flag[4] = 1;

        }
        if (Top>2342 && Top<3000) {
            if (flag[5]==1) {
                flag[5] = 0;
                userDSp();
            }
        }else{
            flag[5] = 1;

        }

        if (Top>3000) {
            if (flag[6]==1) {
                flag[6] = 0;
                dataDsp()
            }
        }else{
            flag[6] = 1;
        };

    })
    function adHeader() {
        if ($("body").scrollTop() >= 618) {
            $("#nav").css({
                position: 'fixed',
                top: 0,
                left: 100 - $("body").scrollLeft() + 'px',
                right: 0,
                margin: 'auto',
                zIndex: 9999
            })
        } else {
            $("#nav").css({
                position: 'absolute',
                left: '0px',
                top: '564px',
            })
        }
    } 
    //头部目录 滑动效果
    $("#nav_inner").css({
        left:"1500px",
    })
    $("#nav .mv").each(function(i){
        $(this).hover(function () {
            $("#nav_inner").stop().animate({
                left:($(this).offset().left-99)+"px",
            },100)
        },function  () {
            $("#nav_inner").stop().animate({
                left:"1500px",
            },100)
        })
    })
    //DSp的媒介
   function mediumDsp() {
           $(".med_lg").css({transform: "scale(1.5)"})
           $(".med_lg").delay(3000).animate({
               marginLeft: "-14px",
               marginBottom: "-22px"
           }, 500).stop(true).animate({marginLeft: "0px", marginBottom: "0px"}, 500);
       $(".med_lg").css({transform: "scale(1.0)"})
           luo(".med_circle1", ".med_circle1", "230px", 100);
           luo(".med_circle2", ".med_circle2", "154px", 500);
           luo(".med_circle3", ".med_circle3", "96px", 700);
       timeM=setInterval(revolve,100);

    }
    $(".med_circle1,.med_circle2,.med_circle3").css({
        display: "none"
    })
    function luo(o, m, n, p) {
        $(o).css({
            display: "block"
        })
        $(m).animate({marginBottom: n}, 0).delay(p).animate({marginBottom: "0px"}, 500)
    }
   var timeM=null;
    var du=0;
    //字体旋转
    function revolve(){
        du+=45;
       $(".med_lg").css({transform:"rotate("+du+"deg)"});
        if(du==360){
            clearInterval(timeM)
            du=0;
        }
    }
    //国内资源的放大,抖动
    function nationDsp() {
        $(".app_internal li").each(function () {
            $(this).hover(function () {
                $(this).css({transform: "scale(1.1)"});
                $(this).stop(true)
                shake(this)

            }, function () {
                $(this).css({transform: "scale(1)"});
            })
        })
    }
    //抖动函数
    function shake(o) {
        var $panel = $(o);
        var box_left = 0;
        $panel.css({'marginLeft': box_left});
        for (var i = 1; 4 >= i; i++) {
            $panel.animate({marginLeft: box_left - (20 - 5 * i)}, 50);
            $panel.animate({marginLeft: box_left + 1.5 * (20 - 5 * i)}, 50);
        }
    }
        //   国外资源
        function abroadDsp() {

            $(".bda_lg").each(function (i) {
                $(this).hover(function () {
                    $(this).stop().animate({width: "0px"}, 0)
                });
                $(".game_start li").eq(i).hover(function(){}, function () {
                    $(".bda_lg").eq(i).stop().animate({width: "136px"}, 500);
                })

            })
        }

        //资源位置


        function placeDsp() {
            $(".place #place_one").animate({marginLeft: "94px"}, 200).delay(100).animate({marginLeft: "0px"}, 200)
            $(".place #place_two").animate({marginTop: "-24px"}, 200).delay(100).animate({marginTop: "0px"}, 200)
            $(".place #place_three").animate({marginLeft: "-88px"}, 200).delay(100).animate({marginLeft: "0px"}, 200)

            //灰色的显示
            $(".place .circle").each(function (i) {
                $(this).hover(function () {

                    $(".grey_x").eq(i).stop().animate({bottom: "0px"}, 500)
                }, function () {
                    $(".grey_x").eq(i).stop().animate({bottom: "-58px"}, 0)

                })
            })
        }
        //确定用户属性

    function userDSp(){
        $(".user .orange_ren").each(function(){
            $(this).hover(function (){
                $(".user .yuan").css({
                    width:'0px',height:"0px"
                })
                $(".xian_l").css({bottom:"-100px"});
                $(".xian_t").css({right:"-440px"});
                $(".xian_r").css({marginTop:"-20px",top:"0px"});
                $(".triangle_a").css({opacity:"0" });
                $(".user .statue").css({width:"0px"});
                $(".xian_l ,.xian_t,.xian_r").css(  {position:"absolute"})
                $(".user .yuan").stop(true).animate({width:"14px",height:"14px"},300,function(){
                    $(".xian_l").animate({bottom:"0px"},800,function(){
                        $(".xian_t").animate({right:"0px"},800,function(){
                            $(".xian_t").animate({right:"0px"},600,function(){
                                $(".xian_r").animate({top:"20px"},400,function(){
                                    $(".triangle_a").animate({opacity: "1"},function(){
                                        $(".user .statue").animate({width:"332px"},50);

                                        });
                                    });
                                });
                              });
                            });
                        });





                for(var i=0;i<255;i++){
                    var r=Math.round(Math.random()*255);
                    var g=Math.round(Math.random()*255);
                    var b=Math.round(Math.random()*255);
                }
                $(".user .statue").css({background:"rgb("+r+","+g+","+b+")"})
                for(var j=0;j<5;j++){
                    var rate1=Math.round(Math.random()*100);
                    var rate2=Math.round(Math.random()*(100-rate1));
                    var rate3=Math.round(Math.random()*(100-rate1-rate2));
                    var rate4=Math.round(Math.random()*(100-rate1-rate2-rate3));
                    var rate5=(100-rate1-rate2-rate3-rate4);
                }
                var rate=rate1+rate2+rate3+rate4+rate5
                var arrRate=[rate1,rate2,rate3,rate4,rate5];
                if(rate==100){

                    for(var j=0;j<5;j++){
                        $(".scale li").eq(j).html(arrRate[j]+"%")
                    }
                }

            },function(){
                $(".user .yuan").stop();
                $(".xian_l").stop();
                $(".xian_t").stop();
                $(".xian_r").stop();
                $(".triangle_a").stop();
                $(".user .statue").stop();
                $(".user .yuan").css({
                    width:'0px',height:"0px"
                })
                $(".xian_l").css({bottom:"-100px"});
                $(".xian_t").css({right:"-440px"});
                $(".xian_r").css({marginTop:"-20px",top:"0px"});
                $(".triangle_a").css({opacity:"0" });
                $(".user .statue").css({width:"0px"});
                $(".xian_l ,.xian_t,.xian_r").css(  {position:"absolute"})

            })
        })


    }
        //四种受众数据
       function dataDsp(){
            $(".data_tu").css({
                width:"0px"
            })

            $(".like, .like_lg ,.area ,.area_lg ,.taste_lg ,.taste, .spend ,.spend_lg").css({width:"0px"})
            $(".data_tu").animate({width:"764px"},5000);
            showData(".like_lg",500,"40px");
           showData(".like",800,"245px");
            showData(".area_lg",1200,"40px");
            showData(".area",1500,"356px");
            showData(".taste_lg",2800,"40px");
            showData(".taste",3300,"170px");
            showData(".spend_lg",4000,"40px");
            showData(".spend",4300,"260px");
        }
    function showData(z,y,x){
        $(z).delay(y).animate({width:x},500)
    }
})