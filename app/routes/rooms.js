const room = require('../controller/rooms_controller')


module.exports = (app, passport) => {



// get new room
app.get('/rooms/new', isLoggedIn, function (req, res) {
  res.render('rooms/new', {auth: req.isAuthenticated() } )
})

app.post('/rooms',  function(req, res){
	var name = req.body.roomname
	var loc	 = req.body.loc
	room.newRoom(name, loc,  res)
})


}


function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next()
	// if they aren't redirect them to the home page
	res.redirect('/')
}