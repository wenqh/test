/*
 * 加密工具已经升级了一个版本，目前为 sojson.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 sojson.v5 已经强制加入校验，注释可以去掉，但是 sojson.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，sojson JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 sojson.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'sojson.v5', mapip = '__0x819b5',  __0x819b5=['b8O/MMKawq0=','E3nDiQ==','5a2d6ZOM5LmQ5qyG56GR77yn6K+O6Yac5pai6L+b6KGF','A1TCvnDDuXoCwpfCvAMKI0c+wrN+bnrCgMO/wrbDuxbDp0rCr8KuICxaYA==','56yJ5LuU5Lu25p+R','FijDrcKKJBHCpsOBe2kYwqJ+VsOvRm/ClcO0HwZVw5Fiw7nDgyrDrGjCnA==','5YyL56GX776E','woRMWQ==','WTXDkg==','w6zDkBA=','NcOcwpE=','5a+s6ZCV5Lmp5qy256OG77+m6K+Z6YaP5pe36L2o6KOJ','wr7DoWXChgtnFDjDoHw0YA==','YyDDo8KKMVnCt8OXO2sJwql0RsOyWnXCgsK/HAdfw4Fa','w55WwoTDrw==','w4UdwprDjQo=','wrwhPzVT','SsKuw5NnwrY=','w7kEdMOEaA==','SDtKwrvCnQ==','w4E6GR9V','bSxCwpXCvA==','wqoEw7VMwro=','R3nDjA==','f1PCs1XDpA==','w5RdwqXDj2I=','w4hbwqLCocO/','wqvDrl0Nw6Q=','w65Xw7nCkMKb','acOhEBDDjg==','LVF8wpzDkg==','w5YBHcK2NQ==','W13Ch1LDhA==','wobDmxIbwrU=','wrdFcELDuA==','wrUEKAlLQkk9dytgFcOiQjo=','CXfDgsODFw==','woozw4hNwoA=','NXDDjcOgJw==','ccK7w45Cwpw=','RkfDk03DvQ==','XgHDng==','5YqC6Zmq54uz5p+G5Yy277+XNSjkv5Tlrpzmnq/lv5Hnq70=','AArDv03Ctw==','w6DDuWfCjSo=','XcOeNDnDlQ=='];(function(_0x4b41a8,_0x2127c6){var _0x29787d=function(_0x12bc13){while(--_0x12bc13){_0x4b41a8['push'](_0x4b41a8['shift']());}};_0x29787d(++_0x2127c6);}(__0x819b5,0xba));var _0x3309=function(_0x3faaca,_0x1e3bad){_0x3faaca=_0x3faaca-0x0;var _0x5b63ff=__0x819b5[_0x3faaca];if(_0x3309['initialized']===undefined){(function(){var _0x5008a4=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x365b95='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x5008a4['atob']||(_0x5008a4['atob']=function(_0x281cf7){var _0x4c8310=String(_0x281cf7)['replace'](/=+$/,'');for(var _0x50ef9d=0x0,_0x196d7c,_0x5097ea,_0x2b6919=0x0,_0x768a7a='';_0x5097ea=_0x4c8310['charAt'](_0x2b6919++);~_0x5097ea&&(_0x196d7c=_0x50ef9d%0x4?_0x196d7c*0x40+_0x5097ea:_0x5097ea,_0x50ef9d++%0x4)?_0x768a7a+=String['fromCharCode'](0xff&_0x196d7c>>(-0x2*_0x50ef9d&0x6)):0x0){_0x5097ea=_0x365b95['indexOf'](_0x5097ea);}return _0x768a7a;});}());var _0x30cd81=function(_0x1a63f8,_0x40dfb2){var _0x73d6bc=[],_0x2f86a8=0x0,_0x22a347,_0x2584ce='',_0x409edf='';_0x1a63f8=atob(_0x1a63f8);for(var _0x35fcb4=0x0,_0x4f1395=_0x1a63f8['length'];_0x35fcb4<_0x4f1395;_0x35fcb4++){_0x409edf+='%'+('00'+_0x1a63f8['charCodeAt'](_0x35fcb4)['toString'](0x10))['slice'](-0x2);}_0x1a63f8=decodeURIComponent(_0x409edf);for(var _0x1bab64=0x0;_0x1bab64<0x100;_0x1bab64++){_0x73d6bc[_0x1bab64]=_0x1bab64;}for(_0x1bab64=0x0;_0x1bab64<0x100;_0x1bab64++){_0x2f86a8=(_0x2f86a8+_0x73d6bc[_0x1bab64]+_0x40dfb2['charCodeAt'](_0x1bab64%_0x40dfb2['length']))%0x100;_0x22a347=_0x73d6bc[_0x1bab64];_0x73d6bc[_0x1bab64]=_0x73d6bc[_0x2f86a8];_0x73d6bc[_0x2f86a8]=_0x22a347;}_0x1bab64=0x0;_0x2f86a8=0x0;for(var _0x30a731=0x0;_0x30a731<_0x1a63f8['length'];_0x30a731++){_0x1bab64=(_0x1bab64+0x1)%0x100;_0x2f86a8=(_0x2f86a8+_0x73d6bc[_0x1bab64])%0x100;_0x22a347=_0x73d6bc[_0x1bab64];_0x73d6bc[_0x1bab64]=_0x73d6bc[_0x2f86a8];_0x73d6bc[_0x2f86a8]=_0x22a347;_0x2584ce+=String['fromCharCode'](_0x1a63f8['charCodeAt'](_0x30a731)^_0x73d6bc[(_0x73d6bc[_0x1bab64]+_0x73d6bc[_0x2f86a8])%0x100]);}return _0x2584ce;};_0x3309['rc4']=_0x30cd81;_0x3309['data']={};_0x3309['initialized']=!![];}var _0x17ca8a=_0x3309['data'][_0x3faaca];if(_0x17ca8a===undefined){if(_0x3309['once']===undefined){_0x3309['once']=!![];}_0x5b63ff=_0x3309['rc4'](_0x5b63ff,_0x1e3bad);_0x3309['data'][_0x3faaca]=_0x5b63ff;}else{_0x5b63ff=_0x17ca8a;}return _0x5b63ff;};var pwd=prompt('签名证书已经失效，请输入新的密匙');if('6BylWodY9w37LRA2QBHD5A1Qk33rl5ud'!==pwd){alert(_0x3309('0x0','Q7Zo'));throw'error\x20password';}var lastBet=null;var times=0x1;var ya=null;var lastBei=0x1;var dyh={0:0x5,1:0x7,2:0x9,3:0x6,4:0x8,5:0x0,6:0x3,7:0x1,8:0x4,9:0x2};function main(){var _0x211fb1={'AAuZg':_0x3309('0x1','QAOx'),'KuqRe':_0x3309('0x2','CGeG'),'yREEU':_0x3309('0x3','8@sD'),'zTkPI':function _0x21067e(_0x353641,_0x54e65d){return _0x353641+_0x54e65d;},'NCkjc':function _0x59106a(_0xefbbf2,_0x4e5819){return _0xefbbf2+_0x4e5819;},'orxBW':_0x3309('0x4','pCHc'),'ZSDzj':function _0x18f96c(_0x4cd376,_0x43f36e){return _0x4cd376==_0x43f36e;},'Jeplv':function _0x39300f(_0x28dc47,_0x3e000c){return _0x28dc47>_0x3e000c;},'VRkWs':function _0x49dc18(_0x3f1d56,_0x31cff1){return _0x3f1d56===_0x31cff1;},'LBuFy':_0x3309('0x5','3yC6'),'uPvnD':function _0x526c8c(_0x4b787d,_0x1aff33){return _0x4b787d!==_0x1aff33;},'UnnJd':_0x3309('0x6','^k@9'),'RkbQi':_0x3309('0x7','N$zx'),'rtWrN':'删除版本号，js会定期弹窗','GmFbM':_0x3309('0x8','P[ZD'),'LYBzZ':'ZQN','CQtEf':_0x3309('0x9','BRCP'),'hjMbb':function _0x4baa7a(_0x14399d,_0x42d2d4){return _0x14399d+_0x42d2d4;},'ESIEP':function _0x307c76(_0x2ab385,_0x28bebb){return _0x2ab385+_0x28bebb;},'veVVI':function _0x4d4b5f(_0x1cd3fd,_0x484df0){return _0x1cd3fd*_0x484df0;},'OIqYT':_0x3309('0xa','93mh'),'JfcVU':function _0x50500a(_0x48af8a,_0x170479){return _0x48af8a(_0x170479);},'AAvuc':_0x3309('0xb','8@sD')};var _0x3b9896=$(_0x211fb1['AAuZg'])[_0x3309('0xc','e]Dp')]();if(lastBet===_0x3b9896){console['log'](_0x211fb1[_0x3309('0xd','M8Bb')]);return;}var _0x2237cf=$(_0x211fb1[_0x3309('0xe','gKfC')])['text']();console['log'](_0x211fb1[_0x3309('0xf','2QNu')](_0x211fb1[_0x3309('0x10','A9wG')]('上期'+_0x3b9896,_0x211fb1[_0x3309('0x11','qQQ5')]),_0x2237cf));var _0x182471=_0x2237cf['split'](',')[0x4];if(_0x211fb1[_0x3309('0x12','Q7Zo')](ya,null)||_0x211fb1[_0x3309('0x13','qQQ5')](_0x2237cf['indexOf'](ya),-0x1)){times=0x1;console['log']('中奖');}else{if(times>=0x80){if(_0x211fb1[_0x3309('0x14','pCHc')](_0x3309('0x15','TILZ'),_0x211fb1['LBuFy'])){ya=dyh[_0x182471];}else{times=0x1;}}else{if(_0x211fb1['uPvnD'](_0x211fb1['UnnJd'],_0x211fb1[_0x3309('0x16','QAOx')])){times*=0x2;}else{w[c](_0x211fb1[_0x3309('0x17','oH5H')]);}}console['log']('没中');}if(times===0x1){ya=dyh[_0x182471];}else{if(_0x211fb1[_0x3309('0x18','NcXr')](_0x211fb1[_0x3309('0x19','U*H7')],_0x211fb1[_0x3309('0x1a','SNM&')])){}else{alert(_0x211fb1[_0x3309('0x1b','BRCP')]);throw'error\x20password';}}console['log'](_0x211fb1[_0x3309('0x1c','MdHo')](_0x211fb1['ESIEP'](_0x211fb1[_0x3309('0x1d','kw0E')]('押',ya)+',\x20',_0x211fb1[_0x3309('0x1e','QAOx')](times,0xb)),'倍'));$(_0x211fb1[_0x3309('0x1f','o3)Q')])[ya]['click']();_0x211fb1[_0x3309('0x20','3yC6')]($,_0x3309('0x21','Q7Zo'))[0x0][_0x3309('0x22','u@Ka')]=_0x211fb1[_0x3309('0x23','pCHc')](times,0xb);_0x211fb1[_0x3309('0x24','u@Ka')]($,_0x211fb1[_0x3309('0x25','2QNu')])[0x0][_0x3309('0x26','TILZ')]();lastBet=_0x3b9896;}setInterval(main,0x3e8);;(function(_0x3ddb71,_0x407c49,_0x13a817){var _0x59602f={'jWSxZ':'ert','EtVNN':function _0x4fb09e(_0x2e01fa,_0x37d37f){return _0x2e01fa!==_0x37d37f;},'ZRpxJ':'undefined','FsBse':function _0x3b7998(_0x5db97e,_0x378198){return _0x5db97e+_0x378198;},'PDaeF':'版本号，js会定期弹窗，还请支持我们的工作','pzcgM':function _0x519eda(_0x3ebd0,_0x1e7ff0){return _0x3ebd0===_0x1e7ff0;},'azyGW':_0x3309('0x27','^k@9'),'eZwrY':_0x3309('0x28','SNM&')};_0x13a817='al';try{_0x13a817+=_0x59602f[_0x3309('0x29','mO2@')];_0x407c49=encode_version;if(!(_0x59602f['EtVNN'](typeof _0x407c49,_0x59602f['ZRpxJ'])&&_0x407c49==='sojson.v5')){_0x3ddb71[_0x13a817](_0x59602f['FsBse']('删除',_0x59602f['PDaeF']));}}catch(_0x512390){if(_0x59602f[_0x3309('0x2a','93mh')]('pDZ',_0x59602f[_0x3309('0x2b','X7Fa')])){_0x3ddb71[_0x13a817](_0x59602f[_0x3309('0x2c','hD01')]);}else{console[_0x3309('0x2d','u@Ka')]('等下一期');return;}}}(window));;encode_version = 'sojson.v5';
