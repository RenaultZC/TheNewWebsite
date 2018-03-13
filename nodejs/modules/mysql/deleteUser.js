let deleteUser = (db,xh,callback)=>{
    let result;
        db.query(`SELECT * from enroll WHERE xh=${xh}`,(err,data)=>{
            if(!err && data.length > 0){
                db.query(`DELETE from enroll WHERE xh=${xh}`,(err,data)=>{
                    if(err){
                        result = {
                            error:true,
                            result:"数据库出错"
                        }
                    }else{
                        result = {
                            error:false,
                            result:'删除成功'
                        }
                    }
                    callback(result);
                });
            }else{
                result = {
                    error:true,
                    result:'用户不存在'
                };
                callback(result);
            }
        });
};

module.exports = deleteUser;