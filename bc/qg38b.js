 var pwd=prompt("签名证书已经失效，请输入新的密匙");
if("2jmjufb119eb68a89688f3908b9313bd6c8ts" !== pwd) {
  alert("密钥不正确，请重新运行");
throw "error password"
}




var lastBet = null;
var times = 1;
var dyh = ['05','17','29','48','36'];
var t = 0;
var ya = dyh[t++];
var wait = 0;
function main() {
 var lastIssue = jQuery('.cell').eq(2).text()
 if(lastBet === lastIssue) {
  console.log("等下一期");
  return;
 }

var code = jQuery('.cell').eq(3).text()
if(code == '?????') {
   console.log('等待开奖')
   return;
 }

 console.log('上期' + lastIssue + '号码：' + code)


var leng = random()
for(var j = 0; j<5; j++) {
   var hot = jQuery('.cell').eq(j*2+3).text()
   leng=leng.replace(hot[3],"")
   leng=leng.replace(hot[4],"")
   
}
console.log("冷号"+leng)

code=code[3]+code[4]
if(code[0] == code[1]){
  wait = 1
  console.log("对子等几把")
  lastBet = lastIssue
  return;
}

if(--wait>0) {
   console.log("不压")
  lastBet = lastIssue
  return;
}



if((code[0] !== code[1] &&
 ya.indexOf(code[0]) == -1 && ya.indexOf(code[1]) == -1) && wait != 0) {
    times=1
    console.log("中奖")
} else {
    if(times >= 81) {
       times = 1
    } else {
        times*=3
    }
    console.log("没中")

   
 var _leng = leng+random()
 ya = _leng[0] == _leng[1] ? _leng[0]+_leng[2] : _leng[0]+_leng[1]



    if(lastBet == null) {
     times = 1
    }

}




if(times === 1) {
        //ya = dyh[code]
    } else {
    if(t >4){
        t=0
     }
      //ya = dyh[t++] 
    }

    console.log("不押" + ya + ", " + (times*3) + "倍")
 
 for(var i = 0; i<10; i++) {
  if(ya.indexOf(i+"") == -1) {

setTimeout(function(j) {
    jQuery('.ball.cde-numberv')[j].click();
 }, i*500, i)
    }

 }
 
 for(var i=0; i<times*3-1; i++)  {
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



function random() {
   var arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var result = "";

var ranNum = 10;

for (var i = 0; i < ranNum; i++) {

var ran = Math.floor(Math.random() * arr.length);

//result.push(arr.splice(ran, 1)[0]);
result+=arr.splice(ran, 1)[0]

};
return result

}
