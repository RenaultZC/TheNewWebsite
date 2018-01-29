const request = require('request');
const cheerio =require('cheerio');
const Iconv = require('iconv-lite');

let info = (xh,session,callback)=>{
    let url = 'http://222.24.62.120/xsgrxx.aspx?xh='+xh;
    let option = {
        url : url,
        encoding : null,
        method : "GET",
        headers :{
            Referer:'http://222.24.62.120/',
            Cookie:session
        }
    };
    request(option,(err,response,body)=>{
        let result = null;
        if(!err){
            let all = Iconv.decode(body, 'gb2312').toString();
            let $ = cheerio.load(all);
            result = {
                error:false,
                result:{
                    xm : $('#xm')[0].children[0].data,
                    xh : $('#xh')[0].children[0].data,
                    zy : $('#lbl_xzb')[0].children[0].data
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