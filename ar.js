$(document).ready(function() {
	$('.switch').click(function() {
		$('.menu').toggleClass('visible');
});
});

function simpleScrollTo(element, speed) {
    $('html:not(:animated), body:not(:animated)').animate({scrollTop: $(element).offset().top}, speed, function() {
        document.location.hash = $(element).attr('id');
    });
}

