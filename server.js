var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var myConnection = require('./config/connection.js');
var routes = require('./controllers/burgers_controller.js');

var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: 'application/vnd.api+json'
}));
app.use(methodOverride('_method'));
app.use('/', routes);

var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

var port = 3000;

app.listen(port, function() {
    console.log("app is listening");
})