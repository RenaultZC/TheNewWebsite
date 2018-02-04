let returnJSON = (res,result,callbackname)=>{
    let returnjson = null;
    result = JSON.stringify(result);
    if(callbackname !=='' && callbackname){
        returnjson = `${callbackname}(${result})`;
    }else{
        returnjson = result;
    }
    res.send(returnjson);
};

module.exports = returnJSON;