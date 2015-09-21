
/**
 * Module dependencies.
 */

var express = require('express');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
//app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
//app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/*------------------------------------------
    connection peer, register as middleware
    type koneksi : single,pool and request 
-------------------------------------------*/
//DB config
/*var mysql      = require('mysql');
global.connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'nodejs'
});

connection.connect(function(err){
	if(!err) {
    console.log("Database is connected ... \n\n");  
	} else {
    console.log("Error connecting database ... \n\n");  
	}
});*/

//Customer
//var customers = require('./routes/customers');
//app.get("/customers",customers.list);
//
//app.get('/', routes.index);//route customer list
//app.get('/customers', customers.list);//route add customer, get n post
//app.get('/customers/add', customers.add);
//app.post('/customers/add', customers.save);//route delete customer
//app.get('/customers/delete/:id', customers.delete_customer);//edit customer route , get n post
//app.get('/customers/edit/:id', customers.edit); 
//app.post('/customers/edit/:id',customers.save_edit);

app.get('/',function(req,res){
  var data = {"Data":""};
  data["Data"] = "Welcome to Book Store DEMO...";
  res.json(data);
});

app.get('/book',function(req,res){
  var data = {"error": 0,"Books": [{"id": 3,"name": "HTML5","author": "Author 3","price": "435"},{"id": 4,"name": "CSS3","author": "Author 4","price": "356"}]};
  res.json(data);
});

app.use(app.router);
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
