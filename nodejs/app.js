const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

let user = require('./routes/user');

let app = express();
app.use(bodyParser.urlencoded());

app.use('/user',user);