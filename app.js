const express  = require('express');

const bodyParser = require('body-parser');
//required when using handlebars
//const expressHbs = require('express-handlebars');


const app = express();
// To use PUG
// app.set('view engine','pug');
// app.set('views','views');
//PUg Has inbuilt engine in express



//To speicfy handbars is installed and we have to use engine
//app.engine('hbs', expressHbs({layoutsDir: 'views/layouts/', defaultLayout: 'main-layout', extname:'hbs'}));
//app.set('view engine','hbs');

app.set('view engine','ejs');

app.set('views','views');

const path = require('path');

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

const errorController = require('./controllers/error')

app.use(bodyParser.urlencoded({extended : false}));

//For serving content statically like css
app.use(express.static(path.join(__dirname,'public')));

//Common Path for the different methods in the admin module
app.use('/admin',adminRoutes);

app.use('/',shopRoutes);



app.use(errorController.get404);

app.listen(3000);
