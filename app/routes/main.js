module.exports = (app, passport) => {

require('./user.js')(app, passport)
require('./youtube.js')(app)
require('./rooms.js')(app, passport)

}