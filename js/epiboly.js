$(function () {
  // 导航栏的时间对象
  var DT = new Date()
  $(".nav span").html(DT.getFullYear()+"年 "+(DT.getMonth()+1)+" 月 "+DT.getDate()+" 日");
  // 导航背景色设置
  $(".nav").append('<div class="nav-bg"></div>')
  $(".nav .nav-bg").css({
      left:"1344px",
  })
  $(".nav ul li").each(function(i){
      $(this).hover(function () {
          $(".nav .nav-bg").stop().animate({
              left:($(this).offset().left-99)+"px",
          },100)
      },function  () {
          $(".nav .nav-bg").stop().animate({
            left:"1344px",
          },100)
      })
  })
  $(window).scroll(function () {
      var Top = $("body").scrollTop()
      if(Top>=618){
          navigation();
      }else{
          $(".nav").css({
              position: 'absolute',
              left: '0px',
              top:'618px',
          })
      };
  })  
  // 导航栏效果
  function navigation() {
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
  }
  window.onscroll=function(){
  	var sTop=document.body.scrollTop||document.documentElement.scrollTop;
    if(sTop>=500&&sTop<=1000){
    $(".middle1").animate({
            opacity:1
          },3000);
    }
    if(sTop>900&&sTop<=1400){
    $(".line").animate({
      top:"0px",
      opacity:1
    },3000)
    $(".box1").animate({
      opacity:1
    },2000)
    $(".date1").delay(100).animate({
      left:"580px",
      opacity:1
    },600).animate({
      left:"550px",
    },400)

    setTimeout(function(){
      box_1.style.transform="scale(1.1)";
      setTimeout(function(){
        box_1.style.transform="scale(1)";
      },500)
    },1500)

    $(".box2").delay(1000).animate({
      opacity:1
    },500)
    $(".date2").delay(1000).animate({
      left:"1020px",
      opacity:1
    },600).animate({
      left:"1100px",
    },400)
    $(".box3").delay(1000).animate({
      opacity:1
    },500)
    setTimeout(function(){
      box_2.style.transform="scale(1.1)";
      setTimeout(function(){
      box_2.style.transform="scale(1)";
      },1000)
      box_3.style.transform="scale(1.1)";
      setTimeout(function(){
      box_3.style.transform="scale(1)";
      },1000)
    },2000)
      $(".box4").delay(2000).animate({
      opacity:1
    },500)
    $(".date3").delay(2000).animate({
      left:"580px",
      opacity:1
    },600).animate({
      left:"550px",
    },400)
    setTimeout(function(){
      box_4.style.transform="scale(1.1)";
      setTimeout(function(){
      box_4.style.transform="scale(1)";
      },1000)
    },3500) 
    }
    if(sTop>1400&&sTop<=1700){
      $(".middle3 li").each(function  (i) {
        $(".middle3 li").eq(i).on("mouseover",function(){
          $(".pic"+(i+1)).stop().animate({
            marginTop:-61
          })
        })
        $(".middle3 li").eq(i).on("mouseout",function(){
          $(".pic"+(i+1)).stop().animate({
            marginTop:0
          })
        })
      })
    }
  } 
})

