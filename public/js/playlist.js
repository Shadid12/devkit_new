var run = function(id){
	var s  = '#s' + id;
	var sel = $(s).find(':selected').val();
	var o = {
		room: sel,
		song: id
	}

	var socket = io();
	socket.emit('pl', o)

}
