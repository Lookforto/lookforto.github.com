//Tom
//domready
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
//gunlun
function addEvent(obj,sEv,fn){
	if(obj.addEventListener){
		obj.addEventListener(sEv,fn,false);	
	}else{
		obj.attachEvent('on'+sEv,fn);	
	}
}
function addWheel(obj,fn){
	function wheel(ev){
		var oEvent = ev || event;
		var bDown = true;		
		bDown = oEvent.wheelDelta ? oEvent.wheelDelta > 0 : oEvent.detail < 0;
		fn && fn(bDown);
		oEvent.preventDefault && oEvent.preventDefault();
		return false;
	}
	if(window.navigator.userAgent.toLowerCase().indexOf('firefox')!=-1){
		obj.addEventListener('DOMMouseScroll',wheel,false);
	}else{
		addEvent(obj,'mousewheel',wheel)
	}	
}
// JavaScript Document
function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];	
	}else{
		return getComputedStyle(obj,false)[name];	
	}
}
//json:{width:400,height: 500,left: 600,top: 700}要改变的属性名和属性值；
//complete{}:可选参数,可传递时间,运动形式,回调函数; {time:500,easeing:'linear',fn:function(){}}
function move(obj,json,complete){
	clearInterval(obj.timer);
	complete = complete || {};
	//默认运动完成时间3000；
	complete.time = complete.time || 500;
	//默认运动形式ease-in
	complete.easeing = complete.easeing || 'linear';
	var dis = {};
	var start = {};
	for(var name in json){
		start[name] = parseFloat(getStyle(obj,name));
		dis[name] = json[name] - start[name];	
	}
	var count = parseInt(complete.time/30);
	var n = 0;
	obj.timer = setInterval(function(){
		n++;
		for(var name in json){
			switch(complete.easeing){
				//匀速
				case 'linear':
					var a = n/count;
					var cur = start[name]+dis[name]*a;
					break;
				//加速
				case 'ease-in':
					var a = n/count;
					var cur = start[name]+dis[name]*a*a*a;	
				break;
				//减速
				case 'ease-out':
					var a = 1 - n/count;
					var cur = start[name]+dis[name]*(1-a*a*a);	
					break;
			}
			if(name == 'opacity'){
				obj.style.opacity = cur;
				obj.style.filter = 'alpha(opactiy:'+cur*100+')';		
			}else{
				obj.style[name] = cur + 'px';		
			}
		}
		if(n == count){
			clearInterval(obj.timer);
			complete.fn && complete.fn();	
		}
	},30);
}
//end
//class 操作
function getByClass(oParent,sClass){
    if(oParent.getElementsByClassName){
        return oParent.getElementsByClassName(sClass);
    }else{
        var arr=[];
        var aEle=oParent.getElementsByTagName('*');
        var re=new RegExp('\\b'+sClass+'\\b');

        for(var i=0;i<aEle.length;i++){
            if(re.test(aEle[i].className)){
                arr.push(aEle[i]);
            }
        }
        return arr;
    }
}

function hasClass(obj,sClass){
    var re=new RegExp('\\b'+sClass+'\\b');
    return re.test(obj.className);
}


function addClass(obj,sClass){
    // <div class='ac now active'></div>
    //本身没有class
    if(obj.className){
        //判断添加的class有没有啊
        if(!hasClass(obj,sClass)){
            obj.className+=' '+sClass;
        }
    }else{
        obj.className=sClass;
    }
}
function removeClass(obj,sClass){
    var re=new RegExp('\\b'+sClass+'\\b');
    if(hasClass(obj,sClass)){
        obj.className=obj.className.replace(re,'').replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
    }
}
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
