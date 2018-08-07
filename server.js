// Package dependenies
const express = require('express');
const bodyParser = require('body-parser');


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



// Set Handlebars.
const exphbs = require('express-handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');


// Import routes and give the server access to them.
require('./routes/html-routes.js')(app);
// require('./routes/api-routes.js')(app);



// Instantiate listener
db.sequelize.sync().then(function () {
	app.listen(PORT, function () {

		/*eslint-disable */
		//suppress all warnings between comments
		console.log("App listening on PORT" + PORT);
		/*eslint-enable */

	});
});