$(document).ready(function() {
	$('.burger-menu').click(function(event) {
		$('.burger-menu,.header').toggleClass('active')
		$('body').toggleClass('no-scroll')
	})
})