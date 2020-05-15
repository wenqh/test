var pwd = prompt("签名证书已经失效，请输入新的密匙");
if ("gyRp9YViiMR8wYm4j0sGfEFLdgIMnvaA" !== pwd) {
    alert("密钥不正确，请重新运行");
    throw "error password"
}
var lastBet = null; 
 var times = 1; 
 var dyh = ['05', '17', '29', '48', '36']; 
 var t = 0; 
 var ya = 0 
 //dyh[t++]; 
 var wait = 0; 
 var jiaoti = true; 
 function main() { 
 var lastIssue = $('.lottery-open-list .issue:first').text();
 if (lastBet === lastIssue) { 
 console.log("等下一期"); 
 return; 
 } 
   var code = $('.lottery-open-list .code:first').text().split(",").join("")
 if (code == '?????') { 
 console.log('等待开奖') 
 return; 
 } 
   console.log('上期' + lastIssue + '号码：' + code) 
   var hots2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
 for (var j = 0; j < 2; j++) { 
 var hot2 = $('.lottery-open-list .code').eq(j).text().split(",").join("")
 for (var k = 0; k < 5; k++) { 
 hots2[hot2[k]] += 1 
 } 
 } 
   var rehao = '' 
 for (var j = 10; j >= 0; j--) { 
 for (var n in hots2) { 
 if (hots2[n] == j) { 
 rehao += n 
 } 
 } 
 if (rehao.length > 0) { 
 break; 
 } 
 } 


var hots3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0] 
 for (var j = 0; j < 3; j++) { 
 var hot3 = $('.lottery-open-list .code').eq(j).text().split(",").join("")
 for (var k = 0; k < 5; k++) { 
 hots3[hot3[k]] += 1 
 } 
 } 

 var lenghao = "" 
 for (var j = 1; j < 10; j++) { 
 for (var n in hots3) { 
 if (hots3[n] == j) { 
 lenghao += n 
 } 
 } 
 if (lenghao.length > 0) { 
 break; 
 } 
 } 
   console.log("五星最热号" + rehao + ",最冷号" + lenghao) 
 rehao = rehao[Math.floor(Math.random() * rehao.length)]; 
 lenghao = lenghao[Math.floor(Math.random() * lenghao.length)] 
 

 

//code = code[3] + code[4] 
 /*if(code[0] == code[1]){ 
 wait = 2 
 console.log("对子等几把") 
 lastBet = lastIssue 
 return; 
 } 
   if(--wait>0) { 
 console.log("不压") 
 lastBet = lastIssue 
 return; 
 }*/ 
   if (code.indexOf(ya) != -1 /* && wait != 0*/ 
 ) { 
 times = 1 
 console.log("中奖") 
 } else { 
 if (times >= 128) { 
 times = 1 
 } else { 
 times *= 2 
 } 
 console.log("没中") 
   if (lastBet == null) { 
 times = 1 
 } 
   if (jiaoti) { 
 ya = rehao; 
 console.log('压热') 
 } else { 
 ya = lenghao; 
 console.log('压冷') 
 } 
 jiaoti = !jiaoti 
 } 
   if (times === 1) {//ya = dyh[code] 
 } else { 
 if (t > 4) { 
 t = 0 
 } 
 //ya = dyh[t++]  
 } 
   console.log("押" + ya + ", " + (times * 8) + "倍") 
   $('.balls .item')[ya].click();
   $('.multiple input')[0].value = times*8;
  $('[data-command=quick-bet]')[0].click()
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
 result += arr.splice(ran, 1)[0] 
   } 
 return result 
   }
