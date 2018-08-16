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

        setTimeout(function () {
            db.Tags.findAll({
            }).then(function (tags) {
                let tagArray = [];
                // store the tags in an array without duplicates
                tags.forEach((tag) => {
                    let tagName = tag.dataValues.tagName;
                    if (tagArray.indexOf(tagName) === -1) {
                        tagArray.push(tagName);
                    }

                })
                // pass the array into handlebars
                let tagObject = {
                    tags: tagArray,
                }

                console.log(tagObject)
                // render the home page with the tags
                res.render('home')
            });
        }, 300);
 
    });

            //GET REQUEST TO RENDER ONLY A PARTIAL AFTER THE PAGE HAS LOADED

            // app.get('/projectView/:search_term', function (req, res) {
            //     res.render(
            //         'partials/projPart',
            //          Object.assign({layout : false}, test)
            //     );
            // });

            // FRONT END REQ LOOKS LIKE
            // $.ajax({
            //     url: '/theseProjects',
            //   }).then( function () {
            
            //   }); 
      

    // REMOVED B/C SCOPE
    // hit their projects page
    // app.get('/projects', function (req, res) {
    //     res.render('projects')
    // });

};
