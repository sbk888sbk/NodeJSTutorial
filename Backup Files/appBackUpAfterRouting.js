//There are libraries already implemented, we just need to impor the libs in our code
//libs include 'http', 'https', 'fs', 'path', 'os'
//To import we use 'require()'


//importing http lib
const http = require('http');
const fs = require('fs');

//for importing a local module we need to give ./ before the file name
//for core modules it can be ignored



function reqListener(req, res) {
    const url = req.url;
    const method = req.method;
    if (url == '/') {
        res.setHeader('Content-type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>');
        res.write('<body><form action="/message" method ="POST"><input type="text" name="message"><button type="submit"> Send </button></form></body>');
        res.write('</html>');
        return res.end();
    }
    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('message.txt', 'DUMMUY');
        res.statusCode = 302;
        console.log("Succesffullyy registered you are now being redirected");
        res.setHeader('Location', '/');
        return res.end();

    }
    res.setHeader('Content-type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My Page</title></head>');
    res.write('<body><h1> Hello from my Node.js server</h1></body>');
    res.write('</html');
    res.end();
}
//creating a server method 1
const server = http.createServer(reqListener);


server.listen(3000);