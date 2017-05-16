var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var app = express();

//static content from directory
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

//handlebars set up
app.engine('handlebars', exphbs({
  defaltLayout: 'main'
}));
app.set('view engine', 'handlebars');

//routes connection
var routes = require('./controllers/routes.js');
app.use('/', routes);

//server port
var port = 3000;
app.listen(port);
