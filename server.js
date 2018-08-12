
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


// Instantiate listener
//E's testing-seeding table
db.sequelize.sync({ force: true }).then(function () {
	//db.sequelize.sync().then(function () {
	db.Users.bulkCreate([
		{ displayName: 'Elizabeth', email: 'elizabeth.porter.pevec@gmail.com', hashed_email_pw: 'AABBCC123', google: '', hashed_google_pw: '' },
		{ displayName: 'Angelina', email: '', hashed_email_pw: '', google: 'angelinasemail@gmail.com', hashed_google_pw: 'DDEEFF321' },
		{ displayName: 'David', email: '', hashed_email_pw: '', google: 'davidsemail@gmail.com', hashed_google_pw: 'GGHHII567' },
		{ displayName: 'Derek', email: 'dereksemail@gmail.com', hashed_email_pw: 'JJKKLL765', google: '', hashed_google_pw: '' }
	]).then(users => {
		console.log(users)
	});
	db.Fullurls.bulkCreate([
		{ url: 'https://www.reddit.com/r/node/comments/8bf4gb/what_are_your_experiences_with_the_sequelize_orm/', pagetitle: 'What are your experiences with the sequelize ORM?', userdescription: '' },
		{ url: 'https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize', pagetitle: 'How to organize a node app that uses sequelize?', userdescription: '' },
		{ url: 'https://www.danflyingsolo.com/why-learn-to-scuba-dive-padi/', pagetitle: 'Why learning to Scuba Dive will change your life', userdescription: '' }
	]).then(furls => {
		// console.log(furls)
	});
	db.Projectgroupmembers.bulkCreate([
		{ membertype: 'Admin' },
		{ membertype: 'Editor' },
		{ membertype: 'Admin' },
		{ membertype: 'Admin' }
	]).then(members => {
		//console.log(members)
	});
	db.Owners.bulkCreate([
		{ upvotes: '2', downvotes: '3', owner_type: 'Users' },
		{ upvotes: '2', downvotes: '3', owner_type: 'Projects' },
		{ upvotes: '2', downvotes: '3', owner_type: 'Users' },
	]).then(reference => {
		//console.log(reference)
	});
	db.Projects.bulkCreate([
		{ projectName: 'Trilogy Group Project # 2', description: 'Our second project, which is marked as private', accesstype: 'Public' },
		{ projectName: 'Guitar Lessons', description: 'Place to keep our guitar-related info', accesstype: 'Private' },
		{ projectName: 'Trip to Rome!', description: 'All the fun things we can do in Rome', accesstype: 'Public' },
	]).then(project => {
		//console.log(project)
	});
	db.Snippets.bulkCreate([
		{ snippet: 'This is some interesting text about data structures' },
		{ snippet: 'Here is some text relating to Sequelize' },
		{ snippet: 'This text was copied from a travel blog' },
		{ snippet: 'this sure is interesting' }
	]).then(snip => {
		// console.log(snip)
	});
	db.Tags.bulkCreate([
		{ tag: 'Javascript' },
		{ tag: 'Travel' },
		{ tag: 'Programming' },
		{ tag: 'Cars' }
	]).then(tag => {
		// console.log(tag)
	});
	db.Taggable.bulkCreate([
		{ tag_id: '1', taggable: 'Fullurls', taggable_id: '2' },
		{ tag_id: '1', taggable: 'Fullurls', taggable_id: '3' },
		{ tag_id: '2', taggable: 'Snippets', taggable_id: '1' },
		{ tag_id: '5', taggable: 'Fullurls', taggable_id: '3' }
	]).then(taggable => {
		// console.log(taggable)
	});
	db.Commentable.bulkCreate([
		{ commenttext: 'Hi, my name is Derek and I approve of this message' },
		{ commenttext: 'I think that this link is really helpful - David' },
		{ commenttext: 'This sounds perfect for what we want to accomplish - Angelina' },
		{ commenttext: 'Elizabeth: There are some really good data structure examples here' }
	]).then(comment => {
		//console.log(comment)
	});

	app.listen(PORT, function () {
		console.log("App listening on PORT" + PORT);
		/*eslint-enable */
	});
});