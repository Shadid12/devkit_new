const Room = require('../models/room')

module.exports = (app, passport, io) => {

io.on('connection', function(socket){
	socket.on('pl', function(msg){
		console.log(msg)
		var channel = msg.room
		io.emit(channel, msg.song)
	})
})



// app.post('/playlist/add', function(req, res){
// 	var video = req.body.vidid
// 	var room  = req.body.room
	
// 	Room.findById(room, function(err, troom){
// 		if(err){
// 			res.send({error: err})
// 		}
// 		troom.playlist.youtube.push(video)
// 		troom.save(function(error){
// 			if(err){
// 				res.send({error: error})
// 			}

// 			// after the video is added broadcast through socket

// 			io.on('connection', function(socket){
// 				socket.join('chatroom')
// 				socket.broadcast.to('chatroom').emit('message', 'this is a message')
// 			})

// 			res.send({room: troom})
// 		})
// 	})

// })

}