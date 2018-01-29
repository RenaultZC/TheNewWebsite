const request = require('request');

let getVcode = (callback)=>{
    let result = null;
    let url = 'http://222.24.62.120/CheckCode.aspx';
    let option = {
        url : url,
        encoding : null,
        method : "GET",
        headers : {
            'Accept' : 'image/webp,image/apng,image/*,*/*;q=0.8',
            'Referer' : 'http://222.24.62.120/'
        }
    };
    request(option,(err,response,body)=>{
        if(!err && response.statusCode === 200){
            let img = body.toString('base64');
            img = "data:image/Gif;base64,"+img;
            let session = response.headers["set-cookie"][0];
            session = session.substr(0, session.indexOf(";"));
            result = {
                "error":false,
                "result":{
                    "session":session,
                    "Vcode":img,
                }
            };
        }else{
            result = {
                "error":true,
                "result":'未知错误'
            }
        }
        callback(result);
    });
};

module.exports = getVcode;