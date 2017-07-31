const youtube = require('../controller/youtube_controller')

module.exports = (app) => {

app.post('/search', function (req, res) {
  // console.log(req.body.ysearch)
  youtube.results(req, res)
  
})


app.post('/addtolist', function(req, res){
	console.log(req.body.vidid)
	console.log(req.body.room)
})


}