/* eslint-disable */

$(document).ready(function () {

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

	// Create anew user with credentials
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
		signUpUser(newuser)
			.then(function (userdata) {
				console.log('The new user\'s info is being added to localStorage');
				localStorage.setItem("userpw", userdata.hashedpassword);
				localStorage.setItem("userid", userdata.id);
				localStorage.setItem("useremail", userdata.email);
			})
			.then(function () {
				newUserEmail.val("");
				newUserPassW.val("");
				window.location.replace("/home"); //send user to their home page
			});

	});

	// An existing user logs in this way
	currUserBtn.click(function () {
		event.preventDefault();

		var currentuser = {
			email: currUserName.val().trim(),
			password: currUserPassW.val().trim(),
		};

		// If there is no email or password given
		if (!currentuser.email || !currentuser.password) {
			console.log('The username or password is empty');
			return;
		}

		signInUser(currentuser)
			.then(function (userdata) {
				console.log('The existing user\'s info is being added to localStorage');
				localStorage.setItem("userpw", userdata.hashedpassword);
				localStorage.setItem("userid", userdata.id);
				localStorage.setItem("useremail", userdata.email);
			})
			.then(function () {
				currUserName.val("");
				currUserPassW.val("");
				window.location.replace("/home"); //send user to their home page
			});


	});

	// Does a post to the signup route. If successful, we are redirected to the members page
	// Otherwise we log any errors
	function signUpUser(newuser) {

		console.log(`Attempting to sign up new user: ${JSON.stringify(newuser)}`)

		return new Promise(function (resolve, reject) {

			$.post("/api/signup", newuser)
				.then(function (data) {

					//console.log(data);
					userInfo = {
						email: data.email,
						id: data.id,
						hashedpassword: data.password, // Not sure if we should be returning just this or the id
						createdAt: data.createdAt,
						updatedAt: data.updatedAt
					}
					console.log(`New user info from the database: ${JSON.stringify(userInfo)}`)
					resolve(userInfo);
				})
				.catch(handleLoginErr);
		});
	}

	function signInUser(user) {

		console.log(`Attempting to sign in existing user: ${JSON.stringify(user)}`)

		return new Promise(function (resolve, reject) {

			$.post("/api/login", { email: user.email, password: user.password })
				.then(function (data) {
					console.log('after login check');
					//console.log(data);
					userInfo = {
						email: data.email,
						id: data.id,
						hashedpassword: data.hashedpassword, // Not sure if we should be returning just this or the id
						createdAt: data.createdAt,
						updatedAt: data.updatedAt
					}
					console.log(`Existing user info from the database: ${JSON.stringify(userInfo)}`)
					resolve(userInfo);
				})
				.catch(handleLoginErr);
		});
	}

	// Not presently being used:
	// function getUserData(user) {

	// 	console.log(`Attempting to get user data for user: ${JSON.stringify(user)}`)

	// 	$.get("/api/user_data", user)
	// 		.then(function (data) {

	// 			userInfo = {
	// 				email: data.email,
	// 				id: data.id,
	// 				hashedpassword: data.password, // Not sure if we should be returning just this or the id
	// 				createdAt: data.createdAt,
	// 				updatedAt: data.updatedAt
	// 			}

	// 			console.log(`Existing user info from the database: ${JSON.stringify(userInfo)}`)
	// 		})
	// 		.catch(handleLoginErr);
	// }

	function handleLoginErr(err) {
		console.log('handleLoginErr: error detected');
		console.log(err.responseJSON);
	}

});




