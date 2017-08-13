$(document).ready(function(){

var socket = io.connect();


socket.on('someroom', function(msg){
	console.log(msg);
	// $("#video")[0].src = "//www.youtube.com/embed/" + msg + "?rel=0/&autoplay=1";



    // create youtube player
    var player;
    player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId: msg,
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
    });
    
    // autoplay video
    function onPlayerReady(event) {
        event.target.playVideo();
    }

    // when video ends
    function onPlayerStateChange(event) {        
        if(event.data === 0) {            
        	console.log('video done');
        }
    }



});





});