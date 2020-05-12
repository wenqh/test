var pwd = prompt("签名证书已经失效，请输入新的密匙");
if ("020v21t5kl5h6gt02i3o0n10s1kh0dl01ib7j3nbr5v26kiz" !== pwd) {
    alert("密钥不正确，请重新运行");
    throw "error password"
}


var lastBet = null;
var times = 1;
var ya = null
 var jiaoti = true; 
 var lr = 0; 
 var lengre = "热热冷冷冷";
function main() {
    var lastIssue = jQuery('.cell').eq(2).text();
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }
    var codes = jQuery('.cell').eq(3).text();
    if (codes == '?????') {
        console.log('等待开奖');
        return;
    }
    console.log('上期' + lastIssue + '号码：' + codes)
    var hots6 = ''
    for (var j = 0; j < 10; j++) {
        var c = jQuery('.cell').eq(j * 2 + 3).text()[4]
        hots6 = hots6.indexOf(c) === -1 ? hots6 + c : hots6
    }

    var rand = random()
    for (var r in rand) {
        if (hots6.indexOf(rand[r]) === -1) {
            //console.log("不足6个补" + rand[r])
            hots6 += rand[r]
        }
    }
    hots6 = hots6.substring(0, 6)
    var leng6 = ""
    for (var n = 0; n<10; n++) {
        if(hots6.substring(0, 4).indexOf(n+"")===-1) {
           leng6 += n
        }
    }


    if (ya != null && ya.indexOf(codes[4]) !== -1) {
        times = 1;
        console.log("中奖")
    } else {
        if (times >= 81 || ya == null) {
            times = 1
        } else {
            times *= 3
        }
        console.log("没中")


       if (lengre[(lr++)%lengre.length] === "热") { 
          ya = hots6; 
          console.log('压热') 
        } else { 
          ya = leng6; 
          console.log('压冷') 
        }
 
 console.log("热号"+hots6+"冷号"+leng6)
    
    }

    console.log("押" + ya + ", " + (times *12) + "倍")

    for (var i in ya) {
        setTimeout(function(j) {
            jQuery('.num-list.num-list-rac').eq(4).find('span')[j].click();
        }, i * 500, ya[i])
    }

    /*for (var i = 0; i < times * 1 - 1; i++) {
        console.log("+倍数");
        jQuery('#otc-times-add').click()
    }*/
 
 setKeywordText(jQuery('#cde_bet_times')[0], times*12)
    setTimeout(function() {
        jQuery('#bet_kuaijie')[0].click()
    }, 5000);
    setTimeout(function() {
        /*var sub = jQuery('#cde_bet_times').val();
        for (var i = 0; i < sub - 1; i++) {
            console.log("-倍数");
            jQuery('#otc-times-sub').click()
        }*/
        jQuery('.cde-tool[name=clean]').click();
    }, 7000)
    lastBet = lastIssue
}
setInterval(main, 1000);
//main()
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


function setKeywordText(e, text) { 
 e.value = text; var evt = document.createEvent("Events");
 evt.initEvent("input", true, true);
 e.dispatchEvent(evt);
 }var lastBet = null;
var times = 1;
var ya = null
 var jiaoti = true; 
 var lr = 0; 
 var lengre = "冷冷热热热";
function main() {
    var lastIssue = jQuery('.cell').eq(2).text();
    if (lastBet === lastIssue) {
        console.log("等下一期");
        return;
    }
    var codes = jQuery('.cell').eq(3).text();
    if (codes == '?????') {
        console.log('等待开奖');
        return;
    }
    console.log('上期' + lastIssue + '号码：' + codes)
    var hots6 = ''
    for (var j = 0; j < 10; j++) {
        var c = jQuery('.cell').eq(j * 2 + 3).text()[4]
        hots6 = hots6.indexOf(c) === -1 ? hots6 + c : hots6
    }

    var rand = random()
    for (var r in rand) {
        if (hots6.indexOf(rand[r]) === -1) {
            //console.log("不足6个补" + rand[r])
            hots6 += rand[r]
        }
    }
    hots6 = hots6.substring(0, 6)
    var leng6 = ""
    for (var n = 0; n<10; n++) {
        if(hots6.substring(0, 4).indexOf(n+"")===-1) {
           leng6 += n
        }
    }


    if (ya != null && ya.indexOf(codes[4]) !== -1) {
        times = 1;
        console.log("中奖")
    } else {
        if (times >= 81 || ya == null) {
            times = 1
        } else {
            times *= 3
        }
        console.log("没中")


       if (lengre[(lr++)%lengre.length] === "热") { 
          ya = hots6; 
          console.log('压热') 
        } else { 
          ya = leng6; 
          console.log('压冷') 
        }
 
 console.log("热号"+hots6+"冷号"+leng6)
    
    }

    console.log("押" + ya + ", " + (times *12) + "倍")

    for (var i in ya) {
        setTimeout(function(j) {
            jQuery('.num-list.num-list-rac').eq(4).find('span')[j].click();
        }, i * 500, ya[i])
    }

    /*for (var i = 0; i < times * 1 - 1; i++) {
        console.log("+倍数");
        jQuery('#otc-times-add').click()
    }*/
 
 setKeywordText(jQuery('#cde_bet_times')[0], times*12)
    setTimeout(function() {
        jQuery('#bet_kuaijie')[0].click()
    }, 5000);
    setTimeout(function() {
        /*var sub = jQuery('#cde_bet_times').val();
        for (var i = 0; i < sub - 1; i++) {
            console.log("-倍数");
            jQuery('#otc-times-sub').click()
        }*/
        jQuery('.cde-tool[name=clean]').click();
    }, 7000)
    lastBet = lastIssue
}
setInterval(main, 1000);
//main()
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


function setKeywordText(e, text) { 
 e.value = text; var evt = document.createEvent("Events");
 evt.initEvent("input", true, true);
 e.dispatchEvent(evt);
 }

   
