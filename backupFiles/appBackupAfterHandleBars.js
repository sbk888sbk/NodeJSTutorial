const express  = require('express');
const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');


const app = express();
// To use PUG
// app.set('view engine','pug');
// app.set('views','views');
//PUg Has inbuilt engine in express



//To speicfy handbars is installed and we have to use engine
app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname:'hbs'}));
app.set('view engine','hbs');
app.set('views','views');

const path = require('path');
const rootDir = require('./util/path')

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded({extended : false}));

//For serving content statically like css
app.use(express.static(path.join(__dirname,'public')));

//Common Path for the different methods in the admin module
app.use('/admin',adminRoutes.router);
app.use('/',shopRoutes);



app.use((req, res , next) => {
    //res.status(404).sendFile(path.join(__dirname,'views','404.html'));
    res.status(404).render('404', {pageTitle : "Page Not Found"})
});

app.listen(3000);
