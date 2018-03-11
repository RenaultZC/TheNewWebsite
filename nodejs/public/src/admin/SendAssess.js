import Ajax from "../ajax"
let SendAssess = (event)=>{
    let xh = event.target.parentElement.getElementsByClassName("xh")[0].innerHTML.substring(3);
    let assess = event.target.parentElement.getElementsByClassName("assess")[0].innerHTML.substring(5);
    let url = "http://zhangchaoweb.xin/mysql/change?callback=assess";
    switch (assess){
        case "面试未通过":assess = -1;break;
        case "未进行面试":assess = 0;break;
        case "一面通过":assess = 1;break;
        case "二面通过":assess = 2;break;
        case "三面通过":assess = 3;break;
    }
    if(event.target.innerHTML === "通过"){
        if(assess === 3){
            console.log("已通关");
        }else if(assess === -1){
            console.log("已失败");
        }else{
            assess++;
            if(assess === 1){
                event.target.parentElement.getElementsByClassName("assess")[0].innerHTML = "面试进度：一面通过";
            }else if(assess === 2){
                event.target.parentElement.getElementsByClassName("assess")[0].innerHTML = "面试进度：二面通过";
            }else if(assess === 3){
                event.target.parentElement.getElementsByClassName("assess")[0].innerHTML = "面试进度：三面通过";
            }
        }
        url  = `${url}&xh=${xh}&assess=${assess}`;
        Ajax(url);
    }else if(event.target.innerHTML === "未通过"){
        if(assess === 3){
            console.log("已通关");
        }else if(assess === -1){
            console.log("已失败");
        }else{
            assess = -1;
            event.target.parentElement.getElementsByClassName("assess")[0].innerHTML = "面试进度：面试未通过";
        }
        url  = `${url}&xh=${xh}&assess=${assess}`;
        Ajax(url);
    }
};
export default SendAssess;