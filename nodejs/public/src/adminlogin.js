import Ajax from "./ajax";
import encryption from "./encryption"
window.admin = (data)=>{
    alert(data.result);
};
window.onclick = ()=>{
    let submit = document.getElementById("submit");
    submit.addEventListener("click",(event)=>{
        event.stopPropagation();
        let admin = document.getElementById("admin").value;
        let password = document.getElementById("password").value;
        if(admin === "" || password === ""){
            alert("请输入用户名或密码");
        }else{
            password = encryption(password);
            let url = "zhangchaoweb.xin/admin/login?callback=admin";
            url = `${url}&admin=${admin}&password=${password}`;
            Ajax(url);
        }
    },false);
};