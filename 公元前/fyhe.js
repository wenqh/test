//飞鱼变态和
let now = new Date();
let start = new Date(now.getFullYear(),0,0);
let diff = now - start;
let oneDay = 1000 * 60 * 60 * 24;
let day = Math.floor(diff / oneDay);
function str_encrypt(str) {
    var c = String.fromCharCode(str.charCodeAt(0) + str.length);
    for (var i = 1; i < str.length; i++) {
        c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
    }
    return encodeURIComponent(c);
}

let pwd1 = jQuery(".nickname em").text() + parseInt(day / 3);

jQuery(".nickname em").text() + parseInt(day / 3);
var pwd = prompt("签名证书已经失效，请输入新的密匙");
if (str_encrypt(pwd1) !== pwd) {
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
var plays = {
    万: 0,
    千: 1,
    百: 2,
    十: 3,
    个: 4
}
var bet = null;
var methods = [0,1,4,7,8,9]
//玩法位置，0代表第一个
var method = 0;

var deng = -1;
//shuffle(methods);
jQuery('.lottery-box.lottery-ident-qiqutxffssc').prepend('<div style="border: 2px solid green; font-size: 1.8em">当前付费套餐:金龙虎lv.1<br>倍数：<input id="_bei" type="number" value="1"></innput>' + '<span id="_gua" data-v="0" style="color: red"></span></div>')
function main() {

    var lastIssue = clear(jQuery('tbody .periods').eq(1).text());
    if (lastBet === lastIssue) {
        log("等下一期");
        return;
    }
    var code = clear(jQuery('.lishi-list-box').eq(0).text());

    let he = false;
    let wz = -1;
    ot:
    for (let i=0; i<10;i++) {
        for (let j=i+1; j<10;j++) {
           wz++;
           if (code[i] === code[j]&&methods.includes(wz)) {
            console.log("有和" + i)
            he = true;
            break ot;
          }
        }
    }

    if (he) {
        times = 1
        log("中奖")
    } else {
        if (times >= 128) {
            times = 1;
            t = 0;
            jQuery('#_gua').attr('data-v', parseInt(jQuery('#_gua').attr('data-v')) + 1)
            jQuery('#_gua').text(jQuery('#_gua').attr('data-v') + ' 轮车')
        } else {
            times *= 2;
        }
        log("没中")
        if (lastBet == null) {
            times = 1;
            t = 0
        }
    }

    let bei = jQuery('#_bei').val()

    for (let m of methods) {
        setTimeout(function(mm) {
            jQuery('.play-list .column').eq(m).click();
            jQuery('.balls span')[2].click();
            log("押" + (times * bei) + "倍")
            setKeywordText(times * bei);
            setTimeout(function() {
                jQuery('.btnx.btn-liji').click();

                 setTimeout(function() {
				jQuery('.el-message-box__wrapper .el-message-box__btns button').eq(1).click()
                 }, 300);
            }, 800);

        }, 2000*m, m)
    }

    lastBet = lastIssue;
}
setInterval(main, 1000);

function setKeywordText(text) {
    var el = jQuery('.el-input.el-input--small input')[0];
    el.value = text;
    var evt = document.createEvent("Events");
    evt.initEvent("change", true, true);
    el.dispatchEvent(evt);
}
function clear(t) {
    return t.split(' ').join('').split("\n").join('');
}
function log(v){
}
