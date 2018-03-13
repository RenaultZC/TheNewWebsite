let HeadClick = ()=>{
    let login = document.getElementById("login");
        if(login.style.display === "none"){
            login.style.display = "block";
        }else {
            login.style.display = "none";
    }
};
module.exports = HeadClick;