const express = require('express');
const app = express();
const expressSession = require('express-session');
const multer = require('multer');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
let mongoose = require('mongoose');

// To-do connect to a db 

app.use(express.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname , '/public')));
app.set('view engine','ejs');



app.use(expressSession({
    secret : "dahdhahd dkjadhada",
    saveUninitialized : false,
    resave: true
}));


app.use('/',index);


let port = process.env.PORT || 3000;



app.listen(port,()=>{
    console.log(`App Started on port ${port}`);
});