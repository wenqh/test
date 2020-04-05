 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("157b99eb68a89688f3908b9313bd6c8eb0" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}



var lastBet = null;
var times = 1;
var dyh = ['48','05','29','17','36'];
var t = 0;
var ya = dyh[t++];
function main() {
 var lastIssue = $('.lottery-open-list .issue:first').text();
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var lastCode = $('.lottery-open-list .code:first').text()

 console.log('上期' + lastIssue + '号码：' + lastCode)

var code = [lastCode.split(",")[3], lastCode.split(",")[4]]

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
        //ya = dyh[0]
        ya = random()
    } else {
    if(t >4){
        t=0
     }
      //ya = dyh[t++]
      ya = random()
    }

    console.log("不押" + ya + ", " + (times*8) + "倍")
 
 for(var i = 0; i<10; i++) {
  if(ya.indexOf(i+"") == -1) {
   $('.balls .item')[i].click();
    }

 }
 
 
 $('.multiple input')[0].value = (times*8);
 $('[data-command=quick-bet]')[0].click()



lastBet = lastIssue
}

setInterval(main, 1000);


function random() {
   var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = [];

var ranNum = 2;

for (var i = 0; i < ranNum; i++) {

var ran = Math.floor(Math.random() * arr.length);

result.push(arr.splice(ran, 1)[0]);

};
return ""+result[0] + result[1];

}
