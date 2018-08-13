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
	//let userName = 'ID retrieved from database'
	let userInfo = {}; // Object that contains the information about a logged-in user


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

		// If there is no email or password given
		if (!newuser.email || !newuser.password) {
			console.log('The username or password is empty');
			return;
		}

		// If we have an email and password, run the signUpUser function
		// and set the fields on the page to blank
		signUpUser(newuser);
		newUserEmail.val("");
		newUserPassW.val("");

	});

	// When an existing user tries to log in
	currUserBtn.click(function () {
		event.preventDefault();
		var currentuser = {
			email: currUserName.val().trim(),
			password: currUserPassW.val().trim(),
		};

		signInUser(currentuser);
		currUserName.val("");
		currUserPassW.val("");		

	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(newuser) {

		console.log(`Attempting to sign up new user: ${JSON.stringify(newuser)}`)
		
		$.post("/api/signup", newuser, )
		.then(function (data) {
			//window.location.replace(data);
			userInfo.email = data.email;
			userInfo.id = data.id;
			userInfo.hashedpassword = data.password; // Not sure if we should be returning just this or the id
			console.log(`New user info from the database: ${JSON.stringify(userInfo)}`)
			})
			.catch(handleLoginErr);
	}

	function signInUser(user) {

		console.log(`Attempting to sign in existing user: ${JSON.stringify(user)}`)

		//$.get("/api/user_data", user, )
		$.post("/api/login", user, )
			.then(function (data) {
				//window.location.replace(data);
				//console.log(data);
				userInfo.email = data.email;
				userInfo.id = data.id;
				userInfo.hashedpassword = data.password; // Not sure if we should be returning just this or the id

				console.log(`Existing user info from the database: ${JSON.stringify(userInfo)}`)
			})
			.catch(handleLoginErr);
	}

	function getUserData(user) {

		console.log(`Attempting to get user data for user: ${JSON.stringify(user)}`)

		$.get("/api/user_data", user, )
			.then(function (data) {
				//window.location.replace(data);
				//console.log(data);
				userInfo.email = data.email;
				userInfo.id = data.id;
				userInfo.hashedpassword = data.password; // Not sure if we should be returning just this or the id

				console.log(`Existing user info from the database: ${JSON.stringify(userInfo)}`)
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




