const express = require("express");
const router = express.Router();
const path = require('path')
const rootDir = require('../util/path')



router.get('/', (req, res, next) => {
    res.render('home',{
        pageTitle : 'Add Product', 
        path:'/admin/add-product',
        activeHome : true
    });
});



exports.homeRouter = router;
