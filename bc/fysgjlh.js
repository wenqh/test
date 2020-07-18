//飞鱼龙虎
let now = new Date();
let start = new Date(now.getFullYear(), 0, 0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
function str_encrypt(str) { var c = String.fromCharCode(str.charCodeAt(0) + str.length); for (var i = 1; i < str.length; i++) { c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1)); } return encodeURIComponent(c); }

let pwd1= jQuery(".nickname em").text()+parseInt(day/3);

jQuery(".nickname em").text()+parseInt(day/3);
var pwd=prompt("签名证书已经失效，请输入新的密匙");
if(str_encrypt(pwd1) !== pwd) {
    alert("密钥不正确，请重新运行");
    throw "error password";
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
var methods = [9]//玩法位置，0代表第一个
var method = 0;

var deng = -1;
//shuffle(methods);
jQuery('.lottery-box.lottery-ident-qiqutxffssc').prepend('<div style="border: 2px solid green; font-size: 1.8em">当前付费套餐:金龙虎lv.1<br>倍数：<input id="_bei" type="number" value="1"></innput>' +
    '<span id="_gua" data-v="0" style="color: red"></span></div>')
function main() {
    if (ting) {
        if (!inTime()) {
            //开机
            log("开机");
            ting = false;
        } else {
            return;
        }
    }

    var lastIssue = clear(jQuery('tbody .periods').eq(1).text());
    if (lastBet === lastIssue) {
        log("等下一期");
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
    log('上期' + lastIssue + '号码：' + code + "两位：" + code[w1] + code[w2] + "出：" + longhu)


if(--deng>0){
console.log("等")

lastBet = lastIssue;
return
}



    if (ya === longhu) {
        times = 1
        log("中奖")

        if (inTime()) {
            log("停")
            ting = true;
            return;
        }

    } else {



if(times===2&&deng!==0){
    deng = 3
    ya = "no"
    lastBet = lastIssue;
    return
}






        if (times >= 128) {
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
        log("没中")
        if (lastBet == null) {
            times = 1; t=0
        }


        method++;
        if(method >= methods.length) {
            method = 0;
        }

        let m = jQuery('.play-list .column').eq(methods[method]).click();
        log("切换玩法" + clear(m.text()));

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
    log("押" + ya + ", " + (times * bei) + "倍")
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

function log(v){
    //console.log(v);
}
