let Ajax = (url)=>{
    let script = document.createElement("script");
    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
};
module.exports = Ajax;