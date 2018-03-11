const request = require('request');
const cheerio =require('cheerio');
const iconv = require('iconv-lite');

let info = (xh,session,callback)=>{
    let url = 'http://222.24.62.120/xsgrxx.aspx?xh=04163017';
    let option = {
        url : url,
        encoding : null,
        method : "GET",
        headers :{
            Referer: "http://222.24.62.120/xsgrxx.aspx?xh=04163017",
            Cookie: session
        }
    };
    request(option,(err,response,body)=>{
        let result = null;
        if(!err){
            let all = iconv.decode(body,'gb2312').toString();
            let $ = cheerio.load(all);
            result = {
                error:false,
                result:{
                    xm : $('#xm').text(),
                    xh : $('#xh').text(),
                    zy : $('#lbl_xzb').text()
                }
            };
        }else{
            result = {
                error:true,
                result:err
            };
        }
        callback(result);
    });
};

module.exports = info;