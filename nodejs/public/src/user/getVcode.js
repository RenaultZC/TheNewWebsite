import Ajax from "../ajax";
let getVcode = ()=>{
    let url = "http://zhangchaoweb.xin/user/Vcode?callback=Vcode";
    Ajax(url);
};
export default getVcode;