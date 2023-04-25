let javascript;let url = 'https://192.168.1.112/setting';

let tool = document.createElement('div');

let size = window.innerWidth <= 393 ? 24 : 58;
tool.style.cssText = `position:fixed;bottom: 10%;right:0;font-size:${size}px;z-index:998;`;
document.body.appendChild(tool);
//height: 100px; width: 80px; border: unset;
//tool = tool.contentWindow.document.body;
const btncss = 'border-radius:6px;background:#4CAF50;color:#FFF;border:none;padding:4px 16px';
tool.innerHTML = `<img src="${url}?url=${document.location.href}&preload=false" style="display:none">
<a href="${url}?url=${document.location.href}" style="color:#2196F3">URL</a>
<form action="${url}" method="post" accept-charset="UTF-8" style="flex-direction: column;display: flex;">
<input name="url" type="hidden" value="${document.location.href}">
<input name="body" type="hidden">
<button type="submit" id="_sendtxt" style="${btncss}">文字</button>
<button id="scroll" style="${btncss}">滚动</button>
</form>`;



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
        if (++i %2510 == 0)
            tool.querySelector("[type='submit']").click();
    }, 1000);
})
