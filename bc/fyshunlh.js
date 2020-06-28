





//循环虎龙


var pwd=prompt("签名证书已经失效，请输入新的密匙"); 
 if("8v267u678iuhyi6rf670dl01ib7j3nbr9io6kiz" !== pwd) { 
 alert("密钥不正确，请重新运行"); 
 //throw "error password" 
 } 


var lastBet = null;
var times = 1;
var t = 0;
var ya = ''
var wait = 0;
var ting = false;
var jihua = null;
var plays = {万:0, 千:1, 百:2, 十:3, 个:4}
var betl = ['龙','龙','虎','虎']
var beth = ['虎','虎','龙','龙']
var bet = null;
var methods = [3, 7, 3, 0, 5, 2, 4,1,8]//玩法位置，0代表第一个
var method = 0;
shuffle(methods);
jQuery('.lottery-box.lottery-ident-qiqutxffssc').prepend('<div style="border: 2px solid green; font-size: 1.8em">倍数：<input id="_bei" type="number" value="1"></innput>' +
    '<span id="_gua" data-v="0" style="color: red"></span></div>')
function main() {
    if (ting) {
        if (!inTime()) {
            //开机
            console.log("开机");
            ting = false;
        } else {
            return;
        }
    }

    var lastIssue = clear(jQuery('tbody .periods').eq(1).text());
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }
    var code = clear(jQuery('.lishi-list-box').eq(0).text());

    /*let issueTime = Number($('.ss.textAuto').text());
    if (issueTime >= Math.floor(Math.random()*6+3)) {
        console.log('等到最后再压')
        return;
    }*/

    let play = clear(jQuery('.play-list .column.selected').text());
    let w1 = plays[play[0]]; let w2 = plays[play[1]]
    let longhu = code[w1] === code[w2] ? '和' : (code[w1] > code[w2] ? '龙' : '虎');
    console.log('上期' + lastIssue + '号码：' + code + "两位：" + code[w1] + code[w2] + "出：" + longhu)

    if (ya === longhu) {
        times = 1
        console.log("中奖")

        if (inTime()) {
            console.log("停")
            ting = true;
            return;
        }

    } else {
        if (times >= 32) {
            times = 1; t=0;
            jQuery('#_gua').attr('data-v', parseInt(jQuery('#_gua').attr('data-v')) + 1)
            jQuery('#_gua').text(jQuery('#_gua').attr('data-v') + ' 轮车')
        } else {
            times *= 2;
            t++
            if(t >= betl.length) {
                t = 0;
            }
        }
        console.log("没中")
        if (lastBet == null) {
            times = 1; t=0
        }


        method++;
        if(method >= methods.length) {
            method = 0;
        }

        let m = jQuery('.play-list .column').eq(methods[method]).click();
        console.log("切换玩法" + clear(m.text()));

let i1=plays[clear(m.text())[0]];
let i2=plays[clear(m.text())[1]];

for(let k = 0; k<10; k++){
     let _code = clear(jQuery('.lishi-list-box').eq(k).text());

     if(_code[i1] !== _code[i2]){
          ya = _code[i1] > _code[i2] ? '龙' : '虎';
          break;
     }
}


    }

    
    let bei = jQuery('#_bei').val()

    jQuery('.balls span')[ya === '龙' ? 0 : 1].click();
    console.log("押" + ya + ", " + (times * bei) + "倍")
    setKeywordText(times * bei);
    setTimeout(function() {
        jQuery('.btnx.btn-liji').click();
    }, 1000);
    lastBet = lastIssue;
}
setInterval(main, 1000);

function isValid(date, h1, m1, h2, m2) {
    var h = date.getHours();
    var m = date.getMinutes();
    return (h1 < h || h1 === h && m1 <= m) && (h < h2 || h === h2 && m <= m2);
}
function inTime() {
    //return isValid(new Date(), 0, 0, 1, 0) || isValid(new Date(), 4, 50, 5, 20) || isValid(new Date(), 12, 0, 13, 0)|| isValid(new Date(), 16, 0, 16, 16);
    return false;
}
function setKeywordText(text) {
    var el = jQuery('.el-input.el-input--small input')[0];
    el.value = text; var evt = document.createEvent("Events");
    evt.initEvent("change", true, true);
    el.dispatchEvent(evt);
}
function clear(t) {
    return t.split(' ').join('').split("\n").join('');
}


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
