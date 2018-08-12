
/* eslint-disable */

// let db = require('../models');

module.exports = function (app) {
    app.get('/', function (req, res) {
        res.render('landing')
    });   

    app.get('/home', function (req, res) {
        res.render('home', { name: 'david'})
    });

    app.get('/projects', function (req, res) {
        res.render('projects')
    });

};
