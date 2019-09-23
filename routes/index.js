let router = require('express').Router();
let multer = require('multer');
let pu = require('../')

const Storage = multer.diskStorage({
    destination : function(req,file,callback){
        callback(null , './public/images/uploads/');
       
    },
    filename: function(req,file,callback){
        callback(null ,file.fieldname +"_"+Date.now());
        console.log(file.path);
    }
});

const upload = multer({
    storage:Storage
}).array("img",5);

router.get('/',(req,res)=>{
    res.render("index.ejs",{errors:req.session.errors});
    req.session.errors = null;
});

router.post('/oost',(req,res)=>{
    upload(req,res,(err)=>{
         if(err) console.log(err);
        res.redirect('/');
        console.log(`${req.files[0].filename}`);
    });
});



module.exports = router;