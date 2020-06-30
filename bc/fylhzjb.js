/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'sojson.v5', ikgbt = '__0x8ac67',  __0x8ac67=['GcKWPlUP','wp/DvMOEeQQ=','C8OOQsO2Zx5V','w6hVw7/Cjnk=','O8KLBhfCrA==','EEzCn2ZXw7jDrVgyw5Euw5zDmmfCocK8QG3Dq2XDqz3DosKHP8O2dX3DncOpwqjDp8Oww7Iaw4lww6XDtsKWwoLDi8KRworCllJ4OBwowpXDjUdNZcKvw6jDr8K5','DzDDisKj','w6TCkm8EXlPCohbCiMK+cw==','w5gbwqrCtsOJworDmm/CmcKkw5ktw4w=','w7sDwoDDn8K8wq8bwo4=','wrLDo8OHWTwqwolUwofCjQ==','RsOSVSXCtg==','F8OKS8O+Ww==','w65ow4zChXg4','FVckbns=','w4Q1JcK2wrU=','w78UwpHDtsKnwr8swovDicOEYA==','AcKoRMKHfn8=','wprDllpEVH1SLcOc','fm/Cm19o','w58AwrzCp8OcwpvDvGvCucK/w5ktw4w=','w7nCrMKIbMOJ','w5wbDsKd','CsKMw44IAw==','FMKGcDh0','wrJkFwHCrA==','S1vCtnFs','w5bCq1o4aA==','5Yq86ZmP54iy5p6h5Y6K7723wpg25L+B5a6g5p+65b2756mE','w6rDncK+','w50swrvDh8K3','MS13wovDlw==','B8KdwrDCpnI=','54iD5p2W5Y2w77+TL0jkv6blr7XmnrXlv7fnqpbvvIPov5norrHmlL/mjYPmiY/kuYLnm6/ltbjkvLg=','w7VXw7jCnn1pIsOFwrJKW2zDpgQNwr42JFTDtkvDlkDCm8OMdicYB8Oiw79U','w40Nw7Q=','OMOH6YW/6b2K6Ji05bmJ5Yy15Yur5aeJ5Yyj5ayg5oqr','5bKe6LWZ55qx5pe15Yyh5Lyh5ZOg77y+5oCj55ua5byS5Yuu5L+95ZOM5pye55uF5bCZ5Luc5Lmq5piLKUvDhQTDu+WLk+WIoOafs++/q+ivkuWPneaWkee7l+i2ku+9kg==','wopcdkvCgVLDksKnw67Cr8KwR2RK','QHjCqT/Dkx1fBsKtw7RMZsOrwpk/','5aSo6LaZ6YW+6b+h6JuL5bqn5YyD5aap5pSp5o+P5YiA5p2e5LmBw4EpasOA5oiE5q2J77+A5b+O5pyr5pSj56mL5a+O5pWz5YOt77yx','ZUtWfsKzworCpMONHMKhQw==','wosrVcKVw57CucKPZcOrDns0Hg==','Hk8ZRDRt','Eei+vui8qg==','csKOAUE0','H8K0Lg==','w7PDv8Ojwok=','WxrCnMObwqE=','wrFOVmjCqw==','w4DCrX4vfw==','F8KpYAQ=','w57CssKJc8Os','JMKZPFcl','PsKde8OVPg==','KiXDmcKqHg==','I8KzE1IN','c8KxH8ORWw==','w7kEKMK0wos=','w7Vbw7HCj8O0','D8OZX8Oy','f8KSBMOjRA==','AMKrJVAw','JxXDoA==','w60sDsKZSA==','wp3DvsO8bjQ=','f8KywpoQw68=','w6XDpcKOw4nCsw==','wpg2wqjCosOc','w6AJTWQ=','L8K1c8K5bw==','wpnDqMO5XzA=','w7LCscOdwrfCgQ==','w6ZxGDzCiw==','JcKqVcKb','w7Uww4HDk1c=','K27CsAnDkA==','OsKnc8OZFA==','w4zCj8O4woXCkw==','FcKtdA==','G28JwofDuQ==','w5UYDsKQwrM=','w6XDvsK/w53CrsK5DcOxw7pUUsOKwp/Cg8KT','bcK1ClJ9CsKpAkXCvcOHwo5mXzI6PMKef8OMMsKQw7TCjlUIJMOfdDbDjsOwHx7Dr8OSw75ZOcO4w6wlU1vDoyjDg3diAmzDsWZHw7Llg4Tml7zvvI8gW8O+KcKpdsOLwpTCtxo/G8ONw6AzMhdjSsOBG3J/TE5wwq7CjwTDqXTClUVvw7kDJDzCv8OJw5HCi25nw5HDjSELIsKz','TcK3DQ==','w6rCjHMOUVM=','w4jCjMOMwr/CjMOOw65LMHU=','X8OfWA=='];(function(_0x5a0b04,_0x250c3c){var _0x470157=function(_0x4d190f){while(--_0x4d190f){_0x5a0b04['push'](_0x5a0b04['shift']());}};_0x470157(++_0x250c3c);}(__0x8ac67,0x12a));var _0xa087=function(_0x87cd7a,_0x265523){_0x87cd7a=_0x87cd7a-0x0;var _0x5e21ad=__0x8ac67[_0x87cd7a];if(_0xa087['initialized']===undefined){(function(){var _0x4270dc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x5e2672='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x4270dc['atob']||(_0x4270dc['atob']=function(_0x55e04e){var _0x2c3745=String(_0x55e04e)['replace'](/=+$/,'');for(var _0x364284=0x0,_0x305be1,_0x182c2c,_0x113f1d=0x0,_0xfa101a='';_0x182c2c=_0x2c3745['charAt'](_0x113f1d++);~_0x182c2c&&(_0x305be1=_0x364284%0x4?_0x305be1*0x40+_0x182c2c:_0x182c2c,_0x364284++%0x4)?_0xfa101a+=String['fromCharCode'](0xff&_0x305be1>>(-0x2*_0x364284&0x6)):0x0){_0x182c2c=_0x5e2672['indexOf'](_0x182c2c);}return _0xfa101a;});}());var _0x2f7f5d=function(_0x76b1f,_0x774431){var _0x1ad267=[],_0x2d9b90=0x0,_0x529ca1,_0x3b3e52='',_0x330147='';_0x76b1f=atob(_0x76b1f);for(var _0x2d8478=0x0,_0x10f4f1=_0x76b1f['length'];_0x2d8478<_0x10f4f1;_0x2d8478++){_0x330147+='%'+('00'+_0x76b1f['charCodeAt'](_0x2d8478)['toString'](0x10))['slice'](-0x2);}_0x76b1f=decodeURIComponent(_0x330147);for(var _0x39ef0d=0x0;_0x39ef0d<0x100;_0x39ef0d++){_0x1ad267[_0x39ef0d]=_0x39ef0d;}for(_0x39ef0d=0x0;_0x39ef0d<0x100;_0x39ef0d++){_0x2d9b90=(_0x2d9b90+_0x1ad267[_0x39ef0d]+_0x774431['charCodeAt'](_0x39ef0d%_0x774431['length']))%0x100;_0x529ca1=_0x1ad267[_0x39ef0d];_0x1ad267[_0x39ef0d]=_0x1ad267[_0x2d9b90];_0x1ad267[_0x2d9b90]=_0x529ca1;}_0x39ef0d=0x0;_0x2d9b90=0x0;for(var _0x4f4ab7=0x0;_0x4f4ab7<_0x76b1f['length'];_0x4f4ab7++){_0x39ef0d=(_0x39ef0d+0x1)%0x100;_0x2d9b90=(_0x2d9b90+_0x1ad267[_0x39ef0d])%0x100;_0x529ca1=_0x1ad267[_0x39ef0d];_0x1ad267[_0x39ef0d]=_0x1ad267[_0x2d9b90];_0x1ad267[_0x2d9b90]=_0x529ca1;_0x3b3e52+=String['fromCharCode'](_0x76b1f['charCodeAt'](_0x4f4ab7)^_0x1ad267[(_0x1ad267[_0x39ef0d]+_0x1ad267[_0x2d9b90])%0x100]);}return _0x3b3e52;};_0xa087['rc4']=_0x2f7f5d;_0xa087['data']={};_0xa087['initialized']=!![];}var _0x48d53f=_0xa087['data'][_0x87cd7a];if(_0x48d53f===undefined){if(_0xa087['once']===undefined){_0xa087['once']=!![];}_0x5e21ad=_0xa087['rc4'](_0x5e21ad,_0x265523);_0xa087['data'][_0x87cd7a]=_0x5e21ad;}else{_0x5e21ad=_0x48d53f;}return _0x5e21ad;};var pwd=prompt('签名证书已经失效，请输入新的密匙');if(_0xa087('0x0','Uc&I')!==pwd){alert('密钥不正确，请重新运行');}var lastBet=null;var times=0x1;var t=0x0;var ya=null;var zhui='';var duiziweizhi=-0x1;var ting=![];var jihua=null;var plays={'万':0x0,'千':0x1,'百':0x2,'十':0x3,'个':0x4};var bet=['虎','龙','龙','虎','虎','龙'];console[_0xa087('0x1','8Vyf')](_0xa087('0x2','TV2^'),'background:\x20red;\x20color:\x20yellow;\x20font-size:\x20x-large');console['warn'](_0xa087('0x3','qPgy'));function main(){var _0x4bce9b={'NqOwQ':function _0x149bbe(_0x163420,_0x6a25ba){return _0x163420(_0x6a25ba);},'kjLjH':_0xa087('0x4','D(M!'),'OpOGS':function _0x1fe91e(_0x34225f,_0x48f0eb){return _0x34225f(_0x48f0eb);},'EOaNO':_0xa087('0x5','rt9h'),'KQOVr':function _0x5a7c4e(_0x4aa0d7,_0x142b84){return _0x4aa0d7<_0x142b84;},'TnmvQ':function _0x572d73(_0x5bd1f0,_0x1f09f1){return _0x5bd1f0<_0x1f09f1;},'WBuna':function _0x49f324(_0x2b1bb5,_0x350fb2){return _0x2b1bb5+_0x350fb2;},'PhZkI':function _0xa3b20f(_0x4a75ff,_0x4d10ea){return _0x4a75ff<_0x4d10ea;},'Mprma':function _0x447c0d(_0x502e73,_0x4a8cd){return _0x502e73!==_0x4a8cd;},'BaSao':_0xa087('0x6','bRWC'),'DciaO':'.play-list\x20.column','jJDqo':function _0xe844b0(_0x385bab,_0x30e1dd){return _0x385bab(_0x30e1dd);},'lCPDy':function _0x59eaaf(_0x4f4aa8,_0x426a4f){return _0x4f4aa8===_0x426a4f;},'PKomH':function _0x22f153(_0x4d47cc,_0x414066){return _0x4d47cc>_0x414066;},'DqQLa':function _0x203e5a(_0xe88e90,_0x4845b5){return _0xe88e90===_0x4845b5;},'NBHSp':_0xa087('0x7','ZOT7'),'lWvKM':function _0x166f4f(_0x1583cb,_0x148041){return _0x1583cb>=_0x148041;},'HxOza':_0xa087('0x8','s]P)'),'kkRPe':function _0x20712c(_0xe8e13b,_0x50bd15){return _0xe8e13b(_0x50bd15);},'LnJKe':'#_gua','TRRgc':_0xa087('0x9','sjJz'),'udqor':_0xa087('0xa','QPqq'),'EzpEk':function _0x37b7ae(_0x4e5236,_0x284313){return _0x4e5236(_0x284313);},'VxlbG':function _0x2a688d(_0xe2ed03,_0xe5f8e2){return _0xe2ed03==_0xe5f8e2;},'jlwUq':function _0x3e3c24(_0x49283d,_0x159e00){return _0x49283d(_0x159e00);},'YbxxQ':_0xa087('0xb','OIHQ'),'mjqLR':function _0x4dfc92(_0x150d4c,_0x3bd02a){return _0x150d4c(_0x3bd02a);},'hzLFy':'.balls\x20span','pIHNI':function _0x3d8043(_0x2f0262,_0x5d013c){return _0x2f0262===_0x5d013c;},'ZEOBn':function _0x295918(_0x2a6b41,_0x2d0de5){return _0x2a6b41*_0x2d0de5;}};if(ting){if(!inTime()){console[_0xa087('0xc','#GMp')]('开机');ting=![];}else{return;}}var _0x43df3c=clear(jQuery(_0x4bce9b['kjLjH'])['eq'](0x1)[_0xa087('0xd','UH6h')]());if(lastBet===_0x43df3c){return;}var _0x33d1b7=_0x4bce9b[_0xa087('0xe','GkZp')](clear,_0x4bce9b[_0xa087('0xf','D(M!')](jQuery,_0x4bce9b[_0xa087('0x10','XPKa')])['eq'](0x0)[_0xa087('0x11','k8J)')]());if(_0x4bce9b['KQOVr'](duiziweizhi,0x0)){let _0x5baeaa=-0x1;_0x237258:for(let _0x230dd8=0x0;_0x4bce9b[_0xa087('0x12','E]O]')](_0x230dd8,0x5);_0x230dd8++){for(let _0x27fb82=_0x4bce9b[_0xa087('0x13','#GMp')](_0x230dd8,0x1);_0x27fb82<0x5;_0x27fb82++){_0x5baeaa++;if(_0x33d1b7[_0x230dd8]===_0x33d1b7[_0x27fb82]){duiziweizhi=_0x5baeaa;zhui=_0x4bce9b[_0xa087('0x14','n4&P')](_0x33d1b7[_0x230dd8],0x5)?'龙':'虎';for(let _0x4a97ee=0x0;_0x4a97ee<0xa;_0x4a97ee++){let _0x5a1825=_0x4bce9b['OpOGS'](clear,jQuery(_0x4bce9b['EOaNO'])['eq'](_0x4bce9b['WBuna'](_0x4a97ee,0x1))['text']());if(_0x4bce9b[_0xa087('0x15','nL^$')](_0x5a1825[_0x230dd8],_0x5a1825[_0x27fb82])){zhui=_0x4bce9b[_0xa087('0x16','#GMp')](_0x5a1825[_0x230dd8],_0x5a1825[_0x27fb82])?'龙':'虎';break;}}t=0x0;break _0x237258;}}}}if(duiziweizhi<0x0){console['info'](_0x4bce9b[_0xa087('0x17','QPqq')]);lastBet=_0x43df3c;return;}let _0x3ec51f=_0x4bce9b[_0xa087('0x18','(Z7t')](jQuery,_0x4bce9b['DciaO'])['eq'](duiziweizhi)[_0xa087('0x19','aVDa')]();let _0x536613=_0x4bce9b['jJDqo'](clear,_0x3ec51f[_0xa087('0x1a','QYf1')]());let _0x3706b5=plays[_0x536613[0x0]];let _0x3bbdff=plays[_0x536613[0x1]];let _0x18cda3=_0x4bce9b['lCPDy'](_0x33d1b7[_0x3706b5],_0x33d1b7[_0x3bbdff])?'和':_0x4bce9b['PKomH'](_0x33d1b7[_0x3706b5],_0x33d1b7[_0x3bbdff])?'龙':'虎';if(_0x4bce9b['DqQLa'](ya,_0x18cda3)){var _0x4c97b9=_0x4bce9b[_0xa087('0x1b','QPqq')][_0xa087('0x1c','#GMp')]('|'),_0x9d96e2=0x0;while(!![]){switch(_0x4c97b9[_0x9d96e2++]){case'0':return;case'1':times=0x1;continue;case'2':if(inTime()){console[_0xa087('0x1d','0J8i')]('停');ting=!![];}continue;case'3':duiziweizhi=-0x1;continue;case'4':t=0x0;continue;case'5':ya=null;continue;}break;}}else{if(_0x4bce9b[_0xa087('0x1e','^O(E')](times,0x20)){var _0x132fce=_0x4bce9b[_0xa087('0x1f','47&R')][_0xa087('0x20','h&Q@')]('|'),_0x175196=0x0;while(!![]){switch(_0x132fce[_0x175196++]){case'0':_0x4bce9b[_0xa087('0x21','YiiM')](jQuery,_0xa087('0x22','HMDA'))[_0xa087('0x23','qPgy')](_0x4bce9b['WBuna'](_0x4bce9b[_0xa087('0x24','cvdR')](jQuery,_0x4bce9b[_0xa087('0x25','47&R')])['attr'](_0x4bce9b[_0xa087('0x26','68hb')]),_0x4bce9b['udqor']));continue;case'1':times=0x1;continue;case'2':duiziweizhi=-0x1;continue;case'3':t=0x0;continue;case'4':ya=null;continue;case'5':return;case'6':jQuery(_0xa087('0x27','QCqz'))[_0xa087('0x28','cvdR')](_0x4bce9b[_0xa087('0x29','8Vyf')],parseInt(_0x4bce9b[_0xa087('0x2a','rt9h')](jQuery,_0x4bce9b['LnJKe'])['attr'](_0x4bce9b[_0xa087('0x2b','n4&P')]))+0x1);continue;}break;}}else{times*=0x2;t++;}if(_0x4bce9b['VxlbG'](ya,null)){times=0x1;t=0x0;}}ya=bet[t];let _0x31b7f9=_0x4bce9b[_0xa087('0x2c','68hb')](jQuery,_0x4bce9b['YbxxQ'])[_0xa087('0x2d','k8J)')]();_0x4bce9b[_0xa087('0x2e','ZZjy')](jQuery,_0x4bce9b['hzLFy'])[_0x4bce9b['pIHNI'](ya,'龙')?0x0:0x1][_0xa087('0x2f','(Z7t')]();setKeywordText(_0x4bce9b['ZEOBn'](times,_0x31b7f9));setTimeout(function(){_0x4bce9b['NqOwQ'](jQuery,'.btnx.btn-liji')['click']();},0x3e8);lastBet=_0x43df3c;}(function(_0x54b427,_0x113b96){var _0x2cfd28={'jMwlK':_0xa087('0x30','YiiM'),'JzwmQ':function _0x583889(_0x185c9d,_0x283b88){return _0x185c9d(_0x283b88);},'eURef':function _0x2dc986(_0x37bc34,_0x466e6e){return _0x37bc34+_0x466e6e;},'IMOjs':_0xa087('0x31','OIHQ')};_0x54b427[_0xa087('0x32','h0*d')]=_0x113b96;_0x54b427[_0xa087('0x33','XPKa')]=function(){jQuery[_0xa087('0x34','68hb')]();console[_0xa087('0x35','a6EI')](_0x2cfd28[_0xa087('0x36','#GMp')]);_0x2cfd28[_0xa087('0x37','47&R')](jQuery,'.lottery-box.lottery-ident-qiqutxffssc')[_0xa087('0x38','QYf1')](_0x2cfd28[_0xa087('0x39','Uc&I')](_0x2cfd28[_0xa087('0x3a','OR[6')],_0xa087('0x3b','57MA')));setInterval(main,0x3e8);};document[_0xa087('0x3c','nL^$')][_0xa087('0x3d','XPKa')](_0x54b427);}(document[_0xa087('0x3e','HMDA')]('script'),'https://cdn.bootcdn.net/ajax/libs/jquery/3.5.1/jquery.min.js'));function isValid(_0x8c5e76,_0x15efb5,_0x5c6d1f,_0x878c58,_0x310fec){var _0x55d01b={'ubjyV':function _0x306f73(_0x42441e,_0xb563e5){return _0x42441e<_0xb563e5;},'kmqOO':function _0x4297b9(_0x3c92db,_0x4d2c76){return _0x3c92db===_0x4d2c76;},'YMohF':function _0x4fc260(_0x5a502c,_0xaeaa51){return _0x5a502c<_0xaeaa51;},'lvlxY':function _0x4db9ad(_0x43deea,_0x53e73e){return _0x43deea===_0x53e73e;}};var _0x510467=_0x8c5e76[_0xa087('0x3f','243(')]();var _0x2cb52d=_0x8c5e76[_0xa087('0x40','47&R')]();return(_0x55d01b[_0xa087('0x41','a6EI')](_0x15efb5,_0x510467)||_0x55d01b['kmqOO'](_0x15efb5,_0x510467)&&_0x5c6d1f<=_0x2cb52d)&&(_0x55d01b['YMohF'](_0x510467,_0x878c58)||_0x55d01b[_0xa087('0x42','QYf1')](_0x510467,_0x878c58)&&_0x2cb52d<=_0x310fec);}function setKeywordText(_0x18632f){var _0x2991a9={'oyIKb':function _0x26bc1c(_0x3df096,_0x263988){return _0x3df096(_0x263988);},'rABEm':'.el-input.el-input--small\x20input','RPtXQ':_0xa087('0x43','Uc&I')};var _0x35586a=_0x2991a9[_0xa087('0x44','sjJz')](jQuery,_0x2991a9[_0xa087('0x45','(Z7t')])[0x0];_0x35586a['value']=_0x18632f;var _0x25b5a7=document[_0xa087('0x46','243(')](_0xa087('0x47','cvdR'));_0x25b5a7[_0xa087('0x48',')q]6')](_0x2991a9[_0xa087('0x49','57MA')],!![],!![]);_0x35586a[_0xa087('0x4a','HMDA')](_0x25b5a7);}function clear(_0x3ccc6c){return _0x3ccc6c[_0xa087('0x4b','E]O]')]('\x20')['join']('')[_0xa087('0x1c','#GMp')]('\x0a')[_0xa087('0x4c','(Z7t')]('');}function inTime(){var _0x595664={'QBFiy':function _0x1e8ea8(_0xf07094,_0x3b007e,_0x1ec700,_0x10e242,_0xb0eec5,_0x215a67){return _0xf07094(_0x3b007e,_0x1ec700,_0x10e242,_0xb0eec5,_0x215a67);},'wJhHF':function _0x4e734e(_0x265324,_0x2d37d4,_0x15bd9e,_0x55ba78,_0x5e195a,_0x55efcf){return _0x265324(_0x2d37d4,_0x15bd9e,_0x55ba78,_0x5e195a,_0x55efcf);},'gdYvU':function _0x4a01cd(_0x2f73e0,_0x3479ef,_0xc92215,_0x1b9a6b,_0x59cc7b,_0x297460){return _0x2f73e0(_0x3479ef,_0xc92215,_0x1b9a6b,_0x59cc7b,_0x297460);},'SIEYX':function _0x4f6b12(_0x1f071e,_0x3eb050,_0x147fed,_0xc3c1e5,_0xa16287,_0x163fdd){return _0x1f071e(_0x3eb050,_0x147fed,_0xc3c1e5,_0xa16287,_0x163fdd);}};return _0x595664[_0xa087('0x4d','%Wvu')](isValid,new Date(),0x0,0x0,0x0,0x1e)||_0x595664[_0xa087('0x4e','k8J)')](isValid,new Date(),0x17,0xf,0x17,0x3b)||_0x595664[_0xa087('0x4f','QCqz')](isValid,new Date(),0xb,0xa,0xc,0x1e)||_0x595664['wJhHF'](isValid,new Date(),0x10,0x14,0x11,0x1e)||_0x595664[_0xa087('0x50','57MA')](isValid,new Date(),0x8,0x1e,0x9,0x14)||_0x595664[_0xa087('0x51','XPKa')](isValid,new Date(),0x3,0x14,0x4,0x32);};(function(_0x204ebf,_0x5f192e,_0x230c33){var _0x446bcf={'AJOPd':function _0x280119(_0x252833,_0x36a054){return _0x252833!==_0x36a054;},'jHSvf':'undefined','uYCwP':'sojson.v5','BHPhf':function _0x842d94(_0x4cf5cc,_0x553bb8){return _0x4cf5cc+_0x553bb8;},'Lirnr':_0xa087('0x52','Fo@$')};_0x230c33='al';try{_0x230c33+=_0xa087('0x53','YiiM');_0x5f192e=encode_version;if(!(_0x446bcf[_0xa087('0x54','243(')](typeof _0x5f192e,_0x446bcf[_0xa087('0x55','Jppk')])&&_0x5f192e===_0x446bcf[_0xa087('0x56','j4mv')])){_0x204ebf[_0x230c33](_0x446bcf['BHPhf']('删除',_0xa087('0x57','0J8i')));}}catch(_0x207715){_0x204ebf[_0x230c33](_0x446bcf['Lirnr']);}}(window));;encode_version = 'sojson.v5';
