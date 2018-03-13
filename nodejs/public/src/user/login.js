import Ajax from "../ajax";
import encryption from "../encryption";
import getVcode from "./getVcode";
let login = ()=>{
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let Vcode = document.getElementById("Vcode").value;
    let session = encodeURI(document.cookie);
    password = encryption(password);
    let url = "http://zhangchaoweb.xin/user/login?callback=RLogin";
    if(!username||!password){
        alert("请输入用户名或密码");
    }else if(!Vcode){
        alert("请输入验证码");
    }else{
        url = `${url}&username=${username}&password=${password}&session=${session}&Vcode=${Vcode}`;
        Ajax(url);
    }
};
export default login;