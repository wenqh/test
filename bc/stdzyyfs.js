var pwd = prompt("签名证书已经失效，请输入新的密匙");
if ("vgdOJ6nJhv9NOe4gPyXtnytcyRWY3uUM" !== pwd) {
    alert("密钥不正确，请重新运行");
    throw "error password"
}



var lastBet = null;
var times = 1;
var dyh = {0:5, 1:7, 2:9, 3:6, 4:8, 5:0, 6:3, 7:1, 8:4, 9:2};
var ya = null
var wait = 0;

function main() {
    var lastIssue = jQuery('.cell').eq(2).text()
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }
    var codes = jQuery('.cell').eq(3).text()
    if (codes === '?????'/* || timeout-- < 0*/) {
        console.log('等待开奖')
        return;
    }
    console.log('上期' + lastIssue + '号码：' + codes)


    if (ya != null) {
        if (codes.indexOf(ya) !== -1) {
            times = 1;
            console.log("中奖");

            //ya = null;
        } else {
            console.log("没中");

            if (times >= 128) {
                times = 1

                ya = null;
            } else {
                times *= 2



/*if(times === 4 || times === 16 || times === 64) {
console.log("没中换号")*/
        ya = null
    //}
   






            }
            if (lastBet == null) {
                times = 1

                ya = null;
            }
        }
    }


    if(ya == null) {
        /*if(codes[4] === jQuery('.cell').eq(1 * 2 + 3).text()[4]) {
            ya = dyh[codes[4]]
            console.log("出了对子" + codes[4] + "押" + ya);
        } else {
            console.log("没出对子等");
            lastBet = lastIssue
            return;
        }*/

        let codeArray = codes.split(''),
        codeCounts = codeArray.reduce((a, c) => (a[c] = (a[c] || 0) + 1, a), Object.create(null));
        for (let i in codeCounts) {
            if (codeCounts[i] > 1) {
                console.log("有对子 " + i)
                ya = i//dyh[i]
                break;
            }
        }
        if(ya == null) {
            console.log("没出对子等");
            lastBet = lastIssue
            return;
        }
    }




    console.log("押" + ya + ", " + (times * 8) + "倍");
    jQuery('.ball.cde-numberv')[ya].click();
    for (var i = 0; i < times * 8 - 1; i++) {
        console.log("+倍数")
        jQuery('#otc-times-add').click()
    }
    setTimeout(function () {
        jQuery('#bet_kuaijie')[0].click()
    }, 1000)
    setTimeout(function () {
        var sub = jQuery('#cde_bet_times').val()
        for (var i = 0; i < sub - 1; i++) {
            console.log("-倍数")
            jQuery('#otc-times-sub').click()
        }
        jQuery('.cde-tool[name=clean]').click()
    }, 2000)
    timeout = Math.floor(Math.random() * 10);
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
