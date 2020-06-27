//虎龙顺
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
var bet = '龙';
var methods = ['wq', 'qb', 'ws', 'wg','qb','qs','qg','bs','bg','wg']
var method = 0;
$('.main-box').prepend('<div style="float: right; border: 2px solid green; font-size: 1.8em">倍数：<input id="_bei" type="number" value="1"></innput>' +
    '<span id="_gua" data-v="0" style="color: red"></span></div>')
function main() {
    /*if (ting) {
        if (!inTime()) {
            //开机
            console.log("开机");
            ting = false;
        } else {
            return;
        }
    }*/

    var lastIssue = $('.lottery-open-list .issue:first').text();
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }
    var code = $('.lottery-open-list .code:first').text().split(",").join("")

    let play = $('.play-list .column.selected').text().split('');
    let w1 = plays[play[0]]; let w2 = plays[play[1]]
    let longhu = code[w1] == code[w2] ? '和' : (code[w1] > code[w2] ? '龙' : '虎');
    console.log('上期' + lastIssue + '号码：' + code + "两位：" + code[w1] + code[w2] + "出：" + longhu)

    if (ya === longhu) {
        times = 1
        console.log("中奖")

        /*if (inTime()) {
            console.log("停")
            ting = true;
            return;
        }*/

    } else {
        if (times >= 32) {
            times = 1; t=0;
            $('#_gua').attr('data-v', parseInt($('#_gua').attr('data-v')) + 1)
            $('#_gua').text($('#_gua').attr('data-v') + ' 轮车')
        } else {
            times *= 2;
            t++
            /*if(t >= betl.length) {
                t = 0;
            }*/
        }
        console.log("没中")
        if (lastBet == null) {
            times = 1; t=0
        }


        method++;
        if(method >= methods.length) {
            method = 0;
            bet = bet === '龙' ? '虎' : '龙';
        }
        let m = $('.play-list [data-method=lh' + methods[method] + ']').click();
        console.log("切换玩法" + m.text());

        //龙多压虎，虎多压龙
        let hotL = 0; let hotH = 0;
        for (let j = 0; j < 20; j++) {
            let hot20 = $('.lottery-open-list .code').eq(j).text().split(",").join("");
            let w1_ = plays[m.text()[0]]; let w2_ = plays[m.text()[1]]
            let hotLh = hot20[w1_] == hot20[w2_] ? '和' : (hot20[w1_] > hot20[w2_] ? '龙' : '虎');
            if (hotLh === "龙") {
                hotL++;
                ya = "龙";
                break;
            } else if (hotLh === "虎") {
                hotH++;
                ya = "虎";
                break;
            }
        }
    }

    //ya = bet;
    let bei = $('#_bei').val()

    $('.balls [data-val=' + ya + ']').click();
    console.log("押" + ya + ", " + (times * bei) + "倍")
    $('.multiple input')[0].value = times * bei;
    $('[data-command=quick-bet]')[0].click()
    lastBet = lastIssue
}
setInterval(main, 1000);

function isValid(date, h1, m1, h2, m2) {
    var h = date.getHours();
    var m = date.getMinutes();
    return (h1 < h || h1 == h && m1 <= m) && (h < h2 || h == h2 && m <= m2);
}
function inTime() {
    return isValid(new Date(), 11, 0, 13, 0) || isValid(new Date(), 17, 0, 19, 0) || isValid(new Date(), 0, 0, 6, 0)
}
