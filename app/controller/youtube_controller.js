const YouTube = require('youtube-node')
const youtube = new YouTube()
youtube.setKey('AIzaSyBSx_9uxsCJ-LdsK1SJKGGZ_CqFyEAlotE') // TODO move this to config

exports.results = (req, res) => {


youtube.search(req.body.ysearch, 2, function(err, result){
  	if(err){
  		res.send({error: err})
  	}

    res.render('result', { res: result.items })

})



}