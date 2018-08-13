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

		var newuser = {
			email: newUserEmail.val().trim(),
			password: newUserPassW.val().trim(),
		};
		console.log(JSON.stringify(newuser));

		// If there is no email or password given
		if ( !newuser.email || !newuser.password) {
			console.log('The username or password is empty');
			return;
		}

		// If we have an email and password, run the signUpUser function
		// and set the fields on the page to blank
		signUpUser(newuser);
		newUserEmail.val("");
		newUserPassW.val("");

	});

	currUserBtn.click(function () {
		event.preventDefault();
		console.log(currUserName.val());
		console.log(currUserPassW.val());

		var currentuser = {
			username: currUserName.val().trim(),
			password: currUserPassW.val().trim(),
		};
		console.log(JSON.stringify(currentuser));

	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(newuser) {

		alert('Attempting to sign up new user: ' + JSON.stringify(newuser));

		$.post("/api/signup", newuser,
		)
			.then(function (data) {
				//window.location.replace(data);
				console.log('successful post. .then happened with:');
				console.log(data);
			})
			.catch(handleLoginErr);
	}

	function handleLoginErr(err) {
		// $("#alert .msg").text(err.responseJSON);
		// $("#alert").fadeIn(500);
		console.log('error detected');
		console.log(err.responseJSON);
	}




});




