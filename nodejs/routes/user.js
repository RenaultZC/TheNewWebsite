const express = require('express');
let router = express.Router();

let getVcode = require('../modules/user/Vcode');
let userinfo = require('../modules/user/info');
let userlogin = require('../modules/user/login');
let returnJSON = require('../modules/returnjson');


router.use('/Vcode',(req,res)=>{
    let callback = req.query.callback;
    getVcode((result)=>{
        returnJSON(res,result,callback);
    });
});

router.use('/login',(req,res)=>{
    let username,password,session,Vcode,callback;
    if(req.body.username){
        username = req.body.username;
        password = req.body.password;
        session = req.body.session;
        Vcode = req.body.Vcode;
        callback = req.body.callback;
    }else if(req.query.username){
        username = req.query.username;
        password = req.query.password;
        session = req.query.session;
        Vcode = req.query.Vcode;
        callback = req.query.callback;
    }
    userlogin(username,password,session,Vcode,(result)=>{
        returnJSON(res,result,callback);
    });
});

router.use('/info',(req,res)=>{
    let xh,session,callback;
    if(req.body.xh){
        xh = req.body.xh;
        session = req.body.session;
        callback = req.body.callback;
    }else if(req.query.xh){
        xh = req.query.xh;
        session = req.query.session;
        callback = req.query.callback;
    }
    userinfo(xh,session,(result)=>{
        returnJSON(res,result,callback);
    });
});
module.exports = router;