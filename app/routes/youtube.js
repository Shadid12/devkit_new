const YouTube = require('youtube-node')
const youtube = new YouTube()
youtube.setKey('AIzaSyBSx_9uxsCJ-LdsK1SJKGGZ_CqFyEAlotE')


module.exports = (app) => {

app.post('/search', function (req, res) {
  // console.log(req.body.ysearch)
  youtube.search(req.body.ysearch, 2, function(err, result){
  	if(err){
  		console.log(err)
  	}else{
  		// var tres = JSON.stringify(result, null, 2)
  		res.render('result', { res: result.items })
  		// res.send(result.items)
  		// console.log(JSON.stringify(result, null, 2))
  	}
  })

})


}