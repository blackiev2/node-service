var mongoose = require('mongoose');

module.exports = mongoose.model('Book', {
	name : { type : String, default: '' },
	author : { type : String, default: '' },
	price : { type : String, default: '' },
});