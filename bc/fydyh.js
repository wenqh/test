//飞鱼五星对应号
if(typeof jQuery === 'undefined') {
    alert("请先运行插件");
    throw " "
}


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
    //throw "error password";
}





var lastBet = null;
var times = 1;
var dyh = {0:5,1:7,2:9,3:6,4:8,5:0,6:3,7:1,8:4,9:2};
var t = 0;
var ya = null;//dyh[t++];
var wait = 0;
var ting = false;

jQuery('.lottery-box.lottery-ident-qiqutxffssc').prepend('<div style="border: 2px solid green; font-size: 1.6em">当前付费套餐：五星<br><label for="_bei">倍数：</label><input id="_bei" style="font-size: 0.8em; width: 100px" type="number" value="1"/>' +
    '    <span id="_gua" data-v="0" style="color: red"></span>' +
    '    <div>💰盈利：<span id="_yingli" style="color: #2b982b"></span> 最高值：<span id="_maxYingli"></span></div>' +
    '    <div>💰低于：<input id="_tingMin" value="0" style="width: 100px;font-size: 0.8em"/>或高于<input id="_tingMax" value="9999999" style="width: 100px;font-size: 0.8em"/>时，停！</div>' +
    '    <span id="_ka" data-v="0" style="color: #0088cc"></span>' +
    '</div>');
console.log("%c发财", "background: red; color: yellow; font-size: large");
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


    var lastIssue = clear(jQuery('tbody .periods').eq(0).text())
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }

    if(lastBet != null && ya != null && parseInt(lastIssue.split('-')[1]) - parseInt(lastBet.split('-')[1]) !== 1) {
        times = 1;
        console.log('卡期了');
        jQuery('#_ka').text(jQuery('#_ka').text()+' 卡期'+lastIssue);
    }



    var code = clear(jQuery('.lishi-list-box').eq(0).text())
    if (code === '?????') {
        console.log('等待开奖')
        return;
    }
    console.log('上期' + lastIssue + '号码：' + code)


    if (ya !== null) {
        if (code.indexOf(ya) > -1) {
            times = 1;
            console.log("中奖");

            /*if (inTime()) {
                console.log("停")
                ting = true;
                return;
            }*/
        } else {
            if (times >= 243) {
                times = 1
                jQuery('#_gua').attr('data-v', parseInt(jQuery('#_gua').attr('data-v')) + 1)
                jQuery('#_gua').text(jQuery('#_gua').attr('data-v') + ' 轮车')
            } else {
                times *= 3
            }
            console.log("没中");
            /*t++;
            if (t >= dyh.length) {
                t = 0
            }*/
            /*if (lastBet == null) {
                times = 1; //t=0
            }*/
        }
    }




    let codeCounts = code.split('').reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
    let duizi = [];
    for (let i in codeCounts) {
        if (codeCounts[i] > 1) {
            duizi.push(i);
        }
    }
    if(duizi.length === 1) {
        duizi = duizi[0]
        console.log("有对子: " + duizi);
        ya = dyh[duizi];
    } else {
        console.log("没出对子不押");
        ya = null;
        lastBet = lastIssue;
        return;
    }






    console.log("押" + ya + ", " + times + "倍")

    jQuery('.balls.smwidth').each(function (i, e) {
        for (let j = 0; j < 10; j++) {
            if (ya === j) {
                setTimeout(function (e1, j1) {
                    jQuery(e1).find("span")[j1].click();
                }, (i+1) * (/*j+*/1) * 200, e, j)
            }
        }
    })

    let bei = jQuery('#_bei').val()
    setKeywordText(times * bei);


    setTimeout(function () {
        jQuery('.btnx.btn-liji').click()
        // console.log("押了会清空？")
    }, 6000)


    lastBet = lastIssue
}

let taskId = setInterval(main, 1000);




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

function isValid(date, h1, m1, h2, m2) {
    var h = date.getHours();
    var m = date.getMinutes();
    return (h1 < h || h1 === h && m1 <= m) && (h < h2 || h === h2 && m <= m2);
}

function inTime() {
    return !(isValid(new Date(), 8, 50, 10, 50) || isValid(new Date(), 14, 55, 17, 20)||isValid(new Date(), 20, 30, 23, 00))
}









let initMoney = parseInt(jQuery('.balance em').text());
let maxMoney = initMoney;
let taskId2 = setInterval(function () {
    let money = parseInt(jQuery('.balance em').text());
    let yingli = money - initMoney;
    let yingliRate = (yingli/initMoney * 100).toFixed(2);
    jQuery('#_yingli').text((yingli >= 0 ? '+' : '-') + yingli + ' (' + yingliRate + '%)');
    jQuery('#_yingli').css(yingli >= 0 ? "color: #2b982b" : "color: #ac2925");

    if (money > maxMoney) {
        maxMoney = money;
        jQuery('#_maxYingli').text(yingli + ' (' + yingliRate + '%)');
    }

    if (money < parseInt(jQuery('#_tingMin').val()) || money > parseInt(jQuery('#_tingMax').val())) {
        clearInterval(taskId);
        clearInterval(taskId2);
        alert("停！");
    }
}, 2000);
