//There are libraries already implemented, we just need to impor the libs in our code
//libs include 'http', 'https', 'fs', 'path', 'os'
//To import we use 'require()'


//importing http lib
const http = require('http');
const routes = require('./routes');

//for importing a local module we need to give ./ before the file name
//for core modules it can be ignored

//creating a server method 
const server = http.createServer(routes.handler);


server.listen(3000);
