const express = require('express');
const app = express()

const homeRouter = require('./routes/homeRouter');
const usersRouter = require('./routes/usersRouter')

app.set('view engine','ejs');
app.set('views','views');


const path = require('path');
const rootDir = require('./util/path')

app.use(express.static(path.join(__dirname,'public')));

app.use('/users',usersRouter.usersRouter);
app.use('/',homeRouter.homeRouter);

app.use( (req, res, next) => {
    res.status(404);
    res.send('Uh oh! You"re lost boy!')
});

app.listen(3001);