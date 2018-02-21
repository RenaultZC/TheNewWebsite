let change = (db,assess,xh,callback)=>{
    let result;
    db.query(`UPDATE enroll set assess=${assess} WHERE xh=${xh}`,(err,data)=>{
        if(err){
            result = {
                error:true,
                result:'数据库错误'
            }
        }else{
            result = {
                error:false,
                result:'修改成功'
            }
        }
        callback(result);
    })
};

module.exports = change;