 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("91bv109eb56x89633f702b9fbng9" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}

var lastBet = null;
var times = 1;
var dyh = ['36','36','36','36','36'];
var t = 0;
var ya = dyh[t++];
function main() {
 var lastIssue = $('#lastissue').text()
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var lastCode = $('#lastdigit li').text()
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
   $('#common-single-line-panel a')[i].click();
    }

 }
 
 for(var i=0; i<times*5-1; i++)  {
   console.log("+倍数")
   $('#plus-multiple').click()
}

setTimeout(function() {
    $('#bet-confirm-fast').click()
 }, 1000)



setTimeout(function() {
 for(var i=0; i<500; i++)  {
   console.log("-倍数")
    $('#minus-multiple').click()
  }
 }, 2000)


lastBet = lastIssue
}

setInterval(main, 1000);
