/* eslint-disable */

// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function(req, res) {
    // Since we're doing a POST with javascript, we can't actually redirect that post into a GET request
    // So we're sending the user back the route to the members page because the redirect will happen on the front end
    // They won't get this or even be able to access this page if they aren't authed
    console.log('api/login route');
    console.log(res.body);    
    //res.json("/members");
    res.json({message: 'hello!'});
  }); 

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    //console.log(req.body);

    var newUserInfo = {
      displayName: req.body.email, // initially the displayName is the same as the email. The user can update it themselves
      email: req.body.email,
      password: req.body.password
    }

    db.Users.create(newUserInfo)
      .then(function () {
        var userInfo = db.Users.findAll({
          where: {
            email: newUserInfo.email
          }
        })
          .then(function (user) {
            // User object to return from the database (review what data is actually required)
            var existinguserObject = {
              id: user[0].id,
              displayName: user[0].displayName,
              email: user[0].email,
              password: user[0].password,
              createdAt: user[0].createdAt,
              updatedAt: user[0].updatedAt
            };

            //res.json(user).redirect(307, "/api/login");
            res.json(existinguserObject);
          });

      }).catch(function (err) {
        console.log('catching error: ' + err);
        res.status(422).json(err.errors[0].message);
      });
  });

  // Route for logging user out. 
  // On the front end whatever calls this should also clear the user cookie on the front end
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  // We pass the hashed password to access the user data? review what should be passed.
  app.get("/api/user_data", function (req, res) {

    console.log('/api/user_data route');
    console.log(req);

    var userInfo = db.Users.findAll({
      where: {
        email: req.email
      }
    })
      .then(function (user) {
        console.log('returning user: ' + user);

        if (!user) {
          // The user is not logged in, send back an empty object
          console.log('user not found in database');
          res.json({});
        }
        else {
          // Otherwise send back the user's email and id
          // Sending back a password, even a hashed password, isn't a good idea
          
          var existinguserObject = {
            id: user[0].id,
            displayName: user[0].displayName,
            email: user[0].email,
            password: user[0].password,
            createdAt: user[0].createdAt,
            updatedAt: user[0].updatedAt
          };          
          
          res.json(existinguserObject);
        }
      });
  });


// PROJECTS PAGE

    // REMOVED B/C SCOPE
 
  // // Projects page, add a new usr to he group
  // app.put("/joinGroup", function (req, res) {

  //   let groupAddedTo = req.body.project_name; 
  //   let user = req.body.user_name; 

  //   res.sendStatus('202');
  // });  
 
  // //route for filtering by tag name 
  // app.get("/filterbytag/:tag", function (req, res) {
  //   let filterTag = req.params.tag; 

  //   res.sendStatus('200')
  // }); 

  // // get request for all the tags if the user clears the search bar
  // app.get("/allProjects", function (req, res) {

  //   res.sendStatus('200')
  // }); 



// HOME PAGE 

// Personal cache routes

// add a new snippet
app.post("/newPersSnip", function (req, res) {
  let {snipName,  snipDesc, snipTag} = req.body; 

  if(!snipName || !snipDesc || !snipTag) {
    res.sendStatus('400');
  } else {
    res.sendStatus('201'); 
  }
}); 


// search snippet by optional filters
app.get("/searchPersSnip/:tagValue", function (req, res) {
    let tagValue = req.params.tagValue;
    

    console.log(tagValue);  

    res.sendStatus('200'); 
}); 

// add a tag to a specific snippet
app.post("/newSnipTag", function (req, res) {
  let {newTag, snipID} = req.body; 

  res.sendStatus('201'); 
}); 


// delete a tag from a specific snippet
app.delete("/delSnipTag/:tagName", function (req, res) {
  let tagName = req.params.tagName; 

  if(!tagName) {
    res.sendStatus('400');
  } else {
    res.sendStatus('201'); 
  }

  console.log(tagName); 
  res.sendStatus('202');
});  


// delete an entire snippet
app.delete("/delFullSnip/:snipName", function (req, res) {
  let snipName = req.params.snipName; 

  if(!snipName) {
    res.sendStatus('400');
  } else {
    res.sendStatus('202'); 
  }
}); 

// Personal Project Routes

    // REMOVED B/C SCOPE

// // Add a new project, optionally filterred by the private function
// app.post("/newProj/:view", function (req, res) {
//   let {projName, projDesc} = req.body; 
//   let isPrivate = req.params.view; 

//   console.log(projName); 
//   console.log(projDesc); 
//   console.log(isPrivate); 

//   res.sendStatus('201'); 
// }); 

// // change the view of a project if the user is authorized
// app.put("/changeProjView/:view/:projID", function (req, res) {
//   let projView = req.params.view; 
//   let projID = req.params.projID; 

//   console.log(projView)
//   res.sendStatus('200'); 
// }); 

// // change the details of a project
// app.put("/changeProjInfo", function (req, res) {
//   let {changedName, changedDesc} = req.body; 

//   console.log(changedName);  
//   console.log(changedDesc); 
//   res.sendStatus('200');
// }); 

// // Add a snippet to an object
// app.post("/addSnipObj", function (req, res) {
//   let {newSnipUrl, newSnipTag, newSnipText} = req.body; 

//   console.log(newSnipUrl);  
//   console.log(newSnipTag);  
//   console.log(newSnipText); 
//   res.sendStatus('201');
// }); 

// // delete an entire project
// app.delete("/delProj/:projName", function (req, res) {
//   let projName = req.params.projSnipName; 

//   console.log(projName); 
//   res.sendStatus('202');
// }); 


// // user leaves a project
// app.put("/leaveProj/:projID", function (req, res) {
//   let {projID} = req.params; 

//   console.log(projID);  

//   res.sendStatus('200');
// }); 


// // Allow the admin to change the rights of other users, depending on the ID
// app.put("/changeMemberRights/:viewChanged/:userID", function (req, res) {
//   let {viewChanged, userID} = req.params; 

//   console.log(viewChanged);  
//   console.log(userID); 

//   res.sendStatus('200');
// }); 

// // delete a URL from a project, do not delete associated snippets
// app.delete("/delProjURL/:urlID", function (req, res) {
//   let urlID = req.params.urlID; 

//   console.log(urlID); 
//   res.sendStatus('202');
// }); 


// //  find all associated URL's and snippets, optionally filtered by tag and text
// app.get("/searchProjSnip/:projTagValue/:projFilterTag/:projFilterText", function (req, res) {
//   let {projTagValue, projFilterTag, projFilterText} = req.params; 

//   console.log(projTagValue); 
//   console.log(projFilterTag); 
//   console.log(projFilterText); 

//   res.sendStatus('200'); 
// });

// // add a URL to a project
// app.post("/addProjURL", function (req, res) {
//   let {newURL, snipID} = req.body; 

//   console.log(newURL);  
//   console.log(snipID);  

//   res.sendStatus('201');
// }); 

// // delete a snippet from a project
// app.delete("/delProjSnippet/:snipID", function (req, res) {
//   let snipID = req.params.snipID; 

//   console.log(snipID);  
//   res.sendStatus('202');
// }); 


// // add a tag to a snippet in a project
// app.post("/addProjTag", function (req, res) {
//   let newTag = req.body.tagName; 

//   console.log(newTag);  

//   res.sendStatus('201');
// }); 


// // delete a tag from a snippet inside a project
// app.delete("/delProjTag/:tagName", function (req, res) {
//   let projTagName = req.params.tagName; 

//   console.log(projTagName);  
//   res.sendStatus('202');
// });


};