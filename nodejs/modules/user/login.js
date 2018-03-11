const request = require('request');
const cheerio =require('cheerio');
const Iconv = require('iconv-lite');

let login = (username,password,session,Vcode,callback)=>{
    let url = 'http://222.24.62.120/default2.aspx';
    let option = {
        url:url,
        method:"POST",
        encoding : null,
        form:{
            '__VIEWSTATE': 'dDwxNTMxMDk5Mzc0Ozs+lYSKnsl/mKGQ7CKkWFJpv0btUa8=',
            'txtUserName': username,
            'Textbox1': '',
            'TextBox2': password,
            'txtSecretCode': Vcode,
            'RadioButtonList1': '%D1%A7%C9%FA',
            'Button1': '',
            'lbLanguage': '',
            'hidPdrs': '',
            'hidsc': ''
        },
        headers:{
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8',
            'Accept-Encoding': 'gzip,deflate',
            'Accept-Language': 'zh-CN,zh;q=0.9',
            'Cache-Control': 'max-age=0',
            'Connection': 'keep-alive',
            'Content-Type': 'application/x-www-form-urlencoded',
            'Host': '222.24.62.120',
            'Origin': 'http://222.24.62.120',
            'Upgrade-Insecure-Requests': '1',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36',
            'Referer':'http://222.24.62.120/xs_main.aspx?xh='+username,
            'Cookie':session,
        }
    };
    request(option,(err,response,body)=>{
        let result = null;
        if(!err && body.indexOf('Object moved')!== -1){
            result ={
                error:false,
                result:'登陆成功'
            };
        }else if(body.indexOf('Object moved') === -1){
            let all = Iconv.decode(body, 'gb2312').toString();
            let $ = cheerio.load(all);
            let reason = $('script');
            reason = reason[reason.length-1].children[0].data;
            reason = reason.substring(reason.indexOf('(')+1,reason.indexOf(')',reason.indexOf('(')));
            result = {
                error:true,
                result:reason
            };
        }else{
            result = {
                error:true,
                result:'未知错误'
            };
        }
        callback(result);
    });
};

module.exports = login;