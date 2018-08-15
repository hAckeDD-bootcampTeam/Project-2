/* eslint-disable */
 
module.exports = function (app) {
    // Hit the main route
    app.get('/', function (req, res) {
        res.render('landing')
    });   

    // hit users home page
    app.get('/home', function (req, res) {
        res.render('home')
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
