/*Created 2015-02-28 by CodeCloud Team*/

function test_function(){
    alert('calling test_function');
}
$(document).ready(function() {
	setTimeout(function() {
		$("#main").removeClass("is-loading");
	}, 100)
});