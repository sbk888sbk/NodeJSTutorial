//There are libraries already implemented, we just need to impor the libs in our code
//libs include 'http', 'https', 'fs', 'path', 'os'
//To import we use 'require()'


//importing http lib
///const http = require('http');

const express  = require('express');

//express exports a function e hence we are intializing a function in the next line
const app = express();

///const routes = require('./routes');

app.use( (req, res, next) => {
    console.log('Middleware');
    next();
});

app.use( (req, res, next) => {
    console.log('Another Middleware');
    res.send('<h1>Hello from express</h1>');
});

//for importing a local module we need to give ./ before the file name
//for core modules it can be ignored

//creating a server method 
///const server = http.createServer(app);

/// server.listen(3000);
app.listen(3000);
