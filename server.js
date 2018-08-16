/* eslint-disable */

// Package dependenies
const express = require('express');
const bodyParser = require('body-parser');
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
// Configure express. Allow getting port from the bound environment variable
const app = express();
const PORT = process.env.PORT || 8080;

// Use the models
const db = require('./models');

// Sets up parts of the express app that will be used, including static directory 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(express.static('public'));

// We need to use sessions to keep track of our user's login status
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main', partialsDir: __dirname + '/views/partials/' }));
app.set('view engine', 'handlebars');

// Import routes and give the server access to them.
require('./routes/html-routes.js')(app);
require("./routes/api-routes.js")(app);
// require("./routes/users-api-routes.js")(app);

// db.User.create({
//     displayName: 'Angelina', email: 'angelinasemail@gmail.com', password: 'EEFF321'
// }).then(user => {
//     //console.log(user)
// });
// db.Fullurl.create({
// 	url: 'https://knitting',
// 	userdescription: '',
// 	userid: '1'
// }).then(urls => {
// 	let furls = [urls]
// 	return furls
// }).then(furls => {
// 	db.Snippet.create({
// 		snippet: 'I love cats',
// }).then(snips => {
// 	let snippets = snips.setFullurls(snips)
// }).then(snippets => {

// })
// })
// db.Tag.create({
// 	tag: 'Travel'
// }).then(tags => {

// 		let taggables = tags.setTags(furls);
// 		return taggables
// 	}).then(taggables => {
// })
// })


// db.Snippet.create({
//     snippet: 'I love cats',
// }).then(snips => {
//     let snippets = [snips];
//     return snippets;
// }).then(snippets => {
//     db.Tag.create({
//         tag: 'Travel'
//     }).then(tags => {
// 	   let taggables =  [tags.setSnippets(snippets)]
// 	   return taggables
// }).then(taggables => {
// 	console.log(taggables)
// });
// });


// db.Fullurl.create({
// 	url: 'https://knitting',
// 	userdescription: '',
// 	userid: '1',
// 	Snippets: [{ snippet: 'I love hooks' }]
// }, {
// 		include: [db.Snippet]
// 	}).then(snips => {
// 		let snippets = [snips];
// 		console.log(snippets)
// 		return snippets
// 	})
// 	// .then(snippets => {
// 	db.Tag.create({
// 		tag: 'yarn'
// 	}).then(tags => {
// 		tags.setSnippets(snippets);
// 	}).then(taggables => {
//	})
//})
// db.Fullurl.findAll({
// 	where:
// 	{
// 	  userid: 1
// 	},
// 	include: [{
// 	  model: db.Snippet,
// 	  include: [{
// 		model: db.Tag,
// 		through: {
// 			attributes: ['TagId'],
// 		}
// 	  }]
// 	}]
//   }).then(urls => {
// 	  console.log(JSON.stringify(urls))

//   });
	

// db.Tag.findAll({
// 	where: {
// 		tag: 'Travel'
// 	},
// 	include: [{
// 		model: db.Snippet,
// 		through: {
// 			attributes: ['SnippetId'],
// 		},
// 		include: [{
// 			model: db.Fullurl,
// 		}]
// 	}]
// }).then(tags => {
// 	console.log(JSON.stringify(tags))
// })






// Instantiate listener
//E'sesting-seeding table
//db.sequelize.sync({ force: true }).then(function () {
db.sequelize.sync().then(function () {

	app.listen(PORT, function () {
		console.log("App listening on PORT" + PORT);

		//below console.log is from passport example
		// console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
		/*eslint-enable */
	});
});