module.exports = (app, passport, io) => {

require('./user.js')(app, passport)
require('./youtube.js')(app)
require('./rooms.js')(app, passport)
require('./playlist')(app, passport, io)

}