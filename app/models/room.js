const mongoose = require('mongoose')


var roomSchema = mongoose.Schema({
	name: 		String,
	location: 	String,
	owner:      String,
	members:    []
})


module.exports = mongoose.model('Room', roomSchema)