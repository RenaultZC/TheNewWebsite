let search = (data)=>{
    let body = document.getElementById("body");
    body.innerHTML = "";
    if(data.error){
        alert(data.result);
    }else{
        for(let i = 0,length = data.result.length;i < length;i++){
            let ul = document.createElement('ul');
            let value;
            switch (data.result[i].assess){
                case "-1":value = "面试未通过";break;
                case "0":value = "未进行面试";break;
                case "1":value = "一面通过";break;
                case "2":value = "二面通过";break;
                case "3":value = "三面通过";break;
            }
            ul.innerHTML = `<li class="name">姓名：${data.result[i].name}</li><li class="xh">学号：${data.result[i].xh}</li><li class="zy">专业：${data.result[i].zy}</li><li class="direction">方向：${data.result[i].direction}</li><li class="assess">面试进度：${value}</li><li class="pass">通过</li><li class="failed">未通过</li>`
            body.appendChild(ul);
        }
    }
};
export default search;