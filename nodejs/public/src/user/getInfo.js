let getInfo = (data)=>{
  if(!data.error){
      console.log(data.result);
      document.getElementById("name").value = data.result.xm;
      document.getElementById("xh").value = data.result.xh;
      document.getElementById("zy").value = data.result.zy;
  }
};
export default getInfo;