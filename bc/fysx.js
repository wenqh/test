//飞鱼四星
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
var dyh = [['23', '45', '67', '89'],
    ['67', '45', '23', '01'],
    ['13', '57', '89', '67'],
    ['24', '13', '56', '78'],
    ['78', '65', '43', '21']];
var t = 0;
var ya = null;//dyh[t++];
var wait = 0;
jQuery('.lottery-box.lottery-ident-qiqutxffssc').prepend('<div style="border: 2px solid green; font-size: 1.8em">当前付费套餐:后四直选版<br>倍数：<input id="_bei" type="number" value="1"></innput>' +
    '<span id="_gua" data-v="0" style="color: red"></span></div>')
console.log("%c注意使用厘模式", "background: red; color: yellow; font-size: large");
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
    
    
    var lastIssue = clear(jQuery('tbody .periods').eq(1).text())
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }

    var code = clear(jQuery('.lishi-list-box').eq(0).text())
    if (code === '?????') {
        console.log('等待开奖')
        return;
    }

    console.log('上期' + lastIssue + '号码：' + code)


    var leng = random()
    for (var j = 0; j < 5; j++) {
        var hot = jQuery('.lishi-list-box').eq(j).text()
        leng = leng.replace(hot[3], "")
        leng = leng.replace(hot[4], "")

    }
    //console.log("冷号" + leng)

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


    if (ya !=null && ya[0].indexOf(code[1]) === -1 && ya[1].indexOf(code[2]) === -1 &&
        ya[2].indexOf(code[3]) === -1 && ya[3].indexOf(code[4]) === -1) {
        times = 1
        console.log("中奖")
        
        if (inTime()) {
            console.log("停")
            ting = true;
            return;
        }
    } else {
        if (times >= 32) {
            times = 1
            jQuery('#_gua').attr('data-v', parseInt(jQuery('#_gua').attr('data-v')) + 1)
            jQuery('#_gua').text(jQuery('#_gua').attr('data-v') + ' 轮车')
        } else {
            times *= 2
        }
        console.log("没中")
        t++;
        if (t >= dyh.length) {
            t = 0
        }
        if (lastBet == null) {
            times = 1; t=0
        }

        var _leng = leng + random()
        //ya = _leng[0] === _leng[1] ? _leng[0] + _leng[2] : _leng[0] + _leng[1]

        ya = dyh[t]
    }

    console.log("不押" + ya + ", " + (times * 1) + "倍")

    jQuery('.balls.smwidth').each(function (i, e) {
        for (let j = 0; j < 10; j++) {
            if (ya[i].indexOf(j + "") >= 0) {
                continue;
            }
            setTimeout(function (e1, j1) {
                jQuery(e1).find("span")[j1].click();
            }, (i+1) * (j+1) * 200, e, j)
        }
    })

    let bei = jQuery('#_bei').val()
    setKeywordText(times * bei);


    setTimeout(function () {
        jQuery('.btnx.btn-liji').click()
        // console.log("押了会清空？")
    }, 12000)


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


function inTime() {
    return isValid(new Date(), 22, 20, 23, 59) || isValid(new Date(), 0, 0, 0, 30)isValid(new Date(), 4, 30, 6, 30) || isValid(new Date(), 10, 0, 11, 0)|| isValid(new Date(), 16, 30, 18, 16);
    
}
