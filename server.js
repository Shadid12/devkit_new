const express 	   = require('express')
const app 		   = express()
const bodyParser   = require('body-parser')
const mongoose 	   = require('mongoose')
const configDB 	   = require('./app/config/db.js')
const passport 	   = require('passport')
const flash        = require('connect-flash')
const session      = require('express-session')

app.set('view engine', 'pug')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

mongoose.connect(configDB.url, () => {
	console.log("Connected to DB")
})


// required for passport
app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })) // session secret
app.use(passport.initialize())
app.use(passport.session()) // persistent login sessions
app.use(flash()) // use connect-flash for flash messages stored in session
require('./app/config/passport.js')(passport)


// routes
require('./app/routes/main.js')(app, passport)

app.listen(3000)