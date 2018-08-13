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
        res.render('home')
    });

    // hit their projects page
    app.get('/projects', function (req, res) {
        res.render('projects')
    });

};
