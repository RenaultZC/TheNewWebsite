const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let user = require('./routes/user');
let mysql = require('./routes/mysql');

let app = express();
app.use(bodyParser.urlencoded());

app.use('/user/',user);
app.use('/mysql/',mysql);

app.listen(8080);