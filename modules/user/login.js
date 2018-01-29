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
            '__VIEWSTATE':'dDwxNTMxMDk5Mzc0Ozs+lYSKnsl/mKGQ7CKkWFJpv0btUa8=',
            'txtUserName':username,
            'Textbox1':'',
            'Textbox2':password,
            'txtSecretCode':Vcode,
            'RadioButtonList1':'ѧ��',
            'Button1':'',
            'lbLanguage':'',
            'hidPdrs':'',
            'hidsc':''
        },
        headers:{
            Referer:'http://222.24.62.120/',
            Cookie:session
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