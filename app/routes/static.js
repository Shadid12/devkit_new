module.exports = (app, passport) => {

// root
app.get('/', function (req, res) {
  res.render('index', { message: 'Hello there!' })
})

// local signup
app.get('/signup', function (req, res) {
  res.render('signup')
})


// local signup
app.post('/signup', function (req, res) {
  console.log(JSON.stringify(req.body));
})

// app.post('/signup', passport.authenticate('local-signup', {
// 	successRedirect : '/profile',
// 	failureRedirect : '/signup',
// 	failureFlash : true 
// }))


}


function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next()
	// if they aren't redirect them to the home page
	res.redirect('/')
}
