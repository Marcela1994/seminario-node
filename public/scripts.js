//scripts de representacion 

function addMessage(msg) {

	var html = "<tr>";
	 	html += "<td>" + "yo" + "</td>"
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

	var msg = {
		username : username,
		message : $("#message").val(),
		timestamp : new Date().toISOString()
	}
	//ocultamos el username si ya se ha elegido uno
	if (username) {
		$("label[for='username']").hide();
		$("#username").hide();
	}

	addMessage(msg);
};


$( document ).ready(function() {
    $("#addMessage").click(submitMessage);
    time();
    window.setInterval(time, 5000);
});
