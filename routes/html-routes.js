/* eslint-disable */

// let db = require('../models');

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
    app.get('/', function (req, res) {
        res.render('landing')
    });   

    app.get('/home', function (req, res) {
        res.render('home')
    });

    app.get('/projects', function (req, res) {
        res.render('projects')
    });

};
