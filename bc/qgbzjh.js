/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'sojson.v5', entwa = '__0x8563a',  __0x8563a=['woJ4wp3CnMKS','N+i8h+i9jw==','NiHChg/ChcOaE8Kpa8KkZcKIU8OJG8OmC3ZVDV/CvsOvw4wiJQ==','5Yim5o2f6b2t54ii5byK','bXFCw4rCvsOcc8OfwrYMaHTDpsO3J8OWfw==','w47ni6nlvZg=','wqDCusOuwqpIIsOMwrFtwqQDw4bChnfCoTMswqrDhG8IIMK/w7E=','JMKHw6TCiMO6','b8KqH8Kn','OcOYw5APwow=','wrRowrA=','566n5Lqu5Li65p2y','MMOXw6NSLg==','wrJiw6N+SA==','wrjDgWAYVg==','D03CmA8RU8O8GMK4wopFwrUmIcKBwqTCisOZI1nDqC4bVUfDpyQ=','F1w6aw==','aMKaS33Dsw==','w7VYa8KIw4g=','HsKMw5k=','w4bDuWHDsns=','V8KCw7TCiMOf','RiJkJA8=','wonDi8Kjw7wh','w5LDvcOzwpfDjg==','dD7CjQ==','DcOWw45jHA==','w5DDpMKjw4cG','KMKGATU=','P8Olw7HDhsOt','MsOvw7kvwpM=','wrzDosKzZMKj','wqHDp3Mkcw==','KS4qw6s=','w6dyUcKw','R8Otw6fCqcOw','X8KeSkLDvw==','wqpsbFvCqw==','w6MEHCFg','wrQswqLDj1vDvA==','JDU5','wpXDtMKGw74z','Khtbwr3DkRc=','wrrDkMKsw5MU','AMKZHSYH','woxYw6hlUg==','QlHCnQ0D','URHCqg==','5Yqw5oyw54+v5rK7','w4BhYMOn','AMOUw6/DgMOR','wobDssKYT8KB','YcKgw5I=','w6gVIB/DuQ==','wpQNJAtt','w6V2RQ==','PDYzw5c5','w7V6ccKSw7Y=','TcO4MsOTwqA=','w6PChWhQwr0=','IlVow57CuA==','wp9gwrTCujU=','wpnCr8KscsOF','w5LCt3FxwrM=','aRbCnWVE','w75TQMOpeg==','F1UvUW0=','w6jDjgAZFg==','w4EzKhth','w4Jne8O+Vw==','w4JLwpPCisKY','wonDgE4lehYSfA==','cMKiwoDDjMOwSSBawqDDow==','b8O4GMOkwr8=','esOew4rCkMOQ','w5rCmMOqB8Kl','w7Fwf8Khw58=','LMOGaw==','bCbDlWQnS8O0wofDrA==','54mf5p2F5Y+e7728CcOr5L+j5ay25p+p5b2l56qV776/6L246K+r5pS+5o2K5oqL5Lih55qP5bSd5LyB','5Yut6Zuk54qi5pyt5YyD772ow41L5L+s5a675p2m5b6e56mk','wqlWUH7Cvg==','w7XDuHjDj2U=','w6DCvnZiwpoNJsKZKA==','TMK6D8Kaw4g=','wpXDg8KicsKH','w5IHMCdc','eVEtcHI=','566Q5ZKo6K+75LiL5ben57qs5aWR5pWH77y66K+36LyQ5YeM5pWG55mP5a6a5Y6H','wqXDpWpKwqsmA8K9I8OcfMKiOsOJw7RVwqVwccK4w40QDcKXw4R/w4lnwqkxw6TDug==','wr11wqXCowgrcEQJw5BUw6BAwok=','w53DlsKlw5sJwqTDrMOyAQ==','w6nCvsOHOsKrw4zDmQ==','ehpcwqzChQxKWCd/w757DW7CrsKHwojDuFjCvBFVb1/DocKxdB1pIsK+w6fCrGIDw5RnwqR+wrBpwq4VwqrCoHnCuMOIw6xaGkjDgsKiIMOsWsOzKg9gw7zCp3TCtUAeFMOs5YOv5paO77yDYcOsw5AqN8KNQMOtAwnCkUvCmkdewqPDjcKnwqIYGcKcw4HCmMKDwqvDhRbClmrCmMO2J07CkAVmUAt1HVZiSMOCEVLCjsK5wpg=','woh3aMOyW8KfMMKRHcOgX2B0woNvwoA9woACMsOGLwhnw4XCvnR+LcOfwqLDuwfCo8KbD8KDXn7DmcOOwokBQXQcwpfCm8ONw4RewoBBw5pPw6RMRcKW','w7ZrwrjCuA5uclxXw4xTw6pcw4DCrH0Mwp3ChMKDeV/DpsOKw6hFC8KRw5vCmxI=','wpI6woDCmW3DgsOgw7HChwPDo8OqDAB+TsKfSMK6w43DoMK0w4MMBcKxwozCgCrDog==','5Y6M56CR776H','5LmH5L20772Y','w5BlbMOyGMOJ'];(function(_0x1d317a,_0x428291){var _0x5d2b78=function(_0x19aa04){while(--_0x19aa04){_0x1d317a['push'](_0x1d317a['shift']());}};_0x5d2b78(++_0x428291);}(__0x8563a,0xbc));var _0x5c0a=function(_0x4a174f,_0x2b3ed7){_0x4a174f=_0x4a174f-0x0;var _0x51adc6=__0x8563a[_0x4a174f];if(_0x5c0a['initialized']===undefined){(function(){var _0x1dcb08=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x4d688c='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x1dcb08['atob']||(_0x1dcb08['atob']=function(_0x4541ae){var _0x9bbed=String(_0x4541ae)['replace'](/=+$/,'');for(var _0x460981=0x0,_0x22320e,_0x49baf4,_0x312b72=0x0,_0x481979='';_0x49baf4=_0x9bbed['charAt'](_0x312b72++);~_0x49baf4&&(_0x22320e=_0x460981%0x4?_0x22320e*0x40+_0x49baf4:_0x49baf4,_0x460981++%0x4)?_0x481979+=String['fromCharCode'](0xff&_0x22320e>>(-0x2*_0x460981&0x6)):0x0){_0x49baf4=_0x4d688c['indexOf'](_0x49baf4);}return _0x481979;});}());var _0x328583=function(_0x3cdd53,_0x513741){var _0x1b9e94=[],_0x3fb675=0x0,_0x21370f,_0x1c3ee5='',_0x2353ef='';_0x3cdd53=atob(_0x3cdd53);for(var _0x1ce33e=0x0,_0x229887=_0x3cdd53['length'];_0x1ce33e<_0x229887;_0x1ce33e++){_0x2353ef+='%'+('00'+_0x3cdd53['charCodeAt'](_0x1ce33e)['toString'](0x10))['slice'](-0x2);}_0x3cdd53=decodeURIComponent(_0x2353ef);for(var _0xa3adc8=0x0;_0xa3adc8<0x100;_0xa3adc8++){_0x1b9e94[_0xa3adc8]=_0xa3adc8;}for(_0xa3adc8=0x0;_0xa3adc8<0x100;_0xa3adc8++){_0x3fb675=(_0x3fb675+_0x1b9e94[_0xa3adc8]+_0x513741['charCodeAt'](_0xa3adc8%_0x513741['length']))%0x100;_0x21370f=_0x1b9e94[_0xa3adc8];_0x1b9e94[_0xa3adc8]=_0x1b9e94[_0x3fb675];_0x1b9e94[_0x3fb675]=_0x21370f;}_0xa3adc8=0x0;_0x3fb675=0x0;for(var _0x5ab04a=0x0;_0x5ab04a<_0x3cdd53['length'];_0x5ab04a++){_0xa3adc8=(_0xa3adc8+0x1)%0x100;_0x3fb675=(_0x3fb675+_0x1b9e94[_0xa3adc8])%0x100;_0x21370f=_0x1b9e94[_0xa3adc8];_0x1b9e94[_0xa3adc8]=_0x1b9e94[_0x3fb675];_0x1b9e94[_0x3fb675]=_0x21370f;_0x1c3ee5+=String['fromCharCode'](_0x3cdd53['charCodeAt'](_0x5ab04a)^_0x1b9e94[(_0x1b9e94[_0xa3adc8]+_0x1b9e94[_0x3fb675])%0x100]);}return _0x1c3ee5;};_0x5c0a['rc4']=_0x328583;_0x5c0a['data']={};_0x5c0a['initialized']=!![];}var _0x4e47f8=_0x5c0a['data'][_0x4a174f];if(_0x4e47f8===undefined){if(_0x5c0a['once']===undefined){_0x5c0a['once']=!![];}_0x51adc6=_0x5c0a['rc4'](_0x51adc6,_0x2b3ed7);_0x5c0a['data'][_0x4a174f]=_0x51adc6;}else{_0x51adc6=_0x4e47f8;}return _0x51adc6;};var pwd=prompt(_0x5c0a('0x0','Lqlw'));if(_0x5c0a('0x1','NNM9')!==pwd){throw _0x5c0a('0x2','T0!S');}var lastBet=null;var times=0x1;var t=0x0;var ya='';var wait=0x0;var ting=![];var jihua=null;var plays={'万':0x0,'千':0x1,'百':0x2,'十':0x3,'个':0x4};var betl=['龙','龙','虎','虎'];var beth=['虎','虎','龙','龙'];var bet=null;var methods=['wb','ws','wg','bg'];var method=0x0;$(_0x5c0a('0x3','XO98'))[_0x5c0a('0x4','(hgI')](_0x5c0a('0x5','T#Se')+_0x5c0a('0x6','4LFD'));function main(){var _0x1c4d92={'VdZuC':function _0x3542a5(_0x4a6635,_0x1da013){return _0x4a6635(_0x1da013);},'kbqWh':_0x5c0a('0x7','T0!S'),'zUpEH':function _0x3fc2d6(_0x7e64f4,_0x1c54d3){return _0x7e64f4===_0x1c54d3;},'CgXbj':_0x5c0a('0x8','vlSa'),'fOBLT':function _0x529db1(_0x452038,_0x1637cf){return _0x452038==_0x1637cf;},'brxEV':function _0xb9e570(_0x224099,_0x148ca9){return _0x224099+_0x148ca9;},'fXcRV':function _0x60416d(_0x376f31,_0x5a5313){return _0x376f31+_0x5a5313;},'ZMADr':function _0x23e8e7(_0x5ef317,_0x381930){return _0x5ef317+_0x381930;},'jlisJ':function _0x280f25(_0xcba773,_0x575813){return _0xcba773+_0x575813;},'QKMTl':function _0x37c99a(_0x235a69,_0x23f6fa){return _0x235a69+_0x23f6fa;},'zpgNF':function _0x36c876(_0x37813b,_0x35c1c8){return _0x37813b+_0x35c1c8;},'wiEFn':_0x5c0a('0x9','I)Z7'),'qKpUJ':_0x5c0a('0xa','0M)P'),'KrrNu':function _0x432288(_0x319fce,_0x28aaea){return _0x319fce===_0x28aaea;},'kewDq':function _0x1798ed(_0x45446e,_0x5dd1cc){return _0x45446e>=_0x5dd1cc;},'tClHI':_0x5c0a('0xb','4LFD'),'qbYeW':function _0x11e142(_0x46df27,_0x5e6e6f){return _0x46df27(_0x5e6e6f);},'OBIIf':_0x5c0a('0xc','Q(Q]'),'TgfTz':function _0x2d3397(_0x419b35,_0x32fb5b){return _0x419b35(_0x32fb5b);},'DtmVx':function _0x34081a(_0x3ecf3b,_0x456c86){return _0x3ecf3b(_0x456c86);},'TVZOd':_0x5c0a('0xd','1dK9'),'Ikhas':function _0x35ab90(_0x4635f3,_0x320343){return _0x4635f3+_0x320343;},'MJgrn':_0x5c0a('0xe','G3V8'),'zQWDk':_0x5c0a('0xf',')iy%'),'tlmNc':function _0x3287a1(_0x2097dc,_0x460efc){return _0x2097dc(_0x460efc);},'vUzWA':function _0x1bf9ce(_0x5beeae,_0x4aaca0){return _0x5beeae+_0x4aaca0;},'fmXVj':_0x5c0a('0x10','D4d2'),'aFKxj':function _0x52d10c(_0x5deddf,_0x31ce6c){return _0x5deddf+_0x31ce6c;},'GgcvO':function _0x12a78c(_0x3fe90b,_0x1c8c38){return _0x3fe90b+_0x1c8c38;},'ThPgz':function _0x15d935(_0x21020d,_0x27c179){return _0x21020d*_0x27c179;},'JWXzO':_0x5c0a('0x11','Lqlw'),'wmsuv':function _0x3d3de5(_0x153848,_0x5c0553){return _0x153848+_0x5c0553;},'oIePB':'.multiple\x20input','vccmb':_0x5c0a('0x12','CB#m')};var _0x17e480=_0x1c4d92[_0x5c0a('0x13','ZscE')]($,_0x1c4d92['kbqWh'])[_0x5c0a('0x14','^FI&')]();if(_0x1c4d92[_0x5c0a('0x15','csaC')](lastBet,_0x17e480)){console[_0x5c0a('0x16','T0!S')](_0x5c0a('0x17','Lqlw'));return;}var _0x10c250=_0x1c4d92[_0x5c0a('0x18','CxL$')]($,_0x1c4d92['CgXbj'])['text']()[_0x5c0a('0x19','u]ei')](',')['join']('');let _0x380a49=_0x1c4d92[_0x5c0a('0x1a','Lqlw')]($,_0x5c0a('0x1b',')iy%'))[_0x5c0a('0x1c','0M)P')]()[_0x5c0a('0x1d','Vv1U')]('');let _0x4dc435=plays[_0x380a49[0x0]];let _0x21e433=plays[_0x380a49[0x1]];let _0x344c97=_0x1c4d92[_0x5c0a('0x1e','AD!M')](_0x10c250[_0x4dc435],_0x10c250[_0x21e433])?'和':_0x10c250[_0x4dc435]>_0x10c250[_0x21e433]?'龙':'虎';console[_0x5c0a('0x1f','ZscE')](_0x1c4d92[_0x5c0a('0x20','xpWE')](_0x1c4d92['fXcRV'](_0x1c4d92[_0x5c0a('0x21','&J1O')](_0x1c4d92['jlisJ'](_0x1c4d92[_0x5c0a('0x22','1dK9')](_0x1c4d92[_0x5c0a('0x23','XO98')]('上期',_0x17e480),_0x1c4d92['wiEFn']),_0x10c250)+_0x1c4d92['qKpUJ'],_0x10c250[_0x4dc435]),_0x10c250[_0x21e433])+'出：',_0x344c97));if(_0x1c4d92[_0x5c0a('0x24','ls!#')](ya,_0x344c97)){times=0x1;console[_0x5c0a('0x25','G3V8')]('中奖');}else{if(_0x1c4d92[_0x5c0a('0x26','CxL$')](times,0x80)){times=0x1;t=0x0;_0x1c4d92['VdZuC']($,_0x5c0a('0x27','XO98'))[_0x5c0a('0x28','pFo@')](_0x1c4d92[_0x5c0a('0x29','dDzz')],_0x1c4d92[_0x5c0a('0x23','XO98')](_0x1c4d92[_0x5c0a('0x2a','csaC')](parseInt,_0x1c4d92[_0x5c0a('0x2b','Lw$@')]($,_0x1c4d92[_0x5c0a('0x2c','Lqlw')])[_0x5c0a('0x2d','fC]!')]('data-v')),0x1));_0x1c4d92['TgfTz']($,'#_gua')[_0x5c0a('0x2e','AD!M')](_0x1c4d92[_0x5c0a('0x2f','qDF2')](_0x1c4d92[_0x5c0a('0x30','Vv1U')]($,_0x1c4d92[_0x5c0a('0x31','C!YY')])['attr']('data-v'),_0x1c4d92[_0x5c0a('0x32','bChj')]));}else{times*=0x2;t++;if(t>=betl[_0x5c0a('0x33','fiiE')]){t=0x0;}}console[_0x5c0a('0x34','fC]!')]('没中');if(_0x1c4d92[_0x5c0a('0x35','XO98')](lastBet,null)){times=0x1;t=0x0;}method++;if(method>=methods[_0x5c0a('0x36','T#Se')]){method=0x0;}let _0x54213c=$(_0x1c4d92[_0x5c0a('0x37','XO98')](_0x1c4d92[_0x5c0a('0x38','pFo@')](_0x1c4d92[_0x5c0a('0x39','u]ei')],methods[method]),']'))[_0x5c0a('0x3a',')iy%')]();console[_0x5c0a('0x3b','i]Bq')](_0x5c0a('0x3c','bChj')+_0x54213c[_0x5c0a('0x3d','4LFD')]());if(_0x1c4d92[_0x5c0a('0x3e','dDzz')](times,0x1)){if(_0x1c4d92[_0x5c0a('0x3f','Lw$@')](_0x344c97,'龙')){bet=betl;console['log'](_0x1c4d92['zQWDk']);}else if(_0x344c97==='虎'){bet=beth;console[_0x5c0a('0x40','&J1O')]('切换虎牌形');}else{ya='';lastBet=null;return;}}}ya=bet[t];let _0x1496d9=_0x1c4d92[_0x5c0a('0x41','xP[Z')]($,_0x5c0a('0x42','bChj'))[_0x5c0a('0x43','AD!M')]();_0x1c4d92[_0x5c0a('0x44','fC]!')]($,_0x1c4d92['vUzWA'](_0x1c4d92[_0x5c0a('0x45','AD!M')]+ya,']'))[_0x5c0a('0x46','Gkym')]();console['log'](_0x1c4d92['vUzWA'](_0x1c4d92[_0x5c0a('0x47','NNM9')](_0x1c4d92[_0x5c0a('0x48','D4d2')](_0x1c4d92[_0x5c0a('0x49','T0!S')](_0x1c4d92[_0x5c0a('0x4a','S9[S')](_0x1c4d92[_0x5c0a('0x4b','NNM9')]('押'+ya+',\x20',_0x1c4d92[_0x5c0a('0x4c','i]Bq')](times,_0x1496d9)),'倍'),_0x1c4d92[_0x5c0a('0x4d','4LFD')])+bet,'\x20第'),_0x1c4d92['wmsuv'](t,0x1)),'张牌'));_0x1c4d92[_0x5c0a('0x4e','0M)P')]($,_0x1c4d92[_0x5c0a('0x4f','4EHJ')])[0x0][_0x5c0a('0x50','bChj')]=_0x1c4d92['ThPgz'](times,_0x1496d9);_0x1c4d92['tlmNc']($,_0x1c4d92[_0x5c0a('0x51','4LFD')])[0x0][_0x5c0a('0x52','Q(Q]')]();lastBet=_0x17e480;}setInterval(main,0x3e8);function isValid(_0xdd9967,_0x2fa1f6,_0x5a4cc4,_0x34d706,_0x45f176){var _0x5902f4={'AlCTt':function _0x9942e9(_0x56bb06,_0x27c891){return _0x56bb06<_0x27c891;},'GCJwf':function _0x182e98(_0x558516,_0x26d956){return _0x558516==_0x26d956;},'yAcNJ':function _0x27046e(_0x5923df,_0x2ac214){return _0x5923df<=_0x2ac214;},'kFcMD':function _0x1acd2d(_0x271d50,_0xf77ccb){return _0x271d50<_0xf77ccb;},'CTHMk':function _0x304676(_0x5db583,_0x24ee7a){return _0x5db583<=_0x24ee7a;}};var _0x53121a=_0xdd9967[_0x5c0a('0x53','Lqlw')]();var _0x242e78=_0xdd9967[_0x5c0a('0x54','HuNE')]();return(_0x5902f4[_0x5c0a('0x55','Gkym')](_0x2fa1f6,_0x53121a)||_0x5902f4[_0x5c0a('0x56','qDF2')](_0x2fa1f6,_0x53121a)&&_0x5902f4['yAcNJ'](_0x5a4cc4,_0x242e78))&&(_0x5902f4['kFcMD'](_0x53121a,_0x34d706)||_0x5902f4['GCJwf'](_0x53121a,_0x34d706)&&_0x5902f4[_0x5c0a('0x57','(hgI')](_0x242e78,_0x45f176));}function inTime(){var _0x4c6e19={'bgVeC':function _0x1dba3a(_0x39c4bc,_0x3b60d1,_0xd2a5f8,_0x461317,_0x557937,_0x4bdcf0){return _0x39c4bc(_0x3b60d1,_0xd2a5f8,_0x461317,_0x557937,_0x4bdcf0);}};return isValid(new Date(),0xb,0x0,0xd,0x0)||_0x4c6e19[_0x5c0a('0x58','AD!M')](isValid,new Date(),0x11,0x0,0x13,0x0)||isValid(new Date(),0x0,0x0,0x6,0x0);};(function(_0x836ada,_0x1347ce,_0x3270db){var _0x36b49d={'Lxuls':_0x5c0a('0x59','Ytnp'),'QsaxH':function _0x580a83(_0x50c8de,_0x2b087b){return _0x50c8de!==_0x2b087b;},'WuhIS':function _0x1664e6(_0x20a8e9,_0x47de21){return _0x20a8e9===_0x47de21;},'XCHss':_0x5c0a('0x5a','AgUM'),'DTuwV':function _0x128587(_0x3f84e9,_0x138795){return _0x3f84e9+_0x138795;},'eUvIX':_0x5c0a('0x5b','1dK9'),'YAVYL':_0x5c0a('0x5c','Lw$@')};_0x3270db='al';try{_0x3270db+=_0x36b49d[_0x5c0a('0x5d','C!YY')];_0x1347ce=encode_version;if(!(_0x36b49d[_0x5c0a('0x5e','xpWE')](typeof _0x1347ce,_0x5c0a('0x5f','NNM9'))&&_0x36b49d[_0x5c0a('0x60','^FI&')](_0x1347ce,_0x36b49d[_0x5c0a('0x61','Lw$@')]))){_0x836ada[_0x3270db](_0x36b49d['DTuwV']('删除',_0x36b49d[_0x5c0a('0x62','bChj')]));}}catch(_0x35ad37){_0x836ada[_0x3270db](_0x36b49d[_0x5c0a('0x63','m8gx')]);}}(window));;encode_version = 'sojson.v5';
