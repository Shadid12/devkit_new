$(document).ready(function(){

var socket = io.connect();


var roomid = $('#room_id').val();

console.log(roomid);

socket.on(roomid, function(msg){

	

	// append the song to playlist
	$('#stuff').append("<a class='list-group-item' id='"+ msg + "'>" +  msg + "</a>")


    // create youtube player
    var player;
    player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId:msg,
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