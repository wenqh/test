 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("kt707up6z811h101o9eoi1f39qpzrv103102a78db90bzu" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}






var lastBet = null;
var times = 1;
var ya = null;
var lastBei = 1;
var dyh = {0:5,1:7,2:9,3:6,4:8,5:0,6:3,7:1,8:4,9:2};
function main() {
 var lastIssue = jQuery('.cell').eq(2).text()
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var lastCode = jQuery('.cell').eq(3).text()

 console.log('上期' + lastIssue + '号码：' + lastCode)

var code = lastCode.split("")[4]

if(ya == null || lastCode.indexOf(ya) > -1) {
    times=1
    console.log("中奖")
} else {
    if(times >= 128) {
       times = 1
    } else {
        times*=2
    }
    console.log("没中")
}


if(times === 1) {
        ya = dyh[code]
    } else if(times === 8) {
      ya = dyh[code]
    }

    console.log("押" + ya + ", " + (times*8) + "倍")


    jQuery('.ball.cde-numberv')[ya].click();
 
 for(var i=0; i<times*8-1; i++)  {
   console.log("+倍数")
    jQuery('#otc-times-add').click()
}
var timeout = Math.floor(Math.random() * 10000);
setTimeout(function() {
    jQuery('#bet_kuaijie')[0].click()
 }, 8000+timeout)


setTimeout(function() {
var sub = jQuery('#cde_bet_times').val()
 for(var i=0; i<sub-1; i++)  {
   console.log("-倍数")
    jQuery('#otc-times-sub').click()
  }
 }, 10000+timeout)


lastBet = lastIssue
}

setInterval(main, 1000);
