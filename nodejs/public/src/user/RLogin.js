import Ajax from "../ajax";
import getVcode from "./getVcode";
let RLogin = (data)=>{
    if(data.error){
        alert(data.result);
        getVcode();
    }else{
        alert(data.result);
        document.getElementById("login").style.display = "none";
        document.getElementById("head").style.display = "none";
        let session = encodeURI(document.cookie);
        let xh = document.getElementById("username").value;
        let url = `http://zhangchaoweb.xin/api/user/info?xh=${xh}&session=${session}&callback=getInfo`;
        Ajax(url);
    }
    window.TLOGIN = true;
};
export default RLogin;
