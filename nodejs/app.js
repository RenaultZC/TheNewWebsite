const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");

let user = require('./routes/user');
let mysql = require('./routes/mysql');
let admin = require('./routes/admin');

let key = [];
for(let i = 0;i < 10000;i++){
    key.push('sig_'+Math.random());
}

let app = express();
app.use(cookieParser());
app.use(cookieSession({
    name:'session',
    keys:key,
    maxAge:2*3600*1000
}));
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/user',user);
app.use('/api/mysql',mysql);
app.use('/api/static', express.static('public'));
app.use('/api/admin',admin);

app.listen(8080);