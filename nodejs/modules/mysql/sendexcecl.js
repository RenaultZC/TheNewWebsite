let xlsx = require('node-xlsx');
let fs = require('fs');
let send = (db,res)=>{
    let date = [{
        name : 'ALL',
        data : [
            ['姓名','学号','专业','方向','手机','邮箱']
        ]
    }];
    db.query(`SELECT name,xh,zy,direction,phone,email from enroll`,(err,data)=>{
        if(!err && data.length > 0){
            let length = data.length;
            for(let i = 0;i < data.length;i++) {
                let elem = data[i];
                date[0].data.push([elem.name, elem.xh, elem.zy, elem.direction, elem.phone, elem.email]);
            }
            let buffer = xlsx.build(date);
            fs.writeFile(__dirname+'/result.xlsx', buffer, function(err) {
                if (err) throw err;
            });
            res.sendFile(__dirname+'/result.xlsx');
        }
    });
};
module.exports = send;