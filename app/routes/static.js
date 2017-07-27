module.exports = (app, passport) => {

// root
app.get('/', function (req, res) {
  res.render('index', { message: 'Hello there!' })
})

// local signup
app.get('/signup', function (req, res) {
  res.render('signup')
})


}
