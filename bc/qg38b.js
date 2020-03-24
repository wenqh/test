 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("8b44eb32a49644f3908b9313bd6c8eb0" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}

var lastBet = null;
var times = 1;
var ya = null;
var lastBei = 1;
var dyh = {0:5,1:7,2:9,3:6,4:8,5:0,6:3,7:1,8:4,9:2};
function main() {
 var lastIssue = $('.lottery-open-list .issue:first').text();
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var lastCode = $('.lottery-open-list .code:first').text()

 console.log('上期' + lastIssue + '号码：' + lastCode)

var code = lastCode.split(",")[4]
//对应号
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

//if(times === 2 || times === 8 || times === 32 || times === 128) {
if(times === 1) {
        ya = dyh[code]
    } else {
     
    }

    console.log("押" + ya + ", " + (times*38) + "倍")
 $('.balls .item')[ya].click();
 $('.multiple input')[0].value = (times*38);
 $('[data-command=quick-bet]')[0].click()


lastBet = lastIssue
}

setInterval(main, 1000);
