$(function(){
    //获取日期
    var myDay=new Date();
    var year=myDay.getFullYear();
    var month=myDay.getMonth()+1;
    var day=myDay.getDate();
    $(".nav span").html(year+" 年 "+month+" 月 "+day+" 日");
    //滚动条位置的监听
    var flag=0;
    var i=(-90);
    var fla = [1,1,1,1,1,1]
    var time=null;
    var t=null;
    $(window).scroll(function(){
        console.log($(window).scrollTop());
        //console.log($(window).scrollLeft());
        var winPost=$(window).scrollTop();
        var winPosr=$(window).scrollLeft();
        //导航位置的固定
        if(winPost<=620){
            $(".nav").css({
                position:" absolute",
                top:"618px",
                left:"0px",
                zIndex:9999,
            });
        }else{
            $(".nav").css({
                position:"fixed",
                top:"0px"
            });
            if(winPosr<=100){
                $(".nav").css({
                    left:100-winPosr+"px"
                });
            }else{
                $(".nav").css({
                    left:(-(winPosr-100))+"px"
                });
            }
        }
    //    进入动画
    //51DSP介绍
        if(winPost>=311&&winPost<=1200){
            if(fla[0]==1){
                fla[0]=0;
                 modl1();
            }
            }else{
            fla[0]=1;
        }
    //<!--51DSP案例-->
        if(winPost>=788&&winPost<=1850){
           if(fla[1]==1){
                fla[1]=0;
                modl2();
           }  
        }else{
            fla[1]=1;
             $(".case_foot_tu,.arr,.arr1").stop(false,true).animate();
            
        }
    //视频广告
        if(winPost>=1462&&winPost<2450){
                if(fla[2]==1){
                    fla[2]=0;
                    modl3();
                }    
        }else{
            fla[2]=1;

              $(".bb,.cc,.dd,.ee").stop(false,true).animate();
             $(".bb,.dd,.ee").css({
                    opacity:0
                });
                $(".cc").css({
                    opacity:0,
                    marginTop:"-20px"
                }); 
        }
    //    移动端广告
        if(winPost>=2040&&winPost<3050){
           if(fla[3]==1){
                fla[3]=0;
                modl4();
           }
        }else{
             fla[3]=1;
             $(".mobile_phone,.mobile_ball,.mobile_ul").stop(false,true).animate();
         
        }

    //    关于我们
        // var time=null;
        if(winPost>=2670&&winPost<=3600){
           if(fla[4]==1){
                fla[4]=0;
                modl5();
           }
        }else{
            fla[4]=1;  
            flag=0;    
             clearInterval(time); 
                 
        }

    //    广告咨询
        if(winPost>=3200){
           if(fla[5]==1){
                fla[5]=0;
                modl6();
           }
        }else{
           fla[5]=1;
        }
// 滚动条监听的结束位置
    });

//导航条的鼠标悬浮事件
    $(".nav").append('<div class="nav-bg"></div>')
    $(".nav .nav-bg").css({
        left:$(".nav ul").offset().left-99+"px",
    })
    $(".nav ul li").each(function(i){
        $(this).hover(function () {
            $(".nav .nav-bg").stop().animate({
                left:($(this).offset().left-99)+"px",
            },100)
        },function  () {
            $(".nav .nav-bg").stop().animate({
                left:($(".nav ul li").eq(0).offset().left-99)+"px",
            },100)
        })
    })

 //51DSP介绍
      function modl1(){
            $(".intro_foot").css({
                 opacity:0,
                height:"0px"
            });
            exit(".part1")
             enter(0,".part1");
            $(".intro_foot").stop(true).delay(1600).animate({
                height:"136px",
                opacity:1
            },1000);
      }
//51DSP案例
    function modl2(){
        exit(".part2");
        $(".case_foot_tu").css({
            marginTop:"0px",
            opacity:0
        });
        $(".arr,.arr1").css({
            opacity:0
        });
        enter(0,".part2");
         $(".case_foot_tu").stop(true).delay(800).animate({
                marginTop:"52px",
                opacity:1
            },50).animate({marginTop:"30px"},50).animate({marginTop:"42px"},50);
        //  出现字
            $(".arr").stop(true).delay(1300).animate({
                opacity:1
            },200);
            $(".arr1").stop(true).delay(1600).animate({
                opacity:1
            },200);
    } 
// 视频广告
     function modl3(){
                exit(".part3");
                $(".bb,.dd,.ee").css({
                    opacity:0
                });
                $(".cc").css({
                    opacity:0,
                    marginTop:"-20px"
                });
                 enter(0,".part3");
                video(0,".bb",".cc",".dd",".ee");
     }
 //  移动端广告
     function modl4(){
            exit(".part4");
            $(".mobile_ball").css({
                opacity:0,
                width:"0px"
            });
            $(".mobile_phone").css({
                  height:"0px",
                opacity:0
            });
            $(".mobile_ul").css({
                 opacity:0,
                top:"300px"
            });
             enter(0,".part4");
            $(".mobile_phone").stop(true).delay(600).animate({
                opacity:1,
                height:"330px"
            },200);
            $(".mobile_ball").stop(true).delay(800).animate({
                opacity:1,
                width:"280px"
            },500);
            $(".mobile_ul").stop(true).delay(1300).animate({
                opacity:1,
                top:"204px"
            },500);
      }
 // 关于我们
     function modl5(){
            exit(".part5");
            $(".about_foot").css({
                opacity:0 
            });
             enter(0,".part5");
                    if(flag==0) {
                         time = setInterval(function () {
                         $(".about_foot").css({
                              transform: "rotate(" + i + "deg)",
                              transformOrigin: "bottom left"
                         }).delay(200).animate({opacity: 1}, 1500);
                         i++;
                    //console.log(i);
                            if (i >= 0) {
                                i = -90;
                              clearInterval(time);
                             }
                         }, 10);
                        flag=1;
                    }     
    }
//广告咨询
    function modl6(){
        exit(".part6");
        $(".message_foot").css({
             opacity:0
        });
        enter(0,".part6");
        $(".message_foot").stop(true).delay(600).animate({
             opacity:1
        },1000);
    } 


//    从左到右进入的函数
    function enter(index,x){
        //    从左向右进入到中间位置
        var wid=(1818-$(x).eq(index).width())/2;
        $(x).eq(index).css({
            visibility:"visible"
        });
        $(x).eq(index).stop(true).animate({
            marginLeft:wid+"px"
        },200,function(){
            enter(index+1,x);
        });
    }
    //   退出上一函数
    function exit(x){
        $(x).css({
            visibility:"hidden",
            marginLeft:"600px"
        });
    }

    function video(index,x,y,z,w){
        $(x).eq(index).stop(true).delay(600).animate({
            opacity:1
        },200,function(){
            video(index+1,x,y,z,w);
        });
        $(y).eq(index).stop(true).delay(800).animate({
            marginTop:"34px",
            opacity:1
        },100,function(){
            video(index+1,x,y,z,w);
        });
        $(z).eq(index).stop(true).delay(800).animate({
            opacity:1
        },100,function(){
            video(index+1,x,y,z,w);
        });
        //+
        $(w).eq(index).stop(true).delay(900).animate({
            opacity:1
        },100,function(){
            video(index+1,x,y,z,w);
        });
    }


    // 结束点
});