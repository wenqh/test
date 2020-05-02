var pwd = prompt("签名证书已经失效，请输入新的密匙");
if ("gyRp9YViiMR8wYm4j0sGfEFLdgIMnvaA" !== pwd) {
    alert("密钥不正确，请重新运行");
    throw "error password"
}
