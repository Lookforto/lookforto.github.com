window.onload=function(){
	var oUl = document.getElementById('hd_r');
	var aLi =  oUl.getElementsByTagName('li');
	var oVn = document.getElementById('vn');
	var aUl = oVn.getElementsByTagName('ul');
	
	
	function show(obj,obj1){
		 obj.onmouseenter=obj1.onmouseenter=function(){
	      	obj.style.display="block";
		};
		obj.onmouseleave=obj1.onmouseleave=function(){
	       	obj.style.display="none";
		};
	}
	show(aUl[2],aLi[2]);
	show(aUl[1],aLi[1]);
	show(aUl[3],aLi[3]);
	
	var oChar = document.getElementById('char');
	var aben = oChar.getElementsByTagName('input');
	
	aben[0].onclick=function(){
		 if(aben[0].checked==true){
		for(var i=1;i<aben.length-1;i++){
			aben[i].checked=true;
		}
		}else{
				for(var i=1;i<aben.length-1;i++){
				  aben[i].checked=false;
			   }
			}
	};
	
	//textarea 
	var oTxc = document.getElementById('texv');
	var oTpc = document.getElementById('tipc');
	var oActi = document.getElementById('acti');
	var oSps = document.getElementById('sps');
	var oPint = document.getElementById('pint');
	var oTsc = document.getElementById('tsc');  
	
	var cb = 0;
	//??
	document.onkeydown=function(ev){
		var oEvent = ev || event;
	    cb=  oTxc.value.length;
	    oSps.innerHTML=cb;
	   if(cb>20){ oTxc.readonly="readonly"; document.onkeydown=null;}
	};
	
	 oActi.onclick=function(){
	 	if(cb < 2){
		   oTpc.style.display='block';
		   oActi.href="javascript:";
	     }else{
	     	 oTpc.style.display='none';
		     oActi.href="status.html";
		     oTxc.value='';
	     }
	 };
	//提示退款余额
	oTsc.onfocus=function(){
		oPint.style.display="block";
	}
	oTsc.onblur=function(){
		oPint.style.display="none";
	}
	
//onload end	
};





