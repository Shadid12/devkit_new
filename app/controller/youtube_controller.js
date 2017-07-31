const YouTube = require('youtube-node')
const youtube = new YouTube()
const User    = require('../models/user')
const Room    = require('../models/room')
youtube.setKey('AIzaSyBSx_9uxsCJ-LdsK1SJKGGZ_CqFyEAlotE') // TODO move this to config


exports.results = (req, res) => {


youtube.search(req.body.ysearch, 2, function(err, result){
  	if(err){
  		res.send({error: err})
  	}

	User.findById(req.user.id, function(err, user){
		if(err){
			res.send({error: err})
		}

		Room.find()
		.where('_id')
		.in(user.rooms)
		.exec(function (err, records) {
			res.render('result', { res: result.items, myrooms : records })
			// res.send({myrooms : records})
		})

	})




    // res.render('result', { res: result.items })

})



}