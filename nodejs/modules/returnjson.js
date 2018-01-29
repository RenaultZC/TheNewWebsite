let returnJSON = (res,result,callbackname)=>{
    let returnjson = null;
    if(callbackname !=='' && callbackname){
        returnjson = `${callbackname}(${result})`;
    }else{
        returnjson = result;
    }
    res.send(returnjson);
};

module.exports = returnJSON;