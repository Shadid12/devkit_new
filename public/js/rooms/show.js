$(document).ready(function(){

var socket = io.connect();
var playList = [];
var currentTrack = playList[0];

socket.on('someroom', function(msg){

	playList.push(msg);
	console.log(playList);
	console.log(currentTrack);




	// append the song to playlist
	$('#stuff').append("<a class='list-group-item' id='"+ msg + "'>" +  msg + "</a>")


    // create youtube player
    var player;
    player = new YT.Player('player', {
          height: '390',
          width: '640',
          videoId:currentTrack,
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