//wo de kuangjia 
//选随机数
function random(m,n){
	return parseInt(Math.random()*(n-m)+m);
}
//end
//设置css样式
function setCss(obj,name,val){
				//用arguments判断参数的个数。
				//在参数不确定时用
				 if(arguments.length==2){
				 	return obj.style[name];
				 }else{
				 	obj.style[name]=val;
				 }
			}
//end
//计算数字的综合，用arguments.
function count(写需要计算的数字，用逗号隔开){
		         //利用arguments计算数字的总和。
				var num=0;
				for(var i=0; i<arguments.length; i++){
					num+=arguments[i];
				}
				return num;//返回相加之后的值
				//把相加的数字写在实参里，argunments和形参无关，和实参有关系
			}
//end
//取非行间样式
function getStyle(obj,name){
				if(obj.currentStyle){
					return obj.currentStyle[neme];//兼容ie
				}else{
					return getComputedStyle(obj,false)[name];//除ie以外的
				}
			}
//end
//选项卡，自定义属性index。 用的是btn和div布局
function oTab(id,even){
				var oBox=document.getElementById(id);
				var oBtn=oBox.getElementsByTagName('input');//button按钮
				var oDiv=oBox.getElementsByTagName('div');//div
				
				for(var i=0; i<oBtn.length; i++){
					oBtn[i].index=i;
					oBtn[i][even]=function(){
						for(var i=0; i<oBtn.length; i++){
							oBtn[i].className='';
							oDiv[i].style.display='none';
						}
						this.className='active';
						oDiv[this.index].style.display='block';
					}
				}

}//加自定义属性的选项卡 end
//封闭空间的选项卡
 function oTab(oBj,oBtn,oDiv){
//		   	    var oBj=document.getElementById(id); 按钮和盒子的父级
//				var oBtn=oBj.getElementsByTagName('input');
//				var oDiv=oBj.getElementsByTagName('div');
//封闭空间法 取 i值		   	
			   	for(var i=0; i<oBtn.length; i++){
	            	//准备写事件，需要i值。用封闭空间
	            	(function(a){
	            		oBtn[a].onclick=function(){
	            			for(var j=0; j<oBtn.length; j++){
	            				oBtn[j].className='';
	            				oDiv[j].style.display='none';
	            			}
	            			this.className='active';
	            			oDiv[a].style.display='block';
	            		}
	            	})(i);
	            }
		   }
//end
//补零
function toZeio(n){
	if(n<10){
		return '0'+n;
	}else{
		return '' + n;
	}
}
//end

//查找是否和数组重复
function findInArr(n,arr){
	for(var i = 0; i < arr.length; i++){
		if(n == arr[i]){
			return true;	
		}	
	}	
	return false;
}
//end
//判断是否整数
function intg(n){
	if(parseInt(n) == n){
		return true; //如果是返回true
	}else{
		return false;
	}
}
//end
//判断真假
function judge(a){
	if(a){
		return true;
	}else{
		return false;
	}
}
//end
//去除数组中的奇数
function odd(arr){
	//var arr=[1,5,2,4,6,9];
	for(var i = 0 ; i < arr.length; i++){
		if(arr[i]%2==1){
			arr.splice(i,1);
			i--;
		}
  }
  return arr;
}
//end
//获取documen下的className.
//oParent:父级  sClass：我们要查找的className
function getByClass(oParent,sClass){
	//如果浏览器支持JS自带的获取class的方法就是用JS自带的获取方法;
	if(oParent.getElementsByClassName){
		return oParent.getElementsByClassName(sClass);
	}else{//如果浏览器不支持JS自带的获取class的方法,也就是ie8-
		//通过oPraent获取所有的元素;
		var aEle = oParent.getElementsByTagName('*');
		var arr = [];
		//循环吧每个元素绳身上的class切割一下，切割完成返回一个数组
		for(var i = 0; i < aEle.length; i++){
			var tmp = aEle[i].className.split(' ');	
			//判断切割完成后的数组里面是否包含我们需要找的className;
			if(findInArr(sClass,tmp)){
				//如果包含的话就添加到arr里面;
				arr.push(aEle[i]);
			}
		}
		return arr;//并且返回arr;
	}	
}
//end
//获得本月有多少天
function getD(){
	var oDate = new Date();
	oDate.setMonth(oDate.getMonth()+1);//先进行到下一月
	oDate.setDate(0);//再返回本月
	return oDate.getDate();//下个月的上个月的最后一天
  }			
//end			
//去除数组中重复的数
function ohh(arr){
	arr.sort();//排序  
	//var arr=[1,5,2,4,6,9];
	for(var i = 0 ; i < arr.length; i++){
		if(arr[i]==arr[i+1])//那当前的和下一个做对比，相等的话就从当前删除一个；
		{
			arr.splice(i,1);
			i--;
		}
  }
  return arr;
}
//end
//返回数组最小数的位置(第一个)
function findInMin(arr,start){
 	var iMin = arr[start];
 	var iMinIndex=start;
 	for(var i=start; i<arr.length; i++){
 		if(iMin > arr[i]){
 			iMin=arr[i];
 			iMinIndex = i;
 		}
 	}
 	return iMinIndex;
}
//end
//sort
//arr.sort(function(a,b){
	return a-b;//比较函数,加上最好.不加有时候会失灵
})
//end加 比较函数			
			
//倒叙函数
function dao(arr){
	return arr.reverse();
}
//end			
//首字母大写 de 字符串
function toUpper(str){
	var arr1 = [];//用来存放我们转换完后后的单词;
	//第一步：先把单词拿出来;
	var arr = str.split(' ');//welcome,to,china
	for(var i = 0; i < arr.length; i++){
		//第二步：每个单词的首字母转大写;
		var a = arr[i].charAt(0).toUpperCase();
		//第三步：从第一位开始切割每个单词，
		var b = arr[i].substring(1);
		//第四步：切完之后再拼接起来;
		var c = a + b;//Welcome,To,Chian
		//第五步：把拼接完成的单词放入一个新的数组;
		arr1.push(c);
	}
	return arr1.join(' ');//可以换别的分隔符
}
//end
//判断是不是一个数字
function testNumber(){
				for(var i=0; i<arguments.length; i++){
					if(typeof arguments[i] != 'number'){
						return false;
					}
				}
				return true;
			}
//end 
//把字符串变成json
function str2json(str){
	var arr = str.split('&');//不一定每次都是'&';
	var json = {};
	for(var i=0; i<arr.length; i++){
		var arr2 = arr[i].split('=');
		json[arr2[0]] = arr2[1];
	}
	return json;
}
//end 
//json转字符串
function json2str(json){
	var arr = [];
	for(var name in json){
		arr.push(name + '=' + json[name]);
	}
	arr.join('&');//用'&'拼接了一下
	return arr;
}
//end
//设置样式
function setStyle(obj,json){
	for(var i in json){
		obj.style[i]=json[i];
	}
}
//end
//设置样式加强版
 function setStyle(){
        var obj=arguments[0];
        if(arguments.length==3){
            var name=arguments[1];
            var value=arguments[2];
            obj.style[name]=value;
        }
        else{
           var json=arguments[1];
           for(var name in json){
               obj.style[name]=json[name];
          }
    }
 }
 //end
//判断浏览器
if(window.navigator.userAgent.indexOf('MSIE 6.0')!=-1){
	alert('ie');
}
if(window.navigator.userAgent.indexOf('Chrome')!=-1){
	alert('chrome');
}
//end
//浏览器信息
alert(window.navigator.userAgent);
//end

//事件绑定 
function addEvent(obj,sEv,fn){          //obj对象,sev是事件,fn是函数
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);  	//兼容ie9+ 谷歌 ff
	}else{
		obj.attachEvent('on'+sEv,fn);	// 兼容ie8--
		
	}
}
//end
//解除事件绑定
function removeEvent(obj,sEv,fn){
	if(obj.removeEventListener){
		obj.removeEventListener(sEv,fn,false);	
	}else{
		obj.detachEvent('on'+sEv,fn);	
	}
}
//end

//DOMReady(fn);
function DOMReady(fn){
	if(document.addEventListener){
		document.addEventListener('DOMContentLoaded',function(){//通过事件绑定添加DOMContentLoaded方法;
			fn && fn();//执行函数;
		},false);
	}else{
		document.attachEvent('onreadystatechange',function(){//通过事件绑定添加onreadystatechange
			//如果资源加载状态为complete,代表资源加载完成;
			if(document.readyState == 'complete'){
				fn && fn();
			}
		});
	}
}
DOMReady(function(){
	var oBox = document.getElementById('box');
	oBox.onclick = function(){
		alert('1');	
	}
});
//end;
//选项卡增强版,不同样式用
	function tab1(id,id1,ck){
		var ovideo_nav = document.getElementById(id);
	    var oLi = ovideo_nav.getElementsByTagName('li');
	    var ovideo1_box = document.getElementById(id1);
	    var oDiv = ovideo1_box.getElementsByTagName('div');
	    
	    for(var i=0; i<oLi.length; i++){
	    	(function(a){
	    		oLi[i].onclick=function(){
	    			for(var i=0; i<oLi.length; i++){
	    				oLi[i].className='';
	    				oDiv[i].style.display='none';
	    			}
	    			if(ck){
	    				this.className = ck;
	    			}else{
	    			    this.className ='hot_active';
	    			}
	    			oDiv[a].style.display='block';
	    		}
	    	})(i)
	    }
	}
//end

