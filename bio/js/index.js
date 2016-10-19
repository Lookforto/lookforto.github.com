//js-tom
DOMReady(function(){
	//提示下拉
	var oArrow = document.getElementById('arrow');
	(function(){
		var oUl = oArrow.children[0];
		var aLi = oUl.children;
		var timer = null;
		   oUl.innerHTML+=oUl.innerHTML;
		var n = 0;
		clearInterval(timer);
		var h = oUl.offsetHeight/2;
		setInterval(function(){
			n+=1;
			oUl.style.top = (n%h-h)%h + 'px';
		},30);
		
	})();
	
	//5f
	(function(){
		var oLeft = document.getElementById('left');
		var oRight = document.getElementById('right');
		var oBox = document.getElementById('box');
		var n=0;
		var bok=true;
	   oRight.onclick = function(){
		   	if(bok){
		   		n++;
		   	}
			bok=false;
		    if(n>0){
				oLeft.style.display='block';
				oRight.style.display='block';
			}
			if(n>1){
				oRight.style.display='none';
			}
			move(oBox,{left: - n*(oBox.offsetWidth/3)},{time:500,fn:function(){
				bok=true;
			}})
		};
	   oLeft.onclick = function(){
	   	
	   	   if(bok){
	   	   		n--;
	   	   }
	    	bok=false;    	
	    	if(n>0){
				oLeft.style.display='block';
				oRight.style.display='block';
			}
			if(n>1){
				oRight.style.display='none';
			}
			if(n==0){
				oLeft.style.display='none';
			}
			move(oBox,{left: -n*(oBox.offsetWidth/3)},{time:500,fn:function(){
				bok=true;
			}})
	    }
  
	})();

	//6f
	var oSelf = document.getElementById('self');
	function page6_op(){	
		setTimeout(function(){
			oSelf.style.display='block';
			move(oSelf,{height:400,marginTop:-100},{time:1000})
		},500);
	}
	function page6_cl(){
		oSelf.style.height = 0;
	}
	
	//jiaju-5f
     ;(function(){
		 var box30 = document.getElementById('sid_1');
		 var albo = box30.children[0].children;
		 var aA = box30.children[0].getElementsByTagName('a');
		 var arr1 = [];
		
		 for(var i=0; i<albo.length; i++){
			   arr1[i]={
				   left: albo[i].offsetLeft,
			        top: albo[i].offsetTop
				 }
			 }//先用数组存一下
         //把浮动布局改成定位布局 
		 for(var i=0; i<albo.length; i++){
			 albo[i].style.position = 'absolute';
			 albo[i].style.left=arr1[i].left + 'px';
			 albo[i].style.top=arr1[i].top + 'px';
			 albo[i].style.margin = 0;
		  }
		  var i=0;
		 for(var i=0;i<albo.length;i++){
		 	(function(index){
		 		 albo[i].onmouseover=function(){
		     	aA[index].style.display = 'block';
				 this.className='red';
			   	 move(this,{width:300,height:300,marginLeft:-50,marginTop:-50});
			     this.style.zIndex = i++;
			 };
			 albo[i].onmouseout=function(){
			 	aA[index].style.display = 'none';
              //移出的时候把定位布局改成浮动布局
				 this.className='';
			   	 move(this,{width:200,height:196,margin:0});
			 };
		 	})(i);		    
		}
	  })();
	  //判断页码
	  function pageif(){
	  	    if(n==0){
	    		page1_op();
	    	}else{
	    		page1_cl();
	    	}
	    	if(n==1){
	    		page2_op();
	    		oNav.style.background = 'rgba(102,0,0,.6)';
	    	}else{
	    		page2_cl();
	    	}
	    	if(n==2){
	    		page3_op();
	    		oNav.style.background = 'rgba(102,0,204,.6)';
	    	}else{
	    		page3_cl();
	    	}
	    	if(n==3){
	    		oNav.style.background = 'rgba(0,0,0,.6)';
	    	}
	    	if(n==5){
	    		page6_op();
	    		oNav.style.background = 'rgba(0,153,102,.6)';
	    		
	    	}else{
	    		page6_cl();
	    	}
	  }
	   //移动导航切换
 
	 	var oThan = document.getElementById('than');
	 	var oNavlis = document.getElementById('navlis');
	 	oThan.onclick = function(){
	 		if(oNavlis.style.display == 'block'){
	 			oNavlis.style.display = 'none';
	 		}else{
	 			oNavlis.style.display = 'block';
	 		}
	 	};
	  //滚轴监听控制页面切换-
	  var oHer = document.getElementById('header');
	  var n = 0;
	  var bok = true;
		  addWheel(oHer,function(bDown){
		  	  if(bDown){
		  	  	 //top
		  	  	 if(bok){
		  		     n--;     
		  	      }
		  	  	 if(n<0){n=0; }
		  	  	  bok=false;
		  	  	  //调用页码和导航组件联动切换
		  	  	  show(n);
		  	  	  show1(n);
		  	  	  move(oHer,{top:-n*641},{time:500,fn:function(){
		  	  	  	bok=true;
		  	  	  }});
		  	  	  //判断页码
		  	  	   setTimeout(function(){
		  	  	  	 pageif();
		  	  	  },500)
		  	  }else{
		  	  	 //bottom
		  	  	 if(bok){
		  		     n++;  
		  	      }
		  	  	  if(n>5){n=5;}
		  	  	  bok=false;
		  	  	   show(n);
		  	  	   show1(n);		  	  	   
		  	  	  move(oHer,{top:-n*641},{time:500,fn:function(){
		  	  	 	bok=true;
		  	  	 }});
		  	  	 //判断页码
		  	  	  setTimeout(function(){
		  	  	   pageif();
		  	  	  },500)
		  	  }
		  });
		  oArrow.onclick = function(){
		  	 n++;
		  	 show(n);
		  	 show1(n);
		  	 move(oHer,{top:-n*641},{time:500});	
		  };
		 
	//导航滚轴页码联动
	  var oNavs = document.getElementById('navlis');
	  var oNav = oNavs.parentNode.parentNode;
	  var aAs = oNavs.children;
	  var oPas = document.getElementById('pages');
	  var aPas = oPas.children;
	  var arr = ['active','active_1'];
	  //页面切换
      function chak(obj,obj1){
      	  for(var i=0; i<obj.length;i++){
      	  	(function(index){
      	  		obj[i].onclick = function(){
      	  			if(bok){
      	  				 move(obj1,{top:-index*641},{time:500,fn:function(){
		  	  	 	     bok=true;
		  	  	      }});
      	  			}
      	  		  show(index);
      	  		  show1(index); 	 
      	  		};
      	  	})(i);
      	  }
       }
//    //移动拖拽
//       function moveT(obj,index){
//       	n++
//       	  obj.addEventListener('touchstart',function(ev){
//				var disY=ev.targetTouches[0].pageY-obj.offsetTop;
//				function moves(ev){//事件绑定 定义函数名 单独封装起来 方便解绑  和jquery写法相似
//		                        // 获取坐标用ev.targetTouches[0].pageX  不算滚动轴的距离 只是到可视去的
//		            var to = ev.targetTouches[0].pageY-disY;
//		            if(index<0){
//		            	index=0;
//		            }
//		            if(index<5){index=5}
//					  move(obj,{top:index*to},{time:500});	
//				}
//				function end(){ //解除绑定函数
//					document.removeEventListener('touchmove',moves,false);
//					document.removeEventListener('touchend',end,false);
//				}
//				document.addEventListener('touchmove',moves,false);
//				document.addEventListener('touchend',end,false)
//				ev.preventDefault();//阻止默认事件
//			},false);
//       }
		    
      //导航切换
       function show(index){
         for(var j=0; j<aAs.length; j++){
  		  	 aAs[j].className='';
  		  	 page2_cl();
  		  	 page6_cl();
  		   }         
          	aAs[index].className = arr[0];         	
//        	if(oThan){
//        		oNavs.style.display='none';
//        	}else{
//        		oNavs.style.display='block';
//        	}
          	page2_op();
          	page6_op();
       }
       //页码切换
        function show1(index){
         for(var j=0; j<aAs.length; j++){
  		  	 aPas[j].className='';
  		  	 page6_cl();
  		   }        
          	aPas[index].className = arr[1];
          	 page6_op(); 	 
         }
      chak(aAs,oHer);
      chak(aPas,oHer);
     
     //切换当前页时再添加css3效果
     //动态添加class  animated
 	  //page1
 	  var oPage1 = document.getElementById('page1');
      var aDivs = oPage1.children;
      var oPli = aDivs[4].children[0];
	      function page1_op(){
		     	aDivs[0].style.transform ='rotate(0deg)';
		     	aDivs[1].style.transform ='rotate(0deg)';
		     	aDivs[2].style.transform ='rotate(0deg)';
		     	aDivs[3].style.transform ='rotate(0deg)';
	     	//page1 添加效果	     	
	     	    addClass(oPli,'bounceInDown');
	      }
	     function page1_cl(){
	     	    aDivs[0].style.transform ='rotate(-90deg)';
		     	aDivs[1].style.transform ='rotate(90deg)';
		     	aDivs[2].style.transform ='rotate(90deg)';
		     	aDivs[3].style.transform ='rotate(-90deg)';
	     	//page1 添加效果	     	
	     	    removeClass(oPli,'bounceInDown');
	     }
      page1_op();
     
      
     //page1_cl();
     //page2
     var oPage2 = document.getElementById('page2');
     var oPs2 = oPage2.children[0];
     var aLi_2 = oPage2.children[1].children;
     function page2_op(){
     	 addClass(oPs2,'bounceInLeft')
     	for(var i=0; i<aLi_2.length; i++){
     		addClass(aLi_2[i],'bounceInLeft')
     	}
     }
     function page2_cl(){
     	 removeClass(oPs2,'bounceInLeft')
     	for(var i=0; i<aLi_2.length; i++){
     		 removeClass(aLi_2[i],'bounceInLeft')
     	}
     }
     
    //page3
    var oBlp = document.getElementById('blpm');
    var oDDvs = oBlp.children;
    function page3_op(){
    	for(var i=0; i<oDDvs.length; i++){
    		addClass(oDDvs[i],'bounceInRight');
    	}
    }
    function page3_cl(){
    	for(var i=0; i<oDDvs.length; i++){
    	   removeClass(oDDvs[i],'bounceInRight');
    	}
    }
   window.onresize=function(){
   	 var clientW = document.documentElement.clientWidth;
     //document.title=clientW;
   };

})



