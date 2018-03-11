let search = (db,session,type,callback)=>{
    let result = null;
    if(type === '1'){//根据学号查询
        db.query(`SELECT * FROM enroll WHERE xh='${session}'`,(err,data)=>{
            if(err){
                result = {
                    error:true,
                    result:'数据库出错'
                }
            }else{
                if(data.length>0){
                    result = {
                        error:false,
                        result:data
                    }
                }else{
                    result = {
                        error:true,
                        result:'查无此人'
                    }
                }
            }
            callback(result);
        });
    }else if(type === '2'){//根据方向进行查找
        db.query(`SELECT * FROM enroll WHERE direction='${session}'`,(err,data)=>{
            if(err){
                result = {
                    error:true,
                    result:'数据库出错'
                }
            }else{
                if(data.length>0){
                    result = {
                        error:false,
                        result:data
                    }
                }else{
                    result = {
                        error:true,
                        result:'目前还没有人报这个方向'
                    }
                }
            }
            callback(result);
        });
    }else if(type === '3'){//查找全部
        db.query(`SELECT * FROM enroll`,(err,data)=>{
            if(err){
                result = {
                    error:true,
                    result:'数据库出错'
                }
            }else{
                if(data.length>0){
                    result = {
                        error:false,
                        result:data
                    }
                }else{
                    result = {
                        error:true,
                        result:'目前还没有人报名'
                    }
                }
            }
            callback(result);
        });
    }else if(type === '4'){
        db.query(`SELECT * FROM enroll WHERE assess='${session}'`,(err,data)=>{
            if(err){
                result = {
                    error:true,
                    result:'数据库出错'
                }
            }else{
                if(data.length>0){
                    result = {
                        error:false,
                        result:data
                    }
                }else{
                    result = {
                        error:true,
                        result:'目前还没有人在这个进度'
                    }
                }
            }
            callback(result);
        });
    }
};

module.exports = search;