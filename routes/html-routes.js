/* eslint-disable */

// let db = require('../models');

// Example of how to pass an object into HB to render properly with partials
    // let test = {
    //     users : {
    //         user1 : {
    //             name: 'David'
    //         }, 
    //         user2 : {
    //             name: 'John' 
    //         }
    //     }
    // }
 
module.exports = function (app) {
    // Hit the main route
    app.get('/', function (req, res) {
        res.render('landing')
    });   

    // hit users home page
    app.get('/home', function (req, res) {

        // here I need to run a sequelize query to find the user info based on the hashed password
        // the result of that query, or parts of it, is what gets passed to the render below, so that we can add it to the html
        
        user = { 
                name : 'David', 
                age: '25'
        }
        
        res.render('home', user)
    });

    // hit their projects page
    app.get('/projects', function (req, res) {
        res.render('projects')
    });

};
