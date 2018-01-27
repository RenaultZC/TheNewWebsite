const express = require('express');
const request = require('request');
const bodyParser = require('body-parser');
const cheerio = require('cheerio');
const Iconv = require('iconv-lite');
const url = "http://222.24.62.120";

let server = express();
server.listen(8080);

server.get('/Vcode',(req,res)=>{
    let result = null;
    let Vcodeurl = url+'/CheckCode.aspx';
    let option = {
        url : Vcodeurl,
        encoding : null,
        method : "GET",
        headers : {
            'Accept' : 'image/webp,image/apng,image/*,*/*;q=0.8',
            'Referer' : url
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
        res.send(result);
    });
});

server.use(bodyParser.urlencoded());
server.use('/login',(req,res)=>{
    let username,password,session,callback,Vcode;
    if(req.body.username){
        username = req.body.username;
        password = req.body.password;
        Vcode = req.body.Vcode;
        session = req.body.session;
    }else if(username = req.query.username){
        username = req.query.username;
        password = req.query.password;
        session = req.query.session;
        Vcode = req.query.Vcode;
        callback = req.query.callback;
    }
    if(!username || !password){
        res.send({
            error:true,
            result:"用户名或者密码为空"
        });
    }
    else{
        let Lurl = url+'/default2.aspx';
        let option = {
            url:Lurl,
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
                Referer:url,
                Cookie:session
            }
        };
        request(option,(err,response,body)=>{
            if(!err && body.indexOf('Object moved')!== -1){
                res.send({
                    error:false,
                    result:'登陆成功'
                })
            }else if(body.indexOf('Object moved') === -1){
                let all = Iconv.decode(body, 'gb2312').toString();
                let $ = cheerio.load(all);
                let reason = $('script');
                reason = reason[reason.length-1].children[0].data;
                reason = reason.substring(reason.indexOf('(')+1,reason.indexOf(')',reason.indexOf('(')));
                res.send({
                    error:true,
                    result:reason
                })
            }else{
                res.send({
                    error:true,
                    result:'未知错误'
                })
            }
        });
    }
});

server.get('/info',(req,res)=>{
    let session = req.query.session;
    let xh = req.query.xh;
    let Iurl = url+'/xsgrxx.aspx?'+'xh='+xh;
    let option = {
        url : Iurl,
        encoding : null,
        method : "GET",
        headers :{
            Referer:url,
            Cookie:session
        }
    };
    console.log(req.query);
    request(option,(err,response,body)=>{
        if(!err){
            let all = Iconv.decode(body, 'gb2312').toString();
            let $ = cheerio.load(all);
            let info = {
                xm : $('#xm')[0].children[0].data,
                xh : $('#xh')[0].children[0].data,
                zy : $('#lbl_xzb')[0].children[0].data
            };
            res.send(info);
        }else{
            res.send({
                error:true,
                result:err
            });
        }
    });
});