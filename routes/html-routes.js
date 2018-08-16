/* eslint-disable */

var db = require("../models");
module.exports = function (app) {
    // Hit the main route
    app.get('/', function (req, res) {
        res.render('landing')
    });

    // hit users home page
    // hit users home page
    app.get('/home', function (req, res) {
        //get all the tags from the database
        let renderObject = {}

        db.userTest.find({
            where: {
                id: '1'
            }
        }).then(function (users) {
            console.log(users.dataValues)
            db.snipTest.findAll({
                where: {
                    userTestId: users.dataValues.id
                }
            }) .then(function (snips) {
                console.log(snips.dataValues, 'bla')
                db.tagTest.findAll({
                    where: {
                        snipTestId: snips[0].dataValues.userTestId
                    }
                }).then(function (tags) {
                    console.log(tags[0].dataValues)
                    res.render('home')
    
                });

            });
        });

        // res.render('home')

    });

};

