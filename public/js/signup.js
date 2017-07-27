$(document).ready(function(){
	$("#signup").click(function(){

		var email = $("#email").val();
		var pass  = $("#pass").val();
		var data = {
			email: email,
			pass: pass
		}

		$.post('/signup', data, function(d){
			console.log("done");
		});

	})
});