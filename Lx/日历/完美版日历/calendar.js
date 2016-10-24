(function(){
	function getPos(obj){
		var l=0;
		var t=0;
		while(obj){
			l+=obj.offsetLeft;
			t+=obj.offsetTop;
			obj=obj.offsetParent;
		}
		return {left:l, top:t};
	}
	var arrBox=[];
	window.zns_calendar=function(name){
		var oT=document.getElementsByName(name)[0];
		//创建元素
		var oBox=document.createElement('div');
		arrBox.push(oBox);
		oBox.className='calendar';
		oBox.innerHTML='<a href="javascript:;" class="prev">←</a>'
				+'<a href="javascript:;" class="next">→</a>'
				+'<h3>2014年5月</h3>                        '
				+'<ol>                                      '
				+'<li>一</li>                               '
				+'<li>二</li>                               '
				+'<li>三</li>                               '
				+'<li>四</li>                               '
				+'<li>五</li>                               '
				+'<li class="week">六</li>                  '
				+'<li class="week">日</li>                  '
				+'</ol>                                     '
				+'<ul>                                      '
				+'</ul>';
		document.body.appendChild(oBox);
		
		oT.onfocus=function(){
			for(var i=0; i<arrBox.length; i++){
				arrBox[i].style.display='none';
			}
			oBox.style.display='block';	
			oBox.style.left=getPos(oT).left+'px';
			oBox.style.top=oT.offsetHeight+getPos(oT).top+'px';
		};
		
		oT.onclick=function(ev){
			var oEvent=ev || event;
			 oEvent.cancelBubble=true;
		}
		
		document.onclick=function(){
			//oBox.style.display='none';	
			for(var i=0; i<arrBox.length; i++){
				arrBox[i].style.display='none';
			}
		}
		/*oT.onblur=function(){
			setTimeout(function(){
				oBox.style.display='none';
			},200);	
		}*/
		
		var oUl=oBox.getElementsByTagName('ul')[0];
		var oNext=oBox.children[1];
		var oPrev=oBox.children[0];
		var oH3=oBox.getElementsByTagName('h3')[0];
		
		var iNow=0;
		
		function reFresh(){
			oUl.innerHTML='';
			//求出本月空白的li
			function getFirstDay(){
				var oDate=new Date();
				oDate.setMonth(oDate.getMonth()+iNow);
				oDate.setDate(1);
				return oDate.getDay();
			}
			var d=getFirstDay();
			if(d==0)d=7;
			//d=d-1; 
			//d-=1;
			d--;
			for(var i=0; i<d; i++){
				var oLi=document.createElement('li');
				oUl.appendChild(oLi);
			}
			
			//求出本月的li
			function getMonthDay(){
				var oDate=new Date();
				oDate.setMonth(oDate.getMonth()+iNow,1);
				oDate.setMonth(oDate.getMonth()+1);
				oDate.setDate(0);
				return oDate.getDate();
			}	
			var m=getMonthDay();
			
			for(var i=0; i<m; i++){
				var oLi=document.createElement('li');
				oLi.innerHTML=i+1;
				
				oLi.onclick=function(){
					var oDate=new Date();
					oDate.setMonth(oDate.getMonth()+iNow);
					oT.value=oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+this.innerHTML;
					oBox.style.display='none';	
				}
				
				oUl.appendChild(oLi);
			}
			
			//周末变红
			for(var i=0; i<oUl.children.length; i++){
				if(i%7==5 || i%7==6){
					oUl.children[i].className='week';	
				}
			}
			
			
			if(iNow<0){
				for(var i=0; i<oUl.children.length; i++){
					oUl.children[i].className='pass';	
				}
			}else if(iNow>0){
				
			}else{
				//过去变灰
				var oDate=new Date();
				oDate.setMonth(oDate.getMonth()+iNow);
				var today=oDate.getDate();
				for(var i=0; i<oUl.children.length; i++){
					if(parseInt(oUl.children[i].innerHTML)<today){
						oUl.children[i].className='pass';	
					}else if(parseInt(oUl.children[i].innerHTML)==today){
						oUl.children[i].className='today';	
					}
				}
			}
			
			//改标题
			var oDate=new Date();
			oDate.setMonth(oDate.getMonth()+iNow,1);
			oH3.innerHTML=oDate.getFullYear()+'年'+(oDate.getMonth()+1)+'月';
		}
		
		reFresh();
		
		//点击切换月份
		oNext.onclick=function(ev){
			var oEvent=ev || event;
			iNow++;
			reFresh();	
			
			oEvent.cancelBubble=true;
		};
		
		oPrev.onclick=function(ev){
			var oEvent=ev || event;
			iNow--;
			reFresh();
			oEvent.cancelBubble=true;		
		}
	}
	var oLink=document.createElement('link');
	oLink.rel='stylesheet';
	oLink.type='text/css';
	oLink.href='calendar.css';
	var oHead=document.getElementsByTagName('head')[0];
	oHead.appendChild(oLink);
	
})();