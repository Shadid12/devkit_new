const mongoose = require('mongoose')


var roomSchema = mongoose.Schema({
	name: 		String,
	location: 	String
})


module.exports = mongoose.model('Room', roomSchema)