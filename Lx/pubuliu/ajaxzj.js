function json2url(json){
	json.t = Math.random();
	var arr = [];
	for(var name in json){
		arr.push(name+'='+encodeURIComponent(json[name]));
	}
	return arr.join('&');
} //把 json 转换成字符串
  //url,data,type,succ,error
function ajax(json){
	json = json||{};
	json.data = json.data||{};
	json.type = json.type||'GET';
	json.timeout = json.timeout||10000;
	if(!json.url){return;}
	//1.创建ajax对象
	if(window.XMLHttpRequest){
		var oAjax = new XMLHttpRequest();
	}else{
		//兼容ie6
		var oAjax = new ActiveXObject('Microsoft.XMLHTTP');
	}
	switch(json.type.toLowerCase()){
		case 'get':
		//2.建立连接
		oAjax.open('GET',json.url+'?'+json2url(json.data),true);
		//3.发送
		oAjax.send();
		break;
		case 'post':
		//2.建立连接
		oAjax.open('POST',json.url,true);
		//3.发送
		oAjax.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
		oAjax.send(json2url(json.data));
		break;
	}
	json.loading&&json.loading();
	clearTimeout(timer);
	var timer = setTimeout(function(){
		json.complete&&json.complete();
		json.error&&json.error('网络异常，请稍后重试');
		oAjax.onreadystatechange = null;
	},json.timeout);

	//4.接收  监控网络
	oAjax.onreadystatechange = function(){
		//网络状态
		if(oAjax.readyState == 4){
			//http状态 服务器状态
			if(oAjax.status>=200&&oAjax.status<300||oAjax.status==304){
				clearTimeout(timer);
				json.complete&&json.complete();
				json.succ&&json.succ(oAjax.responseText);

			}else{
				clearTimeout(timer);
				json.error&&json.error('网络异常，请稍后重试');
			}
		}
	};
}
