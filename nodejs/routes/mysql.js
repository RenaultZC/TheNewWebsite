const express = require('express');
let router = express.Router();
const mysql = require('mysql');

let add = require('../modules/mysql/add');
let search = require('../modules/mysql/search');
let change = require('../modules/mysql/change');
let send = require('../modules/mysql/sendexcecl');
let info = require('../modules/user/info');
let returnJSON = require('../modules/returnjson');
let db = mysql.createPool({host:'localhost',user:'web',password:'19980527',database:'website'});

router.use('/add',(req,res)=>{
    let session,xh,direction,phone,email,callback;
    if(req.query.name){
        xh = req.query.xh;
        direction = req.query.direction;
        callback = req.query.callback;
        phone = req.query.phone;
        email = req.query.email;
    }else if(req.body.name){
        xh = req.body.xh;
        direction = req.body.direction;
        callback = req.body.callback;
        phone = req.body.phone;
        email = req.body.email;
    }
    info(xh,session,(result1)=>{
        add(db,result1,direction,phone,email,(result)=>{
            returnJSON(res,result,callback);
        })
    });
});

router.use('/search',(req,res)=>{
    let session,type,callback;
    if(req.query.type){
        session = req.query.session;
        type = req.query.type;
        callback = req.query.callback;
    }else if(req.body.type){
        session = req.body.session;
        type = req.body.type;
        callback = req.body.callback;
    }
    search(db,session,type,(result)=>{
        returnJSON(res,result,callback);
    });
});

router.use('/change',(req,res)=>{
    let assess,xh,callback;
    if(req.query.assess){
        assess = req.query.assess;
        xh = req.query.xh;
        callback = req.query.callback;
    }else if(req.body.assess){
        assess = req.body.assess;
        xh = req.body.xh;
        callback = req.body.callback;
    }
    change(db,assess,xh,(result)=>{
        returnJSON(res,result,callback);
    });
});

router.use('/send',(req,res)=>{
    send(db,res);
});

module.exports = router;
