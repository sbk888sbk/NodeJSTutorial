
const  handler = (req, res) => {
    console.log('Entered  1');
    const url = req.url;
    const method = req.method;

    if(url == '/'){
        res.write('<body>');
        res.write('<form action = "/create-user" method="POST">');
        res.write('<input type="text" name = "username"><button type="submit">Submit</button>');
        res.write('</form>');        
        res.write('</body');
        return res.end();
    }

    if (url === '/users'){
        res.write('<body><ul><li>User 1</li></ul></body>');
        return res.end();
    }

    if (url === '/create-user'){
        const body = [];
        //on is an even listerner and it takes two arguments 
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            const message = parsedBody.split('=')[1];
            console.log(message);
            res.statusCode = 302;
            res.setHeader('Location','/');
            return res.end(); 

        });
    }
};

module.exports ={
    handler : handler
}; 