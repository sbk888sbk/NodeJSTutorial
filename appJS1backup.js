//There are libraries already implemented, we just need to impor the libs in our code
//libs include 'http', 'https', 'fs', 'path', 'os'
//To import we use 'require()'


//importing http lib
const http = require('http');

//for importing a local module we need to give ./ before the file name
//for core modules it can be ignored



function reqListener(req, res){
    console.log(req);
}
//creating a server method 1
const server = http.createServer(reqListener);


//creating a server method 2
const server1 = http.createServer(function(req, res){
    console.log(req);
});

//creating a server method 3
const server2 = http.createServer((req, res) => {
    console.log(req);    
});

server.listen(3000);
//server1.listen(3000);
//server2.listen(3000);