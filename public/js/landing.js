/* eslint-disable */


$(document).ready(function () {

// Hide the side-drop about div whwnever the page loads
	$('#about-div').hide(); 

//'About' div toggle when question mark pressed
	$('#landing-qMark').click(function () {
		$('#about-div').animate({
			width: 'toggle'
		});
		if( $('#landing-page-br').css('filter') == 'blur(5px)') {
			$('#landing-page-br').css('filter', 'blur(0px)'); 
		} else {
			$('#landing-page-br').css('filter', 'blur(5px)');
		}
	});
	
});




