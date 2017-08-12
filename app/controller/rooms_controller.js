const Room 			 = require('../models/room')
const User  		 = require('../models/user')

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

				User.findById(req.user._id, function(err, aUser){
					if(err){
						res.send({err: err})
					}
					aUser.rooms.push(newRoom._id)
					aUser.save()
				})

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

// show my rooms
exports.members = function(req, res){
	User.findById(req.user.id, function(err, user){
		if(err){
			res.send({error: err})
		}

		Room.find()
		.where('_id')
		.in(user.rooms)
		.exec(function (err, records) {
			res.render('rooms/index', {myrooms : records})
			// res.send({myrooms : records})
		})

	})
}

// joins room
exports.join = function(req, res){
	User.findById(req.user.id, function(err, user){
		if(err){
			res.send({error: err})
		}
		user.rooms.push(req.body.room_id)
		user.save(function(error, done){
			Room.findById(req.body.room_id, function(err, aroom){
				if(err){
					res.send({error: err})
				}
				aroom.members.push(user._id)
				aroom.save(function(err, success){
					if(!err){
						res.send({success: success})
					}
				})

			})
		})

	})
}