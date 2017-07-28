module.exports = (app, passport) => {

// root
app.get('/', function (req, res) {
  res.render('index', { message: 'Hello there!', auth: req.isAuthenticated() })
})

// local signup
app.get('/signup', function (req, res) {
  res.render('signup',{ message: req.flash('signupMessage') })
})


app.post('/signup', passport.authenticate('local-signup', {
	successRedirect : '/',
	failureRedirect : '/signup',
	failureFlash : true 
}))

// Logout 

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/')
})


// Local Login
app.get('/login', function (req, res) {
  res.render('login', { message: req.flash('loginMessage') })
})

app.post('/login', passport.authenticate('local-login', {
	successRedirect : '/',
	failureRedirect : '/login', 
	failureFlash : true 
}))


app.get('/profile', isLoggedIn, function(req, res) {
    res.render('profile', {
        user : req.user 
    })
})



}


function isLoggedIn(req, res, next) {

	// if user is authenticated in the session, carry on
	if (req.isAuthenticated())
		return next()
	// if they aren't redirect them to the home page
	res.redirect('/')
}
