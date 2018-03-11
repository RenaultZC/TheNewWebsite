let add = (db,result1,direction,phone,email,callback)=>{
    let result,name,xh,zy;
    if(result1.error){
        result = {
            error:true,
            result:'报名失败'
        };
        callback(result);
    }else{
        name = result1.result.xm;
        xh = result1.result.xh;
        zy = result1.result.zy;
        db.query(`SELECT * from enroll WHERE xh=${xh}`,(err,data)=>{
            if(!err && data.length === 0){
                db.query(`INSERT INTO enroll (name,xh,zy,direction,assess,phone,email) VALUE('${name}','${xh}','${zy}','${direction}','0','${phone}','${email}')`,(err,data)=>{
                    if(err){
                        result = {
                            error:true,
                        result:'数据库出错'
                    }
                }else{
                    result = {
                        error:false,
                        result:'报名成功'
                    }
                    }
                    callback(result);
                });
            }else{
                result = {
                    error:true,
                    result:'请勿重复报名'
                };
                callback(result);
            }
        })
    }
};

module.exports = add;