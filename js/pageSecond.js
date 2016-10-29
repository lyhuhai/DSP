$(function  () {
	// 初始化
	 var DT = new Date()
    $(".nav span").html(DT.getFullYear()+"年 "+(DT.getMonth()+1)+" 月 "+DT.getDate()+" 日");
    // 导航背景色设置
    $(".nav").append('<div class="nav-bg"></div>')
    $(".nav .nav-bg").css({
        left:$(".nav ul li").eq(1).offset().left-99+"px",
    })
    $(".nav ul li").each(function(i){
        $(this).hover(function () {
            $(".nav .nav-bg").stop().animate({
                left:($(this).offset().left-99)+"px",
            },100)
        },function  () {
            $(".nav .nav-bg").stop().animate({
                left:($(".nav ul li").eq(1).offset().left-99)+"px",
            },100)
        })
    })
	$(".panel-5 .info-item li span").each(function(){
		var r = Math.floor(Math.random()*256);
		var g = Math.floor(Math.random()*256);
		var b = Math.floor(Math.random()*256);
		$(this).css({
			background:"rgb("+r+","+g+","+b+")"
		})
	})
	$(".module-5 .pic-info ul").each(function (i) {
		$(this).css({
			width:this.children[0].offsetWidth*(this.children.length)+"px",
			height:this.children[0].offsetWidth,
			marginLeft:this.children[0].offsetWidth*i+"px"
		})
	})
	$(".module-5 .pic-info ul li a").each(function  (i) {
		$(this).css({
			backgroundPosition: -102*i+"px 0px",
		})
	})
	$(".panel-6 li").each(function  (i) {
		$(this).css({
			left: $(this).width()*i+"px",
		})
	})
	$(".panel-6 em").each(function  (i) {
		$(this).css({
			backgroundPosition: -200*i+"px 0px",
		})
	})
	// 样式设置
	// arr[top,left]开始位置 brr[top,left]结束位置
	var arr = [[-100,498],[190,-100],[190,1000],[388,-100],[388,1000],[700,376]];
	var brr = [[60,498],[190,184],[190,684],[388,184],[388,684],[510,376]];
	var x = 270,y =0;
	var  x1 = -90,y1= 0;
	var flag = [1,1,1,1,1,1,1,1,1]
	
	$(window).scroll(AA)
	function AA() {
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
		if(Top>300&&Top<1286){
			if (flag[0]==1) {
				flag[0] = 0;
				Hexagon();
			}			
		}else{
			flag[0] = 1;	
			
		}
		if(Top>1300 && Top<2000){
			if (flag[1]==1) {
				flag[1] = 0;
				module2();
			}			
		}else{
			flag[1] = 1;		
		}
		if (Top>1600 && Top<2400) {
			if (flag[2]==1) {
				flag[2] = 0;
				panel3();
			}			
		}else{
			flag[2] = 1;			
		}
		if (Top>2350 && Top<2700) {
			if (flag[3]==1) {
				flag[3] = 0;
				module3();
			}			
		}else{
			flag[3] = 1;	
		
		}
		if (Top>2600&&Top<3400) {
			if (flag[4]==1) {
				flag[4] = 0;
				panel4();
			}			
		}else{
			flag[4] = 1;	
		
		}
		if (Top>3100 && Top<4000) {
			if (flag[5]==1) {
				flag[5] = 0;
				module4();
			}			
		}else{
			flag[5] = 1;	
		
		}
		if(Top>3700 && Top<4500){
			if (flag[6]==1) {
				flag[6] = 0;
				panel5();
			}			
		}else{
			flag[6] = 1;	
		
		}
		if (Top>4300&&Top<5000) {
			if (flag[7]==1) {
				flag[7] = 0;
				module5();
			}			
		}else{
			flag[7] = 1;
		}
		if (Top>4700) {
			if (flag[8]==1) {
				flag[8] = 0;
				panel6();
			}			
		}else{
			flag[8] = 1;		
		};
		// 函数结束点
	}
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
	// 模块一   六角效果
	function  Hexagon() {		
		$(".hexagon").css({
			width: 0,
			height: 0,
		})
		$(".info-1 li").each(function  (i) {
			$(this).css({
				top:arr[i][0],
				left:arr[i][1],
				opacity:0,
			})
		})
		$(".hexagon").stop().animate({
			width: '308px',
			height: '356px',
		},500)
		$(".info-1 li").each(function  (i) {
			$(this).stop().animate({
				top:brr[i][0],
				left:brr[i][1],
				opacity:1,
			},500)
		})
	}
	//模块2
	var t = null;
	function  module2() {
		x = 270;
		y = 0;
		$(".Arrow").css({
			top:'-100px',
			opacity:0,
		},0)
		$(".arrowInfo").css({
			opacity: 0
		},0)
		$(".info-2 li").css({
			opacity: 0
		},0)
		$(".Arrow").stop(true).animate({
			top:'282px',
			opacity:1,
		},500)
		$(".arrowInfo").stop(true).delay(550).animate({
			opacity: 1
		},500)
		t = setTimeout(ad,1000);
		function ad() {
			clearInterval(t)
			x+=5;
			y+=5/90;
			if (x<360) {
				$(".info-2 li").css({
					transform:"rotate("+x+"deg)",
					opacity:y,

				});
				t = setInterval(ad,40);
			}else{
				$(".info-2 li").css({
					transform:"rotate(360deg)",
					opacity:1
				});
				clearInterval(t)
			};
		}
	}
	// 面板panel-3
	var t3 = null
	function  panel3() {
		x1 = -90;
		y1 = 0 ;
		$(".info-3 li").css({
			transform:"rotate(-90deg)",
			opacity:0
		});
		$(".panel-3 .line-1").css({
			width:"0px",
			left:'516px',
		})			
		$(".panel-3 .line-2").css({
			width:"0px",
		})
		$(".panel-3 .line-3").css({
			width:"0px",
		})
		$(".panel-3 p").each(function  () {
			$(this).css({
				top:"500px",
				opacity:0,
			})		
		})
		at();
		function  at() {
			clearInterval(t3)
			x1+=5;
			y1+=5/90;
			if (x1<0) {
				$(".info-3 li").css({
					transform:"rotate("+x1+"deg)",
					opacity:y1,
				});
				t3 = setInterval(at,40);
			}else{
				$(".info-3 li").css({
					transform:"rotate(0deg)",
					opacity:1
				});
				clearInterval(t3)
			};
		}		
		$(".panel-3 .line-1").stop(true).delay(640).animate({
			width:"456px",
			left:'60px',
		},500)			
		$(".panel-3 .line-2").stop(true).delay(1640).animate({
			width:"236px",
		},500)
		$(".panel-3 .line-3").stop(true).delay(2640).animate({
			width:"180px",
		},500)
		$(".panel-3 p").each(function  (i) {
			$(this).stop(true).delay(1140+i*1000).animate({
				top:"416px",
				opacity:1,
			},500)		
		})
	}
	// 模块3
	function  module3() {
		$(".module-3 .bg").stop(true).animate({
			width:'0px',
		},0)
		$(".module-3 .txt-m1").stop(true).slideUp(0)
		$(".module-3 .txt-m2").stop(true).slideUp(0)
		$(".module-3 .txt-m3").stop(true).slideUp(0)
		$(".module-3 .txt-m4").stop(true).slideUp(0)
		$(".module-3 .bg").animate({
			width:"700px",
		},2000)
		$(".module-3 .txt-m1").delay(300).slideDown(450)
		$(".module-3 .txt-m2").delay(400).slideDown(450)
		$(".module-3 .txt-m3").delay(1000).slideDown(450)
		$(".module-3 .txt-m4").delay(1800).slideDown(450)
		
	}
	
	// 面板4
	function  panel4() {
		$(".panel-4 ul li").each(function () {
			$(this).css({
				height:'0px',
				opacity:"0"
			})
		})
		$(".panel-4 ul li").each(function () {
			$(this).stop(true).animate({
				height:'380px',
				opacity:"1"
			},1500)
		})
		
	}
	// 模块4 // 多维度机制
	function  module4() {
		$(".module-4 .line-4 .line-info").css({
			width: "892px",
		    height: "36px",
		    marginTop: "120px",
			background: "#fff",
		})
		$(".module-4 .line-4").css({
			width:0,
			height:"36px",
		})
		$(".module-4 .line-4 .line-info").css({
			width:"892px",
		},0)
		$(".module-4 .pic-4 li").each(function (i) {
			$(this).css({
				opacity:0,
				height:'0px',
			})
		})
		$(".module-4 .line-4").animate({
			width:"900px",
		},2000).animate({
			height:"158px",
		},500)
		$(".module-4 .line-4 .line-info").delay(2500).animate({
			width:"0px",
		},1500)
		$(".module-4 .pic-4 li").each(function (i) {
			$(this).delay(400*(i+1)).animate({
				opacity:1,
				height:'100px',
			},100)
		})
	}	
	var t5 =null;
	var x5 = 0,y5 = 0;
	var np =1,speed5 = 5;
	function panel5() {
		
		$(".panel-5 .yuan .pictxt").css({
			opacity:0,
		})
		$(".panel-5 .yuan .picL").css({
			transform:"rotate(0deg)",
			opacity:0,
		});
		$(".panel-5 .yuan .bg").css({
			zIndex:1000,
		});
		$(".panel-5 .yuan .picR").css({
			transform:"rotate(0deg)",
		});
		yuan();
		function yuan() {
			clearInterval(t5)		
			if(x5<360){
				x5+=speed5;
				y5+=speed5/180;
				$(".panel-5 .yuan .picL").css({
					transform:"rotate("+x5+"deg)",
					opacity:y5,
				});
				t5 = setInterval(yuan,40);
				if(x5>180){
					$(".panel-5 .yuan .bg").css({
						zIndex:100,
					});
					$(".panel-5 .yuan .picR").css({
						transform:"rotate("+(x5-180)+"deg)",
					});
				}	
			}else{
				clearInterval(t5);
				if(np == 1){
					p5();
					console.log("a")
				}else{
					$(".panel-5 .yuan .pictxt").stop(true).animate({
						opacity:1,
					},200);
					x5 = 0,y5 = 0,np =1,speed5 = 5;
				}	
			}
		}	
		function p5() {
			clearInterval(t5);
			speed5 = 2
			x5-=speed5;
			np = 0;

			$(".panel-5 .yuan .picL").css({
				transform:"rotate("+x5+"deg)",
				opacity:y5,
			});
			$(".panel-5 .yuan .picR").css({
				transform:"rotate("+(x5-180)+"deg)",
			});
			t5 = setInterval(p5,40);
			if(x5<=320){
				clearInterval(t5);
				panel5();
			}
		}
	}
	// 模块5
	function  module5() {	
		$(".module-5 h4").css({
			marginTop:"-100px",
			opacity:"0",
		})
		$(".module-5 p").css({
			left:"-100px",
			opacity:"0",
		})
		$(".module-5 .pic-info").css({
			left: '0px',
			opacity:'0'
		})
		$(".module-5 span").css({
			opacity:'0'
		})
		$(".module-5 h4").eq(0).stop().animate({
			marginTop:"0px",
			opacity:"1",
		},500)
		$(".module-5 h4").eq(1).stop().animate({
			marginTop:"50px",
			opacity:"1",
		},500)
		$(".module-5 p").stop().delay(200).animate({
			left:"0",
			opacity:'1'
		},500)
		$(".module-5 .pic-info").stop().animate({
			left: '410px',
			opacity:'1'
		},500)	
		$(".module-5 span").stop().delay(500).animate({
			opacity:'1'
		},100)	
		for (var i = 0; i <30; i++) {
			var r = Math.floor(Math.random()*14);
			$(".module-5 .pic-info ul li").eq(r).stop().delay(10*i).animate({
				opacity:"0"
			},5).animate({
				opacity:"1"
			},5)
		};
	}
	function  panel6() {
		$(".panel-6 h2").css({
			width:0,
		})
		$(".panel-6 li").css({
			left:0,
			opacity:0,
		})
		$(".panel-6 h2").animate({
			width:"560px",
		},500)
		$(".panel-6 li").each(function  (i) {
			$(this).stop().animate({
				left: $(this).width()*i+"px",
				opacity:'1',
			},200*i)
		})			
	}
// 加载结束点

})