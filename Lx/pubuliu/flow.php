<?php
/*
	Author:strive
	Date:2014-5-12
	Dependence:http://www.wookmark.com/api/json/popular?page=1
	How to Use:
		ajax: ajax用的接口
			flow.php?page=1
			return {error:0, msg:[{},{},{}]}
			
		jsonp: jsonp用的接口
			flow.php?page=1&cb=xxx
*/

$page=@isset($_GET['page'])?$_GET['page']:1;
$cb=@$_GET['cb'];
$url="http://www.wookmark.com/api/json/popular?page={$page}";

$content=file_get_contents($url);
//$content = iconv('gbk', 'utf-8', $content); 转码 乱码时用

if(empty($content)){
	echo "{error:1, msg:'后台出错了'}";	
}else{
	if(!$cb){
		echo "{error:0, msg:{$content}}";
	}else{
		echo $cb.'('.$content.')';	
	}	
}
?>