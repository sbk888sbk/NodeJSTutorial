//We use " require " keyword to import a lib
const fs = require('fs');

console.log("Hello World");

//writeFile function take 2 arguments 1. path  2. Contnet to write to file. 
fs.writeFile("hi.txt", 'Hello from the node js');