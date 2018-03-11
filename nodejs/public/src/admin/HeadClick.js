let HeadClick = ()=>{
    let navigation = document.getElementsByClassName("navigation")[0];
    if(navigation.style.display === "none"){
        navigation.style.display = "block";
    }else {
        navigation.style.display = "none";
    }
};
module.exports = HeadClick;