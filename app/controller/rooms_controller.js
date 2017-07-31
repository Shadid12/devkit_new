const Room 			 = require('../models/room')

// new action
exports.newRoom = function(name, loc, res, req){


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
			newRoom.owner	 = req.user._id
			newRoom.members.push(req.user._id)
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
			res.send({error: err})
		}
		res.render('rooms/show', {room: room})
	})

}

// show all rooms 
exports.index = function(req, res){
	Room.find({}, function(err, rooms){
		if(err){
			throw err
		}
		res.render('rooms/index', {rooms: rooms, auth: req.isAuthenticated()})
	})
}