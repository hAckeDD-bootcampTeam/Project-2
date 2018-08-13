/* eslint-disable */


$(document).ready(function () {

	// Selectors

	// Selectors for the floating icon and background that it shows when clickced
	let aboutDiv = $("#about-div");
	let landingQMark = $('#landing-qMark');

	// Hide the side-drop about div whwnever the page loads
	aboutDiv.hide();

	//'About' div toggle when question mark pressed
	landingQMark.click(function () {
		aboutDiv.animate({
			width: 'toggle'
		});
		if ($('#landing-page-br').css('filter') == 'blur(5px)') {
			$('#landing-page-br').css('filter', 'blur(0px)');
		} else {
			$('#landing-page-br').css('filter', 'blur(5px)');
		}
	});

	// New User Login info
	let newUserName = $('#new-userName');
	let newUserEmail = $('#new-userEmail')
	let newUserPassW = $('#new-userPassW');
	let newUserBtn = $('#new-UserBtn');

	// Current user login info
	let currUserName = $('#current-userName');
	let currUserPassW = $('#current-UserPassW');
	let currUserBtn = $('#current-UserBtn');

	// Google log in
	let googleLogIn = $('#google-log-in');

	//variable to store the user Information
	let userName = 'ID retrieved from database'


	// Log in button on click
	googleLogIn.click(function () {
		console.log('Google Log In')
	}); 

	newUserBtn.click(function () {
		event.preventDefault();
		console.log(newUserName.val());
		console.log(newUserEmail.val());
		console.log(newUserPassW.val());
	}); 

	currUserBtn.click(function () {
		event.preventDefault();
		console.log(currUserName.val());
		console.log(currUserPassW.val());
	}); 




});




