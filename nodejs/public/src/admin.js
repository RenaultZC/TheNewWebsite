import HeadClick from "./admin/HeadClick";
import NavigationClick from "./admin/NavigationClick";
import Ajax from "./ajax";
import search from "./admin/search";
import SendAssess from "./admin/SendAssess";
import assess from "./admin/assess";
window.assess = assess;
window.search = search;

window.onload = ()=>{
    Ajax("http://zhangchaoweb.xin/mysql/search?type=3&session=NULL&callback=search");
    let HeadButton = document.getElementById("head-button");
    let navigation = document.getElementsByClassName("navigation")[0];
    let body = document.getElementById("body");
    if(window.innerWidth<=720)
        HeadButton.addEventListener("click",HeadClick,false);
    navigation.addEventListener("click",NavigationClick,false);
    body.addEventListener("click",SendAssess,false);
};