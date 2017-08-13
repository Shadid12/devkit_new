var run = function(id){
	var s  = '#s' + id;
	var sel = $(s).find(':selected').text();
	var o = {
		room: sel,
		song: id
	}

	var socket = io();
	socket.emit('pl', o)

}
