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


	// Selectors

	// Login information
	let newUserName = $('#new-userName'); 
	let newUserPassW = $('#new-userPassW'); 
	let newUserBtn = $('#new-UserBtn'); 

	let currUserName = $('#current-userName'); 
	let currUserPassW = $('#current-UserPassW'); 
	let currUserBtn = $('#current-UserBtn'); 

	let googleLogIn = $('#google-log-in'); 


	// Log in button on click
		googleLogIn.click(function () {
			console.log('Google Log In')  
		})

		newUserBtn.click(function () {
			event.preventDefault(); 
			console.log(newUserName.val()); 
			console.log(newUserPassW.val()); 
		})


		currUserBtn.click(function () {
			event.preventDefault(); 
			console.log(currUserName.val()); 
			console.log(currUserPassW.val()); 
		})




});




