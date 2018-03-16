import Ajax from "./ajax";
import encryption from "./encryption"
window.admin = (data)=>{
    alert(data.result);
};
window.onload = ()=>{
    let submit = document.getElementById("submit");
    submit.addEventListener("click",()=>{
        let admin = document.getElementById("admin").value;
        let password = document.getElementById("password").value;
        if(admin === "" || password === ""){
            alert("请输入用户名或密码");
        }else{
            password = encryption(password);
            let url = "http://zhangchaoweb.xin/api/admin?callback=admin";
            url = `${url}&username=${admin}&password=${password}`;
            Ajax(url);
        }
    },false);
};