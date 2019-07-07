const express = require("express");
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')



router.get('/thank-you',(req, res, next)=>{
    console.log("thank you get request");
    res.redirect('/');
});


router.post('/thank-you',(req, res, next)=>{
    console.log("thank you post request");
    res.sendFile(path.join(rootDir,'views','thank-you.html'))
});

module.exports = router;