 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("c0a2m010lq72r6c0d1o01fshl" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}


var lastBet = null;
var times = 1;
var dyh = ['16','48','05','39','27'];
var t = 0;
var ya = dyh[t++];
function main() {
 var lastIssue = jQuery('.cell').eq(2).text()
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var lastCode = jQuery('.cell').eq(3).text()
if(lastCode == '?????') {
   console.log('等待开奖')
   return;
 }

 console.log('上期' + lastIssue + '号码：' + lastCode)

var code = [lastCode[0], lastCode[1]]

if(lastBet == null || (code[0] !== code[1] &&
 ya.indexOf(code[0]) == -1 && ya.indexOf(code[1]) == -1)) {
    times=1
    console.log("中奖")
} else {
    if(times >= 81) {
       times = 1
    } else {
        times*=3
    }
    console.log("没中")
}


if(times === 1) {
        //ya = dyh[code]
    } else {
    if(t >4){
        t=0
     }
      ya = dyh[t++]
    }

    console.log("不押" + ya + ", " + (times*5) + "倍")
 
 for(var i = 0; i<10; i++) {
  if(ya.indexOf(i+"") == -1) {

setTimeout(function(j) {
    jQuery('.ball.cde-numberv')[j].click();
 }, i*500, i)
    }

 }
 
 for(var i=0; i<times*5-1; i++)  {
   console.log("+倍数")
    jQuery('#otc-times-add').click()
}

setTimeout(function() {
    jQuery('#bet_kuaijie')[0].click()
 }, 8000)


setTimeout(function() {
var sub = jQuery('#cde_bet_times').val()
 for(var i=0; i<sub-1; i++)  {
   console.log("-倍数")
    jQuery('#otc-times-sub').click()
  }
 }, 10000)


lastBet = lastIssue
}

setInterval(main, 1000);
