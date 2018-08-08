/* eslint-disable */

// Landing page animations

$('#about-div').hide(); 

$(document).ready(function () {
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


// Javascript for login page

