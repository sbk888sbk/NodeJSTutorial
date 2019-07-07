const express = require('express');
const path = require('path')


const app = express();
const router = express.Router();

const homeRouter = require('./routes/homeRouter.js');
const adminRoutes = require('./routes/adminRoutes.js');

app.use(express.static(path.join(__dirname,'public')));
app.use('/',homeRouter);
app.use('/admin', adminRoutes);

app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
})
app.listen(3001);