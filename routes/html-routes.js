/* eslint-disable */
 
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
