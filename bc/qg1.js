 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("92xf319eb56x89633f702b9fbng8" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}




 
var lastBet = null;
var times = 1;
var dyh = ['大','单','小','双'];
var clas = {'小':"small",'单':"single",'双':'double','大':'big'};

var t = 0;
var ya = dyh[0];
function main() {
 var lastIssue = $('.lottery-open-list .issue:first').text();
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var lastCode = $('.lottery-open-list .code:first').text()

 console.log('上期' + lastIssue + '号码：' + lastCode)

var code = lastCode.split(",")[4]
var kj = [code < 5 ? '小' : "大", code%2==0 ? '双' : "单"]
console.log("开奖:" + kj)

if(lastBet == null || kj[0] == ya || kj[1] == ya) {
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
        t = 0
        ya = dyh[t++]
    } else {
    if(t > 3){
        t=0
     }
      ya = dyh[t++]
    }

    console.log("押" + ya + ", " + (times*1) + "倍")
 
  $('.item[data-command=' + clas[ya] + ']')[4].click()

 $('.multiple input')[0].value = (times*1);
 $('[data-command=quick-bet]')[0].click()



lastBet = lastIssue
}

setInterval(main, 1000);
