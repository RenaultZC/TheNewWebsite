let fs = require("fs");
let login = (admin,password,res,callback)=>{
    if(admin === "xiyou3g" && password === "xiyou3g"){
        fs.readFile(__dirname+"/../../../public/admin.html",(err,data)=>{
            if(err){
                callback({
                    error:true,
                    result:err
                });
            }
            else{
                //200：OK
                res.writeHead(200,{"Content-Type":"text/html"});
                res.write(data.toString());
            }
            res.end();
        });
    }else{
        callback({
            error:true,
            result:"用户名密码错误"
        });
    }
};
module.exports = login;