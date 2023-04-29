let javascript;let url = 'https://192.168.1.112/setting';

let tool = document.createElement('div');

let size = window.innerWidth <= 393 ? 24 : 58;
tool.style.cssText = `position:fixed;bottom: 10%;right:0;font-size:${size}px;z-index:998;`;
document.body.appendChild(tool);
//height: 100px; width: 80px; border: unset;
//tool = tool.contentWindow.document.body;
let enUrl = encodeURIComponent(document.location.href);
const btncss = 'border-radius:6px;background:#4CAF50;color:#FFF;border:none;padding:4px 16px;margin:1px';
tool.innerHTML = `<img src="${url}?url=${enUrl}&preload=false" style="display:none">
<a href="${url}?url=${enUrl})" style="color:#2196F3;font-size:0.6em">URL</a>
<form action="${url}" method="post" accept-charset="UTF-8" style="flex-direction: column;display: flex;">
<input name="url" type="hidden" value="${enUrl}">
<input name="body" type="hidden">
<button type='button' id="_send" style="${btncss}">提取</button>
<button type='button' id="scroll" style="${btncss}">滚动</button>
</form>`;

tool.querySelector("#_send").addEventListener("click", (e) => {
	submit(0);
});
tool.querySelector("#_send").addEventListener("contextmenu", (e) => {
	submit(1);
});

function submit(type) {
    let ad = document.querySelector('.KfeCollection-VipRecommendCard');
    if (ad) {
        ad.remove()
    }

	let body;
	if(type == 0) {
		let text = document.body.innerText.replace(/\n+/g, '\n').replace(/^\u200b\n/gm, '');
		let links = '';
		document.querySelectorAll("a").forEach(e => {
			links += `<a href="?url=${encodeURIComponent(new URL(e.getAttribute('href'),document.location.href).href)}">${e.innerText}</a>\n`;
		});
		body = document.title + "\n<![CDATA[" + text + links + "]]>"
	} else {
		body = document.body.innerHTML;
	}
    

    tool.querySelector("[name='body']").value = body;
    tool.querySelector("#_send").innerText = "OK";

	tool.querySelector("form").submit();
}

let timer;
tool.querySelector("#scroll").addEventListener("click", (e) => {
	let i = 0;
    if (!timer) {
		timer = setInterval(() => {
			window.scrollTo(0, 0);
			window.scrollTo(0, document.body.scrollHeight);
			if (++i %2510 == 0)
				submit(0);
		}, 1000);
		e.currentTarget.style.background = 'red';
		return;
	}
	
	clearInterval(timer);
	timer = null;
	e.currentTarget.style.cssText = btncss;
})
