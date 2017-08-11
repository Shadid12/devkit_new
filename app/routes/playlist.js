const Room = require('../models/room')

module.exports = (app, passport, io) => {

io.on('connection', function(socket){
	console.log('a user is connected')

	socket.on('disconnect', function(){
		console.log('user disconnected')
	})

})


app.post('/playlist/add', function(req, res){
	var video = req.body.vidid
	var room  = req.body.room
	
	Room.findById(room, function(err, troom){
		if(err){
			res.send({error: err})
		}
		troom.playlist.youtube.push(video)
		troom.save(function(error){
			if(err){
				res.send({error: error})
			}
			res.send({room: troom})
		})
	})

})

}