const path = require('path');
const express = require("express");

const router = express.Router();

const rootDir = require('../util/path')
const adminData = require('./admin')

router.get('/', (req, res, next) => {
   console.log('shop js', adminData.products);
    //res.sendFile(path.join(__dirname,'../','views', 'shop.html'));
    res.sendFile(path.join(rootDir,'views', 'shop.html'));

});


module.exports = router;