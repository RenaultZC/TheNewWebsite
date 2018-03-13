import nlogoClick from "./nlogoClick";
let sign = (data)=>{
  if(!data.error){
      let sign = document.getElementById("sign");
      sign.style.display = "none";
      window.TLOGIN = false;
  }
  console.log(data.error);
    alert(data.result);
};
export default sign;