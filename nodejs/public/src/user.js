import HeadClick from "./user/HeadClick";
import LogoClick from "./user/LogoClick";
import Vcode from "./user/Vcode";
import getVcode from "./user/getVcode";
import login from "./user/login";
import RLogin from "./user/RLogin";
import signclick from "./user/signclick";
import sendsign from "./user/sendsign";
import sign from "./user/sign";
import getInfo from "./user/getInfo";
import nlogoClick from "./user/nlogoClick";
window.Vcode = Vcode;
window.RLogin = RLogin;
window.TLOGIN = false;
window.sign = sign;
window.getInfo = getInfo;
window.onload = ()=>{
    let Head = document.getElementById("head");
    let logo = document.getElementsByClassName("logo")[0];
    let code_img = document.getElementById("code_img");
    let btn = document.getElementById("btn");
    let signclose = document.getElementById("close");
    let s_btn = document.getElementById("s_btn");
    let nlogo = document.querySelectorAll("#Nlogin .nlogo")[0];
    getVcode();
    document.getElementsByTagName("body")[0].style.height = window.innerHeight+"px";
    Head.addEventListener("click",HeadClick,false);
    logo.addEventListener("click",LogoClick,false);
    code_img.addEventListener("click",getVcode,false);
    btn.addEventListener("click",login,false);
    signclose.addEventListener("click",signclick,false);
    s_btn.addEventListener("click",sendsign,false);
    nlogo.addEventListener("click",nlogoClick,false);
    let mySwiper = new Swiper ('.swiper-container', {
        direction: 'vertical',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    })
};