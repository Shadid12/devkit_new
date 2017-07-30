const Room 			 = require('../models/room')

// new action
exports.newRoom = function(name, loc, res){


	Room.findOne({'location': loc}, function(err, room, response){
		if(err){
			res.send({err: err})
		}
		if(room){
			res.send({room: room})
		}else{
			var newRoom = new Room()
			newRoom.location = loc
			newRoom.name 	 = name
			newRoom.save(function(error){
				if(err){
					res.send({ error: error })
				}
				res.send({room: newRoom})
			})
		}
	})



}

// show action
exports.show =  function(id, res){

	Room.findById(id, function(err, room){
		if(err){
			send({error: err})
		}
		res.send({room: room})
	})

}