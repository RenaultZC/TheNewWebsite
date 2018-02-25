# 纳新网站API
## Users
1. Address：zhangchaoweb.xin/user/Vcode 参数:callback(回调函数名可选) method:GET/POST 返回：
```
{
    "error":false,
    "result":{
                "session":...,
                "Vcode":...(验证码的base64编码，直接放在Img的src中即可显示)
              }
}
```
2. Address:zhangchaoweb.xin/user/login 参数:username (学号 必填)、password (密码 必填)、session(是 IP/user/Vcode 返回的session 必填)、Vcode(验证码 必填)、callback(回调函数名可选) method:GET/POST 返回:
```
{
    "error":false,
    "result":...
}
```
3. Address:zhangchaoweb.xin/user/info 参数:xh (学号 必填)、session(是 IP/user/Vcode 返回的session 必填)、callback(回调函数名可选) method:GET/POST 返回:
```
{
    "error":false,
    "result":{
        "xm" : ...,
        "xh" : ...,
        "zy" : ...
    }
}
```
## Mysql
1. Address:zhangchaoweb.xin/mysql/add 参数：xh (学号 必填)、session(是 IP/user/Vcode 返回的session 必填)、direction（方向 必填）、phone（电话 选填）、email（邮箱 选填）、callback(回调函数名可选) method:GET/POST 返回:
```
{
    "error":false,
    "result":...
}
```
2. Address:zhangchaoweb.xin/mysql/change 参数：assess（面试进度 必填）、xh（学号 必填）、callback（回调函数名可选） method:GET/POST 返回:
```
{
    "error":false,
    "result":...
}
```
3. Address:zhangchaoweb.xin/mysql/search 参数: session(查询内容 必填)、type（查询类型 必填）、callback（回调函数名可选）method:GET/POST 返回:
```
{
   "error":true,
   "result":...
}
```
4. Address:zhangchaoweb.xin/mysql/send 参数：callback（回调函数名可选） method:GET/POST 返回:
```
{
    err:false,
    result:'http://zhangchaoweb.xin/static/result.xlsx'//获取数库导出的表格
}
```
## admin
1. Address:zhangchaoweb.xin/admin/login 参数:username（用户名 必填） password（密码 必填）method:POST 返回:
```
管理员界面
```