// ==UserScript==
// @name         只提取文字
// @namespace    https://viayoo.com/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @run-at       document-start
// @match        *
// @exclude      http://66.112.212.234:9222/*
// @exclude http://139.224.198.132:9222/*
// @exclude https://www.google.com*
// ==/UserScript==
(function () {
    'use strict';

    let url = 'https://192.168.1.112:9222/setting';
    //let url = 'http://66.112.212.234:9222/setting';
    if (!document) {
        alert("脚本执行失败未初始化文档" + document)
    }

    let tool = document.createElement('iframe');

    let size = window.innerWidth / 15;
    tool.style.cssText = `height: 100px; width: 60px; border: unset; display: flex;flex-direction: column; position:fixed;top1:70px;bottom: 10%;right:0;font-size:${size}px;z-index:998;`;
		document.body.appendChild(tool);
		tool = tool.contentWindow.document.body;
	tool.innerHTML = `<img src="${url}?url=${document.location.href}&preload=false" style="display:none">
					<a href="${url}?url=${document.location.href}" style="color: #2196F3">URL</a>
					<form action="${url}" method="post" accept-charset="UTF-8">
						<input name="url" type="hidden" value="${document.location.href}">
						<input name="body" type="hidden">
						<button type="submit" id="_sendtxt" style="border-radius: 6px; background: #4CAF50; color: #fff">文字</button>
						<button id="scroll" style="border-radius: 6px; background: #4CAF50; color: #fff">滚动</button>
					</form>`;

    //document.addEventListener("DOMContentLoaded", (e) => {
    //    document.body.appendChild(tool)
    //})

    tool.querySelector("form").addEventListener("submit", (e) => {
        let ad = document.querySelector('.KfeCollection-VipRecommendCard');
        if (ad) {
            ad.remove()
        }
		

        let text = document.body.innerText.replace(/\n+/g, '\n').replace(/^\u200b\n/gm, '');

        let links = '';
        document.querySelectorAll("a").forEach(e => {
            links += `<a href="?url=${encodeURIComponent(new URL(e.getAttribute('href'),document.location.href).href)}">${e.innerText}</a>\n`;
        });

        tool.querySelector("[name='body']").value = document.title + "\n<![CDATA[" + text + links + "]]>"; //"<pre>"+text+"</pre>";
        tool.querySelector("[type='submit']").innerText = "OK";

        //return true;
    });

    let timer;
    tool.querySelector("#scroll").addEventListener("click", (e) => {
        if (timer) {
            clearInterval(timer);
            timer = null;
            return
        }
        let i = 0;
        timer = setInterval(() => {
            window.scrollTo(0, 0);
            window.scrollTo(0, document.body.scrollHeight);
            if (++i % 10 == 0)
                tool.querySelector("[type='submit']").click();
        }, 1000);
    })

})();
