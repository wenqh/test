var pwd = prompt("签名证书已经失效，请输入新的密匙");
if ("8v2t5kl5h6gt02i3o0n10s1kh0dl01ib7j3nbr5v26kiz" !== pwd) {//alert("密钥不正确，请重新运行");
 throw "error password"
}

//循环虎龙
var lastBet = null;
var times = 1;
var t = 0;
var ya = ''
var wait = 0;
var ting = false;
var jihua = null;
var plays = {万:0, 千:1, 百:2, 十:3, 个:4}
var betl = ['龙','龙','龙','龙','虎','虎','虎','龙','龙','虎','虎','龙','虎','龙','虎','龙','龙','虎','虎','龙','龙','龙','虎','虎','虎','虎','龙','虎','龙','虎','龙','龙','龙','龙','虎','虎','虎','虎','虎','龙','虎','虎','龙','龙','龙','虎','龙','龙','虎','虎','龙','虎','虎','龙','虎','龙','虎','龙','龙','虎','龙','龙','虎','龙','龙','虎','虎','龙','虎','龙','虎','龙','龙','虎','虎','龙','龙','龙','虎','虎','虎','虎','龙','龙','虎','龙','虎','虎','龙','龙','虎','龙']
var beth = ['龙','龙','龙','龙','虎','虎','虎','龙','龙','虎','虎','龙','虎','龙','虎','龙','龙','虎','虎','龙','龙','龙','虎','虎','虎','虎','龙','虎','龙','虎','龙','龙','龙','龙','虎','虎','虎','虎','虎','龙','虎','虎','龙','龙','龙','虎','龙','龙','虎','虎','龙','虎','虎','龙','虎','龙','虎','龙','龙','虎','龙','龙','虎','龙','龙','虎','虎','龙','虎','龙','虎','龙','龙','虎','虎','龙','龙','龙','虎','虎','虎','虎','龙','龙','虎','龙','虎','虎','龙','龙','虎','龙']
var bet = null;
var methods = [3]//玩法位置，0代表第一个
var method = 0;
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



        if(times === 1){
            if(longhu === '龙') {
                bet = betl;console.log('切换龙牌形');
            } else if(longhu === '虎') {
                bet = beth;console.log('切换虎牌形');
            } else {
                ya = '';
                lastBet = null;
                return;
            }
        }
    }

    ya = bet[t];
    let bei = jQuery('#_bei').val()

    jQuery('.balls span')[ya === '龙' ? 0 : 1].click();
    console.log("押" + ya + ", " + (times * bei) + "倍" + ' 牌形'+bet+' 第' + (t+1) + '张牌')
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
    return isValid(new Date(), 0, 30, 0, 0) }
function setKeywordText(text) {
    var el = jQuery('.el-input.el-input--small input')[0];
    el.value = text; var evt = document.createEvent("Events");
    evt.initEvent("change", true, true);
    el.dispatchEvent(evt);
}
function clear(t) {
    return t.split(' ').join('').split("\n").join('');
}
