$(document).ready(function(){

var socket = io.connect();

socket.on('someroom', function(msg){
	console.log(msg);
});


});