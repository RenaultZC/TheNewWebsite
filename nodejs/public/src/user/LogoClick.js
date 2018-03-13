let LogoClick = ()=>{
    let circle = document.querySelectorAll("#Home img")[0];
    let audio = document.querySelectorAll("#Home audio")[0];
    if(circle.className === "animation"){
        circle.className = "circle";
        audio.pause();
    }else{
        circle.className = "animation";
        audio.play();
    }
};
export default LogoClick;