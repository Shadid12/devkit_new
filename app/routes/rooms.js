module.exports = (app, passport) => {



// get new room
app.get('/rooms/new', isLoggedIn, function (req, res) {
  res.render('rooms/new', {auth: req.isAuthenticated() } )
})



}


function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next()
	// if they aren't redirect them to the home page
	res.redirect('/')
}