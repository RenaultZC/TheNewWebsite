let Vcode = (data)=>{
  let Vcode = document.getElementById("code_img");
  if(data.error){
      alert(data.result);
  }else {
      Vcode.src = data.result.Vcode;
      document.cookie = encodeURI(data.result.session);
  }
};
export default Vcode;