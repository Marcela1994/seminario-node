//comunicacion mediante socket.io

var socket;

if (typeof io !== 'undefined') {
	socket = io();
	socket.on('message', function(data) {
		if (!data.username) data.username = "anónimo";
	    addMessage(data);
	});
};

function sendMessage(msg)
{
	socket.emit('message', msg);
}


//scripts de representacion 

function addMessage(msg) {

	var html = "<tr>";
	 	html += "<td>" + (msg.username ? msg.username : "yo") + "</td>"
	 	html += "<td>" + msg.message + "</td>"
	 	html += "<td class='timestamp' data='" + msg.timestamp + "'>" + msg.timestamp + "</td>"
	 	html += "</tr>";

	$("tbody").prepend(html);
	time();
};

function time() {
	$(".timestamp").each(function(){
		$(this).text($.timeago($(this).attr('data')));
	});
}


//eventos

function submitMessage() {
	var username = $("#username").val();
	var message = $("#message").val();

	if (message){
		var msg = {
			username : username,
			message : message,
			timestamp : new Date().toISOString()
		}
		//ocultamos el username si ya se ha elegido uno
		if (username) {
			$("label[for='username']").hide();
			$("#username").hide();
		}

		//limpiamos el form
		$("#message").val('');
		$("#mandatory").removeClass("has-error");

		addMessage({ message: msg.message, timestamp: msg.timestamp });
		sendMessage(msg);
	} else
	{
		$("#mandatory").addClass("has-error");
	}
};


$( document ).ready(function() {
    $("#addMessage").click(submitMessage);
    time();
    window.setInterval(time, 30000);
});
