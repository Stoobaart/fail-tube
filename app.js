var express = require("express");
var app = express();
var layouts = require("express-ejs-layouts");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var router = require("./config/routes");

var port = process.env.PORT || 3000;

app.use(express.static('public'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: false}));

app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use(layouts);

app.use(router);

app.listen(port, function() {
  console.log("Failtube is live and listening on port: " + port);
})
