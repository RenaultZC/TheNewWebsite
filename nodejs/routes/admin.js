const express = require('express');
let router = express.Router();

let admin = require('../modules/admin/login');
let returnJSON = require('../modules/returnjson');
let decryption = require('../modules/decryption');

router.use("/",(req,res)=>{
    let username , password,callback;
    if(req.query.username){
        username = req.query.username;
        password = req.query.password;
        callback = req.query.callback;
    }else if (req.body.username){
        username = req.body.username;
        password = req.body.password;
        callback = req.body.callback;
    }
    password = decryption(password);
    admin(username,password,res,(result)=>{
        returnJSON(res,result,callback);
    });
});
module.exports = router;