import Ajax from "../ajax";
let sendsign = ()=>{
    if(TLOGIN){
        let xh = document.getElementById("xh").value;
        let email = document.getElementById("email").value;
        let phone = document.getElementById("phone").value;
        let direction = document.getElementById("direction");
        direction = direction.options[direction.selectedIndex].value;
        let session = encodeURI(document.cookie);
        let url = `http://zhangchaoweb.xin/api/mysql/add?xh=${xh}&session=${session}&direction=${direction}&email=${email}&phone=${phone}&callback=sign`;
        Ajax(url);
    }else{
        alert("请先登录教务系统");
    }
};
export default sendsign;