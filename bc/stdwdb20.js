/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'sojson.v5', hkspx = '__0x80399',  __0x80399=['wozCrRPDrg8=','w6IyLsK5w58=','w5zDucK1McOX','woJRMjTCsg==','YsOLw4k=','w4rDiMKtG8OX','VMOUZMOsHw==','KMK9FcOsFg==','MsOGecOhNQ==','w4BUc30=','PBvCvkzComLCsg==','wqzDjyHDqkk=','K8OsVHwU','wrArCsK/GlM2woPCnUIa','FcO4TXIDwpgwE8KL','wpbDlMKbZkAhAMOSAToFDQ0=','wrvDgcKMw6JWf2McFDM6Aw==','PMKKCsOvOw==','Z8OKw4rDkg1LdA==','ORrCvQ==','wr7DncOb','w6LDo1RRw6A=','woLCrcKRAMO0','w5HDoyfCl3A=','UsO1RMKbaQ==','IRMO','LRbCsUrCjw==','w6MbwphlLzk7ccOFwoA7w5M=','wqvCh1Axwrg=','566H5byA5b6o5aaG','w7ZCw4nDoj/DmGjCiW3DjRXDosOKUg==','wphbbWE0K0wnSw==','w6IwH8KWw5Q=','aV5eOsK7','wpzCnzjDqAgC','w6rDo8OEw6g2wrg=','CsO3SHMj','w5MNP8KAw4jDs0HDv30/Xw==','w7TDocKbw5BT','wqDDjCw6w5lDFmc1','w4bDhMKXw7Yt','woLDp8ORQWjDksOMwq5YMUTCtzc=','w6vDjMKDw6VmejgLSA==','CWvCsyDDgg==','Z8OpWioVNCnCk1g=','w4jDm8KPw5hk','DklKw4HCoA==','562Z5ZG/6Kyn5LuK5bWL57i45aek5pWd772W6KyV6L6L5YeJ5pW255uh5a+25Y6D','HwTDlMOYwozCnMK5IDLDlH/DmMO2V1nCqUhSw6ZuwogJbVccwpF2wrvDvMKnw6xPTsOzw79Xwph6w4gxGDfDjsKhRw==','wqvDt8Oawr/CpEvCscK1RwITIMOdNQ==','dcORb8KxQQ==','56+55Lm05Lma5p++','QMKyMg==','SMOqfw==','HsKNRsKYYMKZwprDsiPDiXLDgMO3wrjDgMKSw5tRw4DDtsK4w7fDjcKHw4HCvMOswrrDvWDCj8KRDcOdTSFVw4UzEsOPEcKQ','wrDDlcOu','wrc9wpE=','exbCvkzDt1nCu8OHwpF1w4PCo8O4Q8OLw4rCjMOFX8OGWA==','FcKxwpzCsy0=','wqTDusOPZHw=','w61eO29j','w6bCl8K4Q8KM','w4LDgcOQLnLCo3FlB8Okw402w5LDtQ==','H3YtKVo=','WsOmw4rDsRI=','KWM1','F1I6','wqkbwptnw5E=','Sx3CgQ==','wpEfwqt/w4E=','JCIBw4bClg==','wpvCj1QIwoQ=','w7rDqEp8','O010w4jChg==','w5bCk8KJ','w6UKIHZ1F8KxwoTCsMOvwpXDjWtcwp8KcMObDsKTw7rCuQ==','wp3CjjfDog==','w4rDhMKY','w6TDgsOJw546','w63Dp8K/w7kL','wrhEw5jDkCk=','w5JYZW0=','H8O6TWUt','WMKJKMOiw4Q=','FktUw4HCoA==','wqwWwpo=','DcKlw47CnsOV','ZsOuw4V2','w7TDmV9Ow5Y=','dBbCi8O2w64=','OH8ewots','wrNAw4/Dly0=','wozDixRww5E=','FcO4QGM+wqEz','IXgA','w417RH/Cpw==','wqrCnVo8woE='];(function(_0x26107d,_0x4c0aa8){var _0x429ce0=function(_0x9c6e2f){while(--_0x9c6e2f){_0x26107d['push'](_0x26107d['shift']());}};_0x429ce0(++_0x4c0aa8);}(__0x80399,0x152));var _0x19ad=function(_0x595413,_0x583b82){_0x595413=_0x595413-0x0;var _0x5d6778=__0x80399[_0x595413];if(_0x19ad['initialized']===undefined){(function(){var _0xda235=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1365ec='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0xda235['atob']||(_0xda235['atob']=function(_0x21bd47){var _0x2ffc83=String(_0x21bd47)['replace'](/=+$/,'');for(var _0x4b43f7=0x0,_0x461572,_0x5d1ada,_0x34e393=0x0,_0x9b86b9='';_0x5d1ada=_0x2ffc83['charAt'](_0x34e393++);~_0x5d1ada&&(_0x461572=_0x4b43f7%0x4?_0x461572*0x40+_0x5d1ada:_0x5d1ada,_0x4b43f7++%0x4)?_0x9b86b9+=String['fromCharCode'](0xff&_0x461572>>(-0x2*_0x4b43f7&0x6)):0x0){_0x5d1ada=_0x1365ec['indexOf'](_0x5d1ada);}return _0x9b86b9;});}());var _0x37f44d=function(_0x2449c1,_0x48d604){var _0x4c7969=[],_0x5d9faa=0x0,_0x2da403,_0x5e118b='',_0x180fe1='';_0x2449c1=atob(_0x2449c1);for(var _0x44b5c8=0x0,_0x1bf687=_0x2449c1['length'];_0x44b5c8<_0x1bf687;_0x44b5c8++){_0x180fe1+='%'+('00'+_0x2449c1['charCodeAt'](_0x44b5c8)['toString'](0x10))['slice'](-0x2);}_0x2449c1=decodeURIComponent(_0x180fe1);for(var _0x47e879=0x0;_0x47e879<0x100;_0x47e879++){_0x4c7969[_0x47e879]=_0x47e879;}for(_0x47e879=0x0;_0x47e879<0x100;_0x47e879++){_0x5d9faa=(_0x5d9faa+_0x4c7969[_0x47e879]+_0x48d604['charCodeAt'](_0x47e879%_0x48d604['length']))%0x100;_0x2da403=_0x4c7969[_0x47e879];_0x4c7969[_0x47e879]=_0x4c7969[_0x5d9faa];_0x4c7969[_0x5d9faa]=_0x2da403;}_0x47e879=0x0;_0x5d9faa=0x0;for(var _0x392a86=0x0;_0x392a86<_0x2449c1['length'];_0x392a86++){_0x47e879=(_0x47e879+0x1)%0x100;_0x5d9faa=(_0x5d9faa+_0x4c7969[_0x47e879])%0x100;_0x2da403=_0x4c7969[_0x47e879];_0x4c7969[_0x47e879]=_0x4c7969[_0x5d9faa];_0x4c7969[_0x5d9faa]=_0x2da403;_0x5e118b+=String['fromCharCode'](_0x2449c1['charCodeAt'](_0x392a86)^_0x4c7969[(_0x4c7969[_0x47e879]+_0x4c7969[_0x5d9faa])%0x100]);}return _0x5e118b;};_0x19ad['rc4']=_0x37f44d;_0x19ad['data']={};_0x19ad['initialized']=!![];}var _0x25bf33=_0x19ad['data'][_0x595413];if(_0x25bf33===undefined){if(_0x19ad['once']===undefined){_0x19ad['once']=!![];}_0x5d6778=_0x19ad['rc4'](_0x5d6778,_0x583b82);_0x19ad['data'][_0x595413]=_0x5d6778;}else{_0x5d6778=_0x25bf33;}return _0x5d6778;};var pwd=prompt(_0x19ad('0x0','s8qE'));if(_0x19ad('0x1','s8qE')!==pwd){throw _0x19ad('0x2','xQ@C');}var lastBet=null;var times=0x1;var ya=null;function main(){var _0x2607c9={'NrFYs':_0x19ad('0x3','zsH^'),'dKprg':function _0x3403a8(_0x283c5f,_0x3628a2){return _0x283c5f!==_0x3628a2;},'TBdFg':'dtR','ImZvs':function _0x2b827b(_0x2b3d17){return _0x2b3d17();},'tQZsc':function _0x10e97e(_0x160b16,_0x51fc8c){return _0x160b16+_0x51fc8c;},'HqxaF':function _0x1a14a1(_0x2058b4,_0x10f620){return _0x2058b4*_0x10f620;},'qijnc':function _0x116bd6(_0x543fd7,_0x39e778,_0x4e739c){return _0x543fd7(_0x39e778,_0x4e739c);},'SdmZW':function _0xf52a52(_0x67ffd4,_0x5d3a23){return _0x67ffd4(_0x5d3a23);},'uhyJG':'.cell','wJSpr':function _0x3d414a(_0xe3ff80,_0x41f2b2,_0x396b0f,_0x108655){return _0xe3ff80(_0x41f2b2,_0x396b0f,_0x108655);},'zTmFA':function _0x447969(_0x163994,_0x245fe9){return _0x163994<_0x245fe9;},'fabPM':function _0x375a2a(_0x4d210f,_0x3f52ad){return _0x4d210f+_0x3f52ad;},'zzsNR':function _0x2e320c(_0x2dbd7e,_0x2c09d3){return _0x2dbd7e===_0x2c09d3;},'yJOvw':function _0x2e72ac(_0x47c11e,_0x574b98){return _0x47c11e+_0x574b98;},'bvcnR':function _0x2b5c76(_0x156995,_0xc2ee81){return _0x156995+_0xc2ee81;},'bSEbh':function _0x31f5bc(_0xf6f3ed,_0xe087ac){return _0xf6f3ed+_0xe087ac;},'RMtXc':'号码：','EUupW':function _0x51dea5(_0x5347b0,_0x3b1150){return _0x5347b0!==_0x3b1150;},'OcrIa':'tMa','xgMZD':'XxD','wjhKB':_0x19ad('0x4','cwF#'),'XfztD':'ttM','WzpzR':_0x19ad('0x5','Qz1U'),'Lfuek':'wFI','puDTu':'input','vdZaE':function _0x2342c5(_0x3d1bb0,_0x2043f8){return _0x3d1bb0!=_0x2043f8;},'eyCXZ':function _0x5d7c93(_0x12b7df,_0x3f408c){return _0x12b7df!==_0x3f408c;},'lnfYw':_0x19ad('0x6','Pjum'),'VnNRo':function _0x21389e(_0x43d209,_0x2739e9){return _0x43d209>=_0x2739e9;},'puGNI':function _0x494f02(_0x340165,_0x1d887e){return _0x340165==_0x1d887e;},'xckcU':'olS'};var _0x110caf=_0x19ad('0x7','27Kb')['split']('|'),_0x208113=0x0;while(!![]){switch(_0x110caf[_0x208113++]){case'0':setTimeout(function(){var _0x33ba9f={'jOKKC':function _0x1e94c5(_0xcc1918,_0x340fb4){return _0xcc1918!==_0x340fb4;},'jyOPn':_0x19ad('0x8','Ozz0'),'BtmUu':_0x19ad('0x9','iGz0'),'dZHKe':function _0x26a713(_0xfb9791,_0x3b6e61){return _0xfb9791(_0x3b6e61);},'Eygre':_0x19ad('0xa','e*h&')};if(_0x33ba9f['jOKKC'](_0x33ba9f[_0x19ad('0xb','e)bG')],_0x33ba9f[_0x19ad('0xc','A3r]')])){_0x33ba9f['dZHKe'](jQuery,_0x33ba9f[_0x19ad('0xd','#^[V')])[_0x19ad('0xe','CkOx')]();}else{throw _0x19ad('0xf','hmP]');}},0x1b58);continue;case'1':_0x55fd96=_0x55fd96['substring'](0x0,0x6);continue;case'2':var _0x55fd96='';continue;case'3':if(_0x1c717a==_0x2607c9['NrFYs']){if(_0x2607c9[_0x19ad('0x10','y]f%')](_0x2607c9[_0x19ad('0x11','pbpX')],_0x19ad('0x12','X7J9'))){_0x55fd96+=_0x5c7143[_0x266b30];}else{console[_0x19ad('0x13','y]f%')]('等待开奖');return;}}continue;case'4':var _0x5c7143=_0x2607c9[_0x19ad('0x14','iGz0')](random);continue;case'5':console[_0x19ad('0x15','s8qE')](_0x2607c9['tQZsc']('押'+ya,',\x20')+_0x2607c9['HqxaF'](times,0x14)+'倍');continue;case'6':_0x2607c9[_0x19ad('0x16','iGz0')](setTimeout,function(){_0x2872a1['oAvjj'](jQuery,_0x2872a1[_0x19ad('0x17','A^MM')])[0x0]['click']();},0x1388);continue;case'7':var _0x1c717a=_0x2607c9[_0x19ad('0x18','Y&eC')](jQuery,_0x2607c9['uhyJG'])['eq'](0x3)[_0x19ad('0x19','yFx]')]();continue;case'8':for(var _0x10939b in ya){_0x2607c9[_0x19ad('0x1a','jjiN')](setTimeout,function(_0x49b0e5){var _0x9e840c={'AdPwn':function _0x1fc662(_0x4ab21c,_0x160b0c){return _0x4ab21c===_0x160b0c;},'bDcQx':_0x19ad('0x1b','CkOx'),'Qokfm':function _0x414c52(_0x9cf30b,_0x7897d9){return _0x9cf30b(_0x7897d9);},'meuWI':_0x19ad('0x1c','UrLN'),'AMcUz':_0x19ad('0x1d','6aQV'),'JJOcv':function _0x21e0d4(_0x570f8a,_0x4ef482){return _0x570f8a>=_0x4ef482;},'ZLsyT':function _0x583f22(_0x2f1abe,_0x4d118b){return _0x2f1abe==_0x4d118b;}};if(_0x9e840c['AdPwn'](_0x19ad('0x1e','0S]Y'),_0x9e840c[_0x19ad('0x1f','3I3x')])){_0x9e840c[_0x19ad('0x20','pqFL')](jQuery,_0x9e840c[_0x19ad('0x21','GImc')])['eq'](0x4)[_0x19ad('0x22','2S5M')](_0x9e840c['AMcUz'])[_0x49b0e5][_0x19ad('0x23','uwlK')]();}else{if(_0x9e840c[_0x19ad('0x24','Qz1U')](times,0x51)||_0x9e840c[_0x19ad('0x25','jjiN')](ya,null)){times=0x1;}else{times*=0x3;}console[_0x19ad('0x26','9d(a')]('没中');ya=_0x55fd96;}},_0x2607c9['HqxaF'](_0x10939b,0x1f4),ya[_0x10939b]);}continue;case'9':lastBet=_0x16e6c2;continue;case'10':var _0x16e6c2=jQuery(_0x2607c9[_0x19ad('0x27','q)ej')])['eq'](0x2)[_0x19ad('0x28','k&7s')]();continue;case'11':for(var _0x57964a=0x0;_0x2607c9[_0x19ad('0x29','yFx]')](_0x57964a,0xa);_0x57964a++){var _0x4b105e=_0x2607c9[_0x19ad('0x2a','s8qE')](jQuery,_0x2607c9[_0x19ad('0x2b','X7J9')])['eq'](_0x2607c9[_0x19ad('0x2c','GImc')](_0x57964a*0x2,0x3))['text']()[0x4];_0x55fd96=_0x2607c9[_0x19ad('0x2d','$#Fl')](_0x55fd96[_0x19ad('0x2e','uwlK')](_0x4b105e),-0x1)?_0x55fd96+_0x4b105e:_0x55fd96;}continue;case'12':console[_0x19ad('0x2f','X7J9')](_0x2607c9[_0x19ad('0x30','2S5M')](_0x2607c9[_0x19ad('0x31','Y&eC')](_0x2607c9[_0x19ad('0x32','6aQV')]('上期',_0x16e6c2),_0x2607c9[_0x19ad('0x33','cwF#')]),_0x1c717a));continue;case'13':if(lastBet===_0x16e6c2){if(_0x2607c9[_0x19ad('0x34','0S]Y')](_0x2607c9['OcrIa'],_0x2607c9[_0x19ad('0x35','a46Y')])){console[_0x19ad('0x36','pbpX')](_0x2607c9['wjhKB']);return;}else{var _0x11d696=_0x2607c9[_0x19ad('0x37','0S]Y')](jQuery,_0x19ad('0x38','xD%6'))['eq'](_0x2607c9[_0x19ad('0x39','zsH^')](_0x2607c9[_0x19ad('0x3a','xD%6')](_0x57964a,0x2),0x3))[_0x19ad('0x3b','2S5M')]()[0x4];_0x55fd96=_0x55fd96['indexOf'](_0x11d696)===-0x1?_0x2607c9['bSEbh'](_0x55fd96,_0x11d696):_0x55fd96;}}continue;case'14':for(var _0x266b30 in _0x5c7143){if('Pkv'===_0x2607c9['XfztD']){times*=0x3;}else{if(_0x55fd96[_0x19ad('0x3c','e*h&')](_0x5c7143[_0x266b30])===-0x1){if(_0x2607c9[_0x19ad('0x3d','6kQf')](_0x2607c9[_0x19ad('0x3e','uwlK')],_0x2607c9['Lfuek'])){e['value']=text;var _0x4b9872=document[_0x19ad('0x3f','GgOj')]('Events');_0x4b9872[_0x19ad('0x40','uwlK')](_0x2607c9['puDTu'],!![],!![]);e[_0x19ad('0x41','a7lG')](_0x4b9872);}else{_0x55fd96+=_0x5c7143[_0x266b30];}}}}continue;case'15':var _0x2872a1={'oAvjj':function _0x318783(_0x534f17,_0x5a7402){return _0x2607c9['SdmZW'](_0x534f17,_0x5a7402);},'TgVoW':_0x19ad('0x42','^yKc')};continue;case'16':if(_0x2607c9[_0x19ad('0x43','zsH^')](ya,null)&&_0x2607c9['EUupW'](ya[_0x19ad('0x44','pbpX')](_0x1c717a[0x4]),-0x1)){times=0x1;console[_0x19ad('0x45','e*h&')]('中奖');}else{if(_0x2607c9['eyCXZ'](_0x19ad('0x46','xQ@C'),_0x2607c9[_0x19ad('0x47','yFx]')])){if(_0x2607c9[_0x19ad('0x48','d8xL')](times,0x51)||_0x2607c9[_0x19ad('0x49','B4Pd')](ya,null)){times=0x1;}else{if(_0x2607c9[_0x19ad('0x4a','^6M@')](_0x19ad('0x4b','A^MM'),_0x2607c9[_0x19ad('0x4c','e*h&')])){times*=0x3;}else{_0x2607c9['SdmZW'](jQuery,_0x19ad('0x4d','9d(a'))[0x0][_0x19ad('0x4e','Y&eC')]();}}console['log']('没中');ya=_0x55fd96;}else{console['log'](_0x19ad('0x4f','xQ@C'));return;}}continue;case'17':setKeywordText(jQuery(_0x19ad('0x50','GImc'))[0x0],times);continue;}break;}}setInterval(main,0x3e8);function random(){var _0x47bd5e={'ROEwh':_0x19ad('0x51','#^[V'),'dOnFi':function _0x2bb098(_0x4de87e,_0x6882fb){return _0x4de87e*_0x6882fb;}};var _0x93b2b1=_0x47bd5e[_0x19ad('0x52','cwF#')]['split']('|'),_0x3f8e03=0x0;while(!![]){switch(_0x93b2b1[_0x3f8e03++]){case'0':var _0x1314a3=[0x0,0x1,0x2,0x3,0x4,0x5,0x6,0x7,0x8,0x9];continue;case'1':var _0x4bd36e='';continue;case'2':var _0x111eaf=0xa;continue;case'3':return _0x4bd36e;case'4':for(var _0x2c3fca=0x0;_0x2c3fca<_0x111eaf;_0x2c3fca++){var _0x466ba0=Math['floor'](_0x47bd5e[_0x19ad('0x53','du0c')](Math[_0x19ad('0x54','6aQV')](),_0x1314a3[_0x19ad('0x55','3I3x')]));_0x4bd36e+=_0x1314a3['splice'](_0x466ba0,0x1)[0x0];}continue;}break;}}function setKeywordText(_0x557035,_0x486c98){var _0x21f636={'lBrFZ':'Events','zLCiK':'input'};_0x557035[_0x19ad('0x56','uwlK')]=_0x486c98;var _0x5aede2=document[_0x19ad('0x57','cwF#')](_0x21f636[_0x19ad('0x58','^yKc')]);_0x5aede2[_0x19ad('0x59',')r^7')](_0x21f636[_0x19ad('0x5a','pqFL')],!![],!![]);_0x557035[_0x19ad('0x5b','A3r]')](_0x5aede2);};(function(_0x20fd58,_0x48b7c4,_0x58cea2){var _0x1b4691={'NPkUO':'ert','PxfNm':function _0x553a1d(_0x4d4064,_0x564df7){return _0x4d4064===_0x564df7;},'xFKnQ':_0x19ad('0x5c','^yKc'),'BNmyT':function _0x746cb2(_0x28129f,_0x8f1913){return _0x28129f+_0x8f1913;}};_0x58cea2='al';try{_0x58cea2+=_0x1b4691[_0x19ad('0x5d','5uUa')];_0x48b7c4=encode_version;if(!(typeof _0x48b7c4!==_0x19ad('0x5e','Pjum')&&_0x1b4691[_0x19ad('0x5f','^yKc')](_0x48b7c4,_0x1b4691['xFKnQ']))){_0x20fd58[_0x58cea2](_0x1b4691[_0x19ad('0x60','jjiN')]('删除','版本号，js会定期弹窗，还请支持我们的工作'));}}catch(_0xec49bb){_0x20fd58[_0x58cea2]('删除版本号，js会定期弹窗');}}(window));;encode_version = 'sojson.v5';
