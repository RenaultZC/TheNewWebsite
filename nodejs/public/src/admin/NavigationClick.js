import Ajax from "../ajax";
let NavigationClick = (event)=>{
    let navigation = document.getElementsByClassName("navigation")[0];
    let li = navigation.getElementsByTagName("li");
    let url = "http://zhangchaoweb.xin/mysql/search?callback=search";
    for(let i = 0,length = li.length;i < length;i++){
        li[i].className = "";
    }
    event.target.className = "action";
    let session = event.target.textContent;
    switch (session){
        case "全部":
            url = `${url}&type=3&session=NULL`;break;
        case "iOS":
            url = `${url}&type=2&session=iOS`;break;
        case "Android":
            url = `${url}&type=2&session=Android`;break;
        case "Web":
            url = `${url}&type=2&session=Web`;break;
        case "学号":
            let session = prompt("请输入学号");
            url = `${url}&type=1&session=${session}`;break;
    }
    Ajax(url);
    if(window.innerWidth<=720)
        navigation.style.display = "none";
};
export default NavigationClick;