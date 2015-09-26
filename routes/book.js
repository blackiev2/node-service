var book = require('./model/book');

module.exports = function(app) {
	// api ---------------------------------------------------------------------
	// get all book
	app.get('/book/', function(req, res) {
		book.find(function(err, book) {
			if (err){
				res.send(err);
			}
			var data = {"error":1,"books":""};
			data["books"] = book;
			res.json(data);
		});
	});

	app.get('/book/:id', function(req, res) {
		book.find({_id : req.params.id},
			function(err, book) {
				if (err){
					res.send(err);
				}
				var data = {"error":1,"books":""};
				data["books"] = book;
				res.json(data);
		});
	});

	app.post('/book/', function(req, res) {
		book.create({
			//_id: getNextSequence("bookid"),
			name : req.body.n,
			author : req.body.a,
			price : req.body.p,
			done : false
		}, function(err, book) {
			if (err){
				res.send(err);
			}
			res.json(data = {"success": "create OK"});
		});

	});

	app.put('/book/', function(req, res) {
		book.update({_id : req.body.id},
			{	name : req.body.n,
				author : req.body.a,
				price : req.body.p,
				done : false
			},{},function(err, book) {
				if (err){
					res.send(err);
				}
				res.json(data = {"success": "Update OK"});
		});

	});

	// delete a book
	app.delete('/book/:id', function(req, res) {
		book.remove({
			_id : req.params.id
		}, function(err, book) {
			if (err){
				res.send(err);
			}
			res.json(data = {"success": "delete OK"});
		});
	});

	function getNextSequence(name) {
		var mongoose = require('mongoose');
	  var ret = mongoose.counters.findAndModify(
	    {
	      query: { _id: name },
	      update: { $inc: { seq: 1 } },
	      new: true
	    });
	  return ret.seq;
	};
};
/*app.get('/',function(req,res){
	var data = {
		"Data":""
	};
	data["Data"] = "Welcome to Book Store DEMO...";
	res.json(data);
});

app.get('/book',function(req,res){
	var data = {
		"error":1,
		"Books":""
	};
	
	connection.query("SELECT * from book",function(err, rows, fields){
		if(!err){
			data["error"] = 0;
			data["Books"] = rows;
			res.json(data);
			console.log(data);
		}else{
			data["Books"] = 'No books Found..';
			res.json(data);
		}
	});
});

app.post('/book',function(req,res){
	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Bookname && !!Authorname && !!Price){
		connection.query("INSERT INTO book VALUES('',?,?,?)",[Bookname,Authorname,Price],function(err, rows, fields){
			if(!!err){
				data["Books"] = "Error Adding data";
			}else{
				data["error"] = 0;
				data["Books"] = "Book Added Successfully";
			}
			res.json(data);
		});
	}else{
		data["Books"] = "Please provide all required data (i.e : Bookname, Authorname, Price)";
		res.json(data);
	}
});

app.put('/book',function(req,res){
	var Id = req.body.id;
	var Bookname = req.body.bookname;
	var Authorname = req.body.authorname;
	var Price = req.body.price;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Id && !!Bookname && !!Authorname && !!Price){
		connection.query("UPDATE book SET BookName=?, AuthorName=?, Price=? WHERE id=?",[Bookname,Authorname,Price,Id],function(err, rows, fields){
			if(!!err){
				data["Books"] = "Error Updating data";
			}else{
				data["error"] = 0;
				data["Books"] = "Updated Book Successfully";
			}
			res.json(data);
		});
	}else{
		data["Books"] = "Please provide all required data (i.e : id, Bookname, Authorname, Price)";
		res.json(data);
	}
});

app.delete('/book',function(req,res){
	var Id = req.body.id;
	var data = {
		"error":1,
		"Books":""
	};
	if(!!Id){
		connection.query("DELETE FROM book WHERE id=?",[Id],function(err, rows, fields){
			if(!!err){
				data["Books"] = "Error deleting data";
			}else{
				data["error"] = 0;
				data["Books"] = "Delete Book Successfully";
			}
			res.json(data);
		});
	}else{
		data["Books"] = "Please provide all required data (i.e : id )";
		res.json(data);
	}
});*/