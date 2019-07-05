//This is a custom module path(different from exported module)
//Usint this path to define root folder of our app which is exported and is used in other files
const path = require('path');
module.exports = path.dirname(process.mainModule.filename);
