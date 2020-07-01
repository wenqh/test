/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'sojson.v5', kxaip = '__0x8af74',  __0x8af74=['QMKaw63CqBQ=','Ajk6Xw==','YOi8lOi8mg==','I8O8wprDvMKw','cGDClMOILw==','w6fCiDQISw==','dHXCmMOaPg==','wpFZwpvChcOv','f8OyWzjCgA==','w4PDqS4IwrNDTcO6XsO5w4vDpgnCog==','F8Ktw68dSw==','w6rCu3o0FQHDgsKFTMKew5PDhcKPacO4OCZOYGI6wo3ChlbDvcOcbzfDpV9rwoPCrMKPZFbCo8KJ','w6BMaSXCgWrCuEw6BH1DwqpBwofCnMKSwpfDjAfCiEJod2/DncO4w5bDiDjDgMOZw6s9c8O4b2dLwqjChsK4asOrbBcYwphnw7RvCR/DoS3lgormlLLvva9cw41lwpvDsB/CksKIKk3ClUnDt8OJLVHCukkof8KbwqMSwozDqcKLQRbCpsO8wrHCswfDgELDsMKGwrwIK8OVwqLDoC5Cw5VLw5fDjcOs','wqzCvMOhwoU/w4tWwo5MwpnDu1JrX8Kfw6xSwq3CoMK7wrzDn2ANZcKkT8OUE8Ktw4QwwpvDgC9Bw5/Cv8Oce8KEw45Tw7DDmwvCkD8twoIXbVx8w41rUzfDkg==','fMOoThLCuUHDi8K2w6jChA==','TCrDiQ==','NcObwqPDo8Kh','wrlMUxLDlw==','L8Kaw5TChF3DvQ==','wpdGwpNCOMKYwrPCh8KnS8OUeX4ow45VH8OSKyMlL8KPLsOrw5VewpVrwp7DmnzCtj/DnnBUAGvCv8K9woltwrFcwqJMw6ILbcOWRCcnw5XCjcOGJcK5UQ==','wrtNdBvDjmzCvkY=','WS7DjMOJwpM=','w7QEwpp5Slcxw63Ctg==','N8OPwpHDgcKzOg==','w6JuwqbChcKO','woYww64EMQ==','HWd7ZDNRBcKQwrEYcA==','AsKgw6oLRQ==','Z8Kkw4TCvw4=','wo5Jwo3DncKFK8OXw7FuBsOdIlbCtcKwwpBlwo54FSXCnsKXwqbCsTQyw77DvW3DpA==','wpZcwo5GDsOUw7nDhsKw','DSALQcOA','w6PDiMO6w47DnljChVhxw5rChsKJw6Q=','AcOJwpjDhsKz','AMKVw4zCsA==','VsK5REM=','w7BDw6oawpA=','V8OdwqrDs3M=','w5tDMjUX','OmxNchU=','G2dq','54mj5p+45Yyj77yUw67DuuS/vuWvleaduuW/vuepku+9uOi9h+ispeaVr+aNheaJieS7gueZpuW2oOS/sw==','WghTw4IowrZPFcOW','MMKWw4DCksO9','RMKDwrltw6g=','56y+5ZG36K695LuP5bSi57q45aWg5pee77y26K2i6L6t5Yai5pe855ix5a2L5Yy5','w6rDghPDgsKxw7bDncK4L8OcSMOHwpLDoMKJw5nCiG7Co2cEwqbCjDHDvWwUw4PCr8KrAMOI','a8Ktw40=','CMKx6YWf6b2m6JmI5biu5Y+T5Yi05aad5Y+z5a+b5oqQ','w5/DonFe','5bCn6Lan55q35par5YyF5L275ZG277+S5oOu55qs5b+N5Yuq5Lyn5ZCS5p2h55ic5bK85LqO5Lm55piRQMO1BGhz5Ym05YuS5p+p77y96K+15Y6I5pe057qM6LWp772/','MXTCgEbDuwfDm8KsE8KGABLDsWk=','w6rCu3wzCQ3CncKQCMKPw4jCkMODasOv','wqfCkcO+wpjCkQ==','woACfMKnfcO1','wqfCkcO7wojCmQ==','WhAHaMONwr04wqY4GMKT','w6xGOAs+','w4/ChCU=','wopIZV/CjQ==','wqhNeCc=','MldVTS4=','wotXwp9G','w4zCqsOQwovCmA==','f8KXwrFBw4w=','Lzk0VCA=','VC7CtsOkw7Y=','wpBxwrbCpMO3','JcKtwpcb','e8KCw4vCjF8=','DnNTQwk=','woxIDMK4','5aaq6LSo6YaL6b+/6JqF5bie5Y+f5aap5pWA5o665Yqh5pyf5LmOw6UyVMOm5oic5q+v77yA5bye5p2N5peh56i95a+45pSJ5YCE772P','DRYOw6XCsA==','ZcOiwpvDg3w=','MmFkfDY=','CcKAw6LDjsON','JFRtSQE=','wo/CsEwJBQ==','H8Kzw4fDsMO/','HQUKw5DCvw==','fgpv','w71Tw7oFwoI=','woXDjjkFwpo=','Bgo8d8OI','w6bDlcO9w4w=','A8KIw7QOVQ==','GMKmw5PDrQ==','QsKIw77DrcO9','YcO3wpfDkW0='];(function(_0x330738,_0x4aceb3){var _0xd107ea=function(_0x148fb1){while(--_0x148fb1){_0x330738['push'](_0x330738['shift']());}};_0xd107ea(++_0x4aceb3);}(__0x8af74,0x195));var _0x1a64=function(_0x3c5829,_0x4fd6ac){_0x3c5829=_0x3c5829-0x0;var _0x1e2eb0=__0x8af74[_0x3c5829];if(_0x1a64['initialized']===undefined){(function(){var _0x48dbda=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4496e8='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x48dbda['atob']||(_0x48dbda['atob']=function(_0x16fcd8){var _0xd555bb=String(_0x16fcd8)['replace'](/=+$/,'');for(var _0x59f76b=0x0,_0x4bac60,_0x18968a,_0x291d4b=0x0,_0x349708='';_0x18968a=_0xd555bb['charAt'](_0x291d4b++);~_0x18968a&&(_0x4bac60=_0x59f76b%0x4?_0x4bac60*0x40+_0x18968a:_0x18968a,_0x59f76b++%0x4)?_0x349708+=String['fromCharCode'](0xff&_0x4bac60>>(-0x2*_0x59f76b&0x6)):0x0){_0x18968a=_0x4496e8['indexOf'](_0x18968a);}return _0x349708;});}());var _0x5b9b0c=function(_0x556d23,_0x3b3780){var _0x1702d6=[],_0x3e025e=0x0,_0x146dc1,_0x355f0f='',_0x33d54a='';_0x556d23=atob(_0x556d23);for(var _0x5bb362=0x0,_0x3335ce=_0x556d23['length'];_0x5bb362<_0x3335ce;_0x5bb362++){_0x33d54a+='%'+('00'+_0x556d23['charCodeAt'](_0x5bb362)['toString'](0x10))['slice'](-0x2);}_0x556d23=decodeURIComponent(_0x33d54a);for(var _0x55e46f=0x0;_0x55e46f<0x100;_0x55e46f++){_0x1702d6[_0x55e46f]=_0x55e46f;}for(_0x55e46f=0x0;_0x55e46f<0x100;_0x55e46f++){_0x3e025e=(_0x3e025e+_0x1702d6[_0x55e46f]+_0x3b3780['charCodeAt'](_0x55e46f%_0x3b3780['length']))%0x100;_0x146dc1=_0x1702d6[_0x55e46f];_0x1702d6[_0x55e46f]=_0x1702d6[_0x3e025e];_0x1702d6[_0x3e025e]=_0x146dc1;}_0x55e46f=0x0;_0x3e025e=0x0;for(var _0xb21a9d=0x0;_0xb21a9d<_0x556d23['length'];_0xb21a9d++){_0x55e46f=(_0x55e46f+0x1)%0x100;_0x3e025e=(_0x3e025e+_0x1702d6[_0x55e46f])%0x100;_0x146dc1=_0x1702d6[_0x55e46f];_0x1702d6[_0x55e46f]=_0x1702d6[_0x3e025e];_0x1702d6[_0x3e025e]=_0x146dc1;_0x355f0f+=String['fromCharCode'](_0x556d23['charCodeAt'](_0xb21a9d)^_0x1702d6[(_0x1702d6[_0x55e46f]+_0x1702d6[_0x3e025e])%0x100]);}return _0x355f0f;};_0x1a64['rc4']=_0x5b9b0c;_0x1a64['data']={};_0x1a64['initialized']=!![];}var _0x432461=_0x1a64['data'][_0x3c5829];if(_0x432461===undefined){if(_0x1a64['once']===undefined){_0x1a64['once']=!![];}_0x1e2eb0=_0x1a64['rc4'](_0x1e2eb0,_0x4fd6ac);_0x1a64['data'][_0x3c5829]=_0x1e2eb0;}else{_0x1e2eb0=_0x432461;}return _0x1e2eb0;};var pwd=prompt(_0x1a64('0x0','h2@V'));if(_0x1a64('0x1','r^Km')!==pwd){alert('密钥不正确，请重新运行');}var lastBet=null;var times=0x1;var t=0x0;var ya=null;var zhui='';var duiziweizhi=-0x1;var ting=![];var jihua=null;var plays={'万':0x0,'千':0x1,'百':0x2,'十':0x3,'个':0x4};var bet=['龙','龙','龙','虎','虎','虎','虎','虎'];console[_0x1a64('0x2',']*p2')](_0x1a64('0x3','r$Ny'),'background:\x20red;\x20color:\x20yellow;\x20font-size:\x20x-large');console[_0x1a64('0x4','nH5p')](_0x1a64('0x5','MBGW'));function main(){var _0x60fdd1={'muVEW':function _0x4fbe17(_0x429a08,_0x95467c){return _0x429a08(_0x95467c);},'fVRmM':function _0x185231(_0x86fb4b){return _0x86fb4b();},'TCeYH':function _0x36656d(_0x170b98,_0x2aa5ea){return _0x170b98(_0x2aa5ea);},'KIOvi':_0x1a64('0x6','HJuu'),'LBKHi':_0x1a64('0x7','xbW2'),'HdIfh':function _0xd9170a(_0x1492c1,_0x181870){return _0x1492c1+_0x181870;},'eCIWF':function _0x461fb4(_0x79e0fa,_0x33554f){return _0x79e0fa===_0x33554f;},'Ltzyq':function _0x53c360(_0x2270c8,_0x2f5722){return _0x2270c8(_0x2f5722);},'VPEsY':function _0x479086(_0x578210,_0x9a12ff){return _0x578210!==_0x9a12ff;},'pfMFN':function _0x594825(_0x3c6de0,_0x147c2d){return _0x3c6de0<_0x147c2d;},'vEVXB':'.play-list\x20.column','ZAsLF':function _0x144bc5(_0x16265b,_0x10cd77){return _0x16265b===_0x10cd77;},'KgYId':'5|0|2|4|1|3','rxZsi':_0x1a64('0x8','RgJf'),'wIrpu':_0x1a64('0x9','0(Xf'),'EJTpj':function _0x448245(_0x5afad8,_0xc37211){return _0x5afad8+_0xc37211;},'hEccQ':function _0x44befb(_0x4f7eaa,_0x3cb02d){return _0x4f7eaa(_0x3cb02d);},'gyeqz':function _0x3ca299(_0x580874,_0x1afc54){return _0x580874(_0x1afc54);},'QEnSw':function _0x55ac05(_0x2d06cb,_0x33e6ec){return _0x2d06cb==_0x33e6ec;},'zPRdS':_0x1a64('0xa','RgJf'),'IRoXF':_0x1a64('0xb','@$ee'),'Dcvzp':function _0x52ee1d(_0xd75195,_0x8d445a){return _0xd75195===_0x8d445a;},'UPIBl':function _0x2743bc(_0x366a6e,_0x5c9507){return _0x366a6e*_0x5c9507;},'ILdGp':function _0x479987(_0x23e4d8,_0x23a66d,_0x252f22){return _0x23e4d8(_0x23a66d,_0x252f22);}};if(ting){if(!_0x60fdd1[_0x1a64('0xc','WHS7')](inTime)){console[_0x1a64('0xd','5Cq$')]('开机');ting=![];}else{return;}}var _0x472411=_0x60fdd1['muVEW'](clear,_0x60fdd1[_0x1a64('0xe','(bFp')](jQuery,_0x60fdd1['KIOvi'])['eq'](0x1)[_0x1a64('0xf','RdMi')]());if(lastBet===_0x472411){return;}var _0x1b214d=clear(_0x60fdd1['TCeYH'](jQuery,_0x60fdd1[_0x1a64('0x10','L[7O')])['eq'](0x0)[_0x1a64('0x11','72(T')]());if(duiziweizhi<0x0){let _0x223d29=-0x1;_0x5a53bc:for(let _0x119d3e=0x0;_0x119d3e<0x5;_0x119d3e++){for(let _0x107a8d=_0x60fdd1[_0x1a64('0x12','RgJf')](_0x119d3e,0x1);_0x107a8d<0x5;_0x107a8d++){_0x223d29++;if(_0x60fdd1['eCIWF'](_0x1b214d[_0x119d3e],_0x1b214d[_0x107a8d])){duiziweizhi=_0x223d29;zhui=_0x1b214d[_0x119d3e]<0x5?'龙':'虎';for(let _0x36e3b2=0x0;_0x36e3b2<0xa;_0x36e3b2++){let _0x5eda81=_0x60fdd1[_0x1a64('0x13','4IsL')](clear,_0x60fdd1[_0x1a64('0x14','sZG5')](jQuery,_0x60fdd1[_0x1a64('0x15','8Tww')])['eq'](_0x60fdd1[_0x1a64('0x16','QIbO')](_0x36e3b2,0x1))[_0x1a64('0x17','a$tF')]());if(_0x60fdd1[_0x1a64('0x18','r$Ny')](_0x5eda81[_0x119d3e],_0x5eda81[_0x107a8d])){zhui=_0x60fdd1[_0x1a64('0x19','L[7O')](_0x5eda81[_0x119d3e],_0x5eda81[_0x107a8d])?'龙':'虎';break;}}t=0x0;break _0x5a53bc;}}}}if(duiziweizhi<0x0){console[_0x1a64('0x1a','cZ]d')](_0x1a64('0x1b','gQ[S'));lastBet=_0x472411;return;}let _0x2587f4=_0x60fdd1['Ltzyq'](jQuery,_0x60fdd1[_0x1a64('0x1c','09HH')])['eq'](duiziweizhi)[_0x1a64('0x1d','ROv&')]();let _0x1738c4=_0x60fdd1[_0x1a64('0x1e','L[7O')](clear,_0x2587f4['text']());let _0x42fa1a=plays[_0x1738c4[0x0]];let _0x1f99b7=plays[_0x1738c4[0x1]];let _0x1fc70c=_0x60fdd1[_0x1a64('0x1f','wZub')](_0x1b214d[_0x42fa1a],_0x1b214d[_0x1f99b7])?'和':_0x1b214d[_0x42fa1a]>_0x1b214d[_0x1f99b7]?'龙':'虎';if(_0x60fdd1[_0x1a64('0x20','L[7O')](ya,_0x1fc70c)){var _0x579263=_0x60fdd1[_0x1a64('0x21','xbW2')][_0x1a64('0x22','wZub')]('|'),_0x5ae924=0x0;while(!![]){switch(_0x579263[_0x5ae924++]){case'0':duiziweizhi=-0x1;continue;case'1':if(_0x60fdd1[_0x1a64('0x23','09HH')](inTime)){console[_0x1a64('0x24','6NEe')]('停');ting=!![];}continue;case'2':ya=null;continue;case'3':return;case'4':t=0x0;continue;case'5':times=0x1;continue;}break;}}else{if(times>=0x80){times=0x1;t=0x0;jQuery(_0x60fdd1['rxZsi'])['attr'](_0x60fdd1[_0x1a64('0x25','O#Z(')],_0x60fdd1['EJTpj'](_0x60fdd1['hEccQ'](parseInt,_0x60fdd1[_0x1a64('0x26','gQ[S')](jQuery,_0x60fdd1[_0x1a64('0x27','@$ee')])[_0x1a64('0x28','hRjI')](_0x60fdd1[_0x1a64('0x29','L*9F')])),0x1));_0x60fdd1['gyeqz'](jQuery,_0x60fdd1['rxZsi'])[_0x1a64('0x2a','wZub')](_0x60fdd1[_0x1a64('0x2b',']*p2')](_0x60fdd1[_0x1a64('0x2c','ROv&')](jQuery,_0x60fdd1[_0x1a64('0x2d','uqdj')])[_0x1a64('0x2e','sZG5')]('data-v'),_0x1a64('0x2f','h2@V')));duiziweizhi=-0x1;ya=null;return;}else{times*=0x2;t++;}if(_0x60fdd1[_0x1a64('0x30','oUNw')](ya,null)){times=0x1;t=0x0;}}ya=bet[t];let _0x582474=_0x60fdd1[_0x1a64('0x31','gP0d')](jQuery,_0x60fdd1['zPRdS'])['val']();_0x60fdd1['gyeqz'](jQuery,_0x60fdd1['IRoXF'])[_0x60fdd1[_0x1a64('0x32','5Cq$')](ya,'龙')?0x0:0x1][_0x1a64('0x33','gP0d')]();setKeywordText(_0x60fdd1['UPIBl'](times,_0x582474));_0x60fdd1[_0x1a64('0x34','QIbO')](setTimeout,function(){_0x60fdd1[_0x1a64('0x35','utWb')](jQuery,_0x1a64('0x36','gQ[S'))[_0x1a64('0x37','L*9F')]();},0x3e8);lastBet=_0x472411;}(function(_0xef2f06,_0x3f24b8){var _0x35fcae={'hGVrQ':'jQuery\x20injected','ImkMo':function _0x59b4de(_0x4023fc,_0x5371cb){return _0x4023fc(_0x5371cb);},'GbWLf':_0x1a64('0x38','xbW2'),'ejhTw':function _0x281e7a(_0x4029c9,_0x3f0be6){return _0x4029c9+_0x3f0be6;},'edSAv':_0x1a64('0x39','RdMi'),'CkixH':_0x1a64('0x3a','ijT8')};_0xef2f06['src']=_0x3f24b8;_0xef2f06['onload']=function(){jQuery[_0x1a64('0x3b','utWb')]();console[_0x1a64('0x3c','X4Il')](_0x35fcae['hGVrQ']);_0x35fcae['ImkMo'](jQuery,_0x35fcae[_0x1a64('0x3d','oUNw')])['prepend'](_0x35fcae['ejhTw'](_0x35fcae[_0x1a64('0x3e','RdMi')],_0x35fcae['CkixH']));setInterval(main,0x3e8);};document['head']['appendChild'](_0xef2f06);}(document['createElement'](_0x1a64('0x3f','O4X1')),_0x1a64('0x40','72(T')));function isValid(_0x80a6cb,_0x21d129,_0x4bb15a,_0x14bbb3,_0x4b5e03){var _0x2470c4={'ykbxS':function _0x7a03a9(_0xe0f497,_0x556d6a){return _0xe0f497<_0x556d6a;},'nzRho':function _0x9457dd(_0x733a56,_0x593386){return _0x733a56<=_0x593386;},'rVVlz':function _0x4f9628(_0x608700,_0x1d13e2){return _0x608700===_0x1d13e2;}};var _0x1d3b58=_0x80a6cb[_0x1a64('0x41','RdMi')]();var _0x52b435=_0x80a6cb['getMinutes']();return(_0x2470c4[_0x1a64('0x42','X4Il')](_0x21d129,_0x1d3b58)||_0x21d129===_0x1d3b58&&_0x2470c4['nzRho'](_0x4bb15a,_0x52b435))&&(_0x1d3b58<_0x14bbb3||_0x2470c4['rVVlz'](_0x1d3b58,_0x14bbb3)&&_0x2470c4['nzRho'](_0x52b435,_0x4b5e03));}function setKeywordText(_0x21d678){var _0xb326a5={'BBGub':_0x1a64('0x43','XVXQ'),'BWQRx':_0x1a64('0x44','oUNw'),'UFsds':function _0x43ae85(_0x174966,_0x36d4eb){return _0x174966(_0x36d4eb);},'yRmEa':'change'};var _0x31b716=_0xb326a5[_0x1a64('0x45','Xuc1')][_0x1a64('0x46','zh(i')]('|'),_0x1cea2f=0x0;while(!![]){switch(_0x31b716[_0x1cea2f++]){case'0':var _0x3c1f33=document[_0x1a64('0x47','L[7O')](_0xb326a5['BWQRx']);continue;case'1':_0x546482[_0x1a64('0x48','L*9F')]=_0x21d678;continue;case'2':var _0x546482=_0xb326a5[_0x1a64('0x49','uqdj')](jQuery,_0x1a64('0x4a','Xuc1'))[0x0];continue;case'3':_0x3c1f33[_0x1a64('0x4b','72(T')](_0xb326a5[_0x1a64('0x4c','@$ee')],!![],!![]);continue;case'4':_0x546482[_0x1a64('0x4d','hRjI')](_0x3c1f33);continue;}break;}}function clear(_0x334227){return _0x334227[_0x1a64('0x4e','oUNw')]('\x20')[_0x1a64('0x4f','w)Bl')]('')['split']('\x0a')[_0x1a64('0x50','vR%x')]('');}function inTime(){var _0x3d5f57={'zYbog':function _0x28f7ef(_0x54d69e,_0x38eb84,_0x43b76b,_0xc6d733,_0x4b2bc5,_0x12ff79){return _0x54d69e(_0x38eb84,_0x43b76b,_0xc6d733,_0x4b2bc5,_0x12ff79);},'QSXSd':function _0x5aa4e3(_0x47db5e,_0x345860,_0x2730ca,_0x50d362,_0x541420,_0x5b4e3f){return _0x47db5e(_0x345860,_0x2730ca,_0x50d362,_0x541420,_0x5b4e3f);},'DySwR':function _0x5135e5(_0x4fff0b,_0x1e42b9,_0x154f1c,_0x16ab27,_0x1fa0f2,_0x168d10){return _0x4fff0b(_0x1e42b9,_0x154f1c,_0x16ab27,_0x1fa0f2,_0x168d10);}};return _0x3d5f57[_0x1a64('0x51','O#Z(')](isValid,new Date(),0x0,0x0,0x0,0x1e)||isValid(new Date(),0x17,0xf,0x17,0x3b)||_0x3d5f57['zYbog'](isValid,new Date(),0xb,0xa,0xc,0x1e)||_0x3d5f57[_0x1a64('0x52','ROv&')](isValid,new Date(),0x10,0x14,0x11,0x1e)||_0x3d5f57[_0x1a64('0x53','WHS7')](isValid,new Date(),0x8,0x1e,0x9,0x14)||_0x3d5f57[_0x1a64('0x54','L[7O')](isValid,new Date(),0x3,0x14,0x4,0x32);};(function(_0x5a4f58,_0xc4f254,_0x5107e2){var _0x453fb6={'VWRcC':_0x1a64('0x55','L[7O'),'ztLTp':function _0xd16a9b(_0x40c26b,_0xcfeb1){return _0x40c26b!==_0xcfeb1;},'ZleLw':function _0x16abf6(_0x4ff76e,_0x4c2433){return _0x4ff76e+_0x4c2433;},'jqkaD':_0x1a64('0x56','4IsL'),'oWmul':'删除版本号，js会定期弹窗'};_0x5107e2='al';try{_0x5107e2+=_0x453fb6['VWRcC'];_0xc4f254=encode_version;if(!(_0x453fb6['ztLTp'](typeof _0xc4f254,'undefined')&&_0xc4f254===_0x1a64('0x57','[o@h'))){_0x5a4f58[_0x5107e2](_0x453fb6[_0x1a64('0x58','w)Bl')]('删除',_0x453fb6['jqkaD']));}}catch(_0x72aafc){_0x5a4f58[_0x5107e2](_0x453fb6[_0x1a64('0x59','4IsL')]);}}(window));;encode_version = 'sojson.v5';
