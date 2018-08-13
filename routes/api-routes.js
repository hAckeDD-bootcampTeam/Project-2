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
    res.json("/members");
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function(req, res) {
    console.log(req.body);
    db.User.create({
      email: req.body.email,
      password: req.body.password
    }).then(function() {
      res.redirect(307, "/api/login");
    }).catch(function(err) {
      console.log(err);
      res.json(err);
      // res.status(422).json(err.errors[0].message);
    });
  });

  // Route for logging user out
  app.get("/logout", function(req, res) {
    req.logout();
    res.redirect("/");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function(req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    }
    else {
      // Otherwise send back the user's email and id
      // Sending back a password,  even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  });


// PROJECTS PAGE
 
  // Projects page, add a new usr to he group
  app.put("/joinGroup", function (req, res) {
    let groupAddedTo = req.body.project_name; 
    let user = req.body.user_name; 

    res.sendStatus('202');
  });  

  //route for filtering by tag name 
  app.get("/filterbytag/:tag", function (req, res) {
    let filterTag = req.params.tag; 

    res.sendStatus('200')
  }); 


// HOME PAGE 

// Personal cache routes

// add a new snippet
app.post("/newPersSnip", function (req, res) {
  let {snipName,  snipDesc, snipTag} = req.body; 

  res.sendStatus('201'); 
}); 

// search snippet by optional filters
app.get("/searchPersSnip/:tagValue/:filterTag/:filterText", function (req, res) {
    let {tagValue, filterTag, filterText} = req.params; 

    console.log(tagValue); 
    console.log(filterTag); 
    console.log(filterText); 

    res.sendStatus('200'); 
}); 

// add a tago a specific snippet
app.post("/newSnipTag", function (req, res) {
  let {newTag, snipID} = req.body; 

  res.sendStatus('201'); 
}); 

// delete a tag from a specific snippet
app.delete("/delSnipTag/:tagName", function (req, res) {
  let tagName = req.params.tagName; 

  console.log(tagName); 
  res.sendStatus('202');
});  


// delete an entire snippet
app.delete("/delFullSnip/:snipName", function (req, res) {
  let snipName = req.params.snipName; 

  console.log(snipName); 
  res.sendStatus('202');
}); 

// Project routes

app.post("/newProj/:view", function (req, res) {
  let {projName, projDesc} = req.body; 
  let isPrivate = req.params.view; 

  console.log(projName); 
  console.log(projDesc); 
  console.log(isPrivate); 

  res.sendStatus('201'); 
}); 

app.put("/changeProjView/:view", function (req, res) {
  let projView = req.params.view; 

  console.log(projView)
  res.sendStatus('200');
}); 

app.put("/changeProjInfo", function (req, res) {
  let {changedName, changedDesc} = req.body; 

  console.log(changedName);  
  console.log(changedDesc); 
  res.sendStatus('200');
}); 

app.post("/addSnipObj", function (req, res) {
  let {newSnipUrl, newSnipTag, newSnipText} = req.body; 

  console.log(newSnipUrl);  
  console.log(newSnipTag);  
  console.log(newSnipText); 
  res.sendStatus('201');
}); 

app.delete("/delProj/:projName", function (req, res) {
  let projName = req.params.projSnipName; 

  console.log(projName); 
  res.sendStatus('202');
}); 

app.put("/changeMemberRights/:viewChanged/:userID", function (req, res) {
  let {viewChanged, userID} = req.params; 

  console.log(viewChanged);  
  console.log(userID); 

  res.sendStatus('200');
}); 

app.delete("/delProjURL/:urlID", function (req, res) {
  let urlID = req.params.urlID; 

  console.log(urlID); 
  res.sendStatus('202');
}); 

app.get("/searchProjSnip/:projTagValue/:projFilterTag/:projFilterText", function (req, res) {
  let {projTagValue, projFilterTag, projFilterText} = req.params; 

  console.log(projTagValue); 
  console.log(projFilterTag); 
  console.log(projFilterText); 

  res.sendStatus('200'); 
});

app.post("/addProjURL", function (req, res) {
  let newURL = req.body.URL; 

  console.log(newURL);  

  res.sendStatus('201');
}); 


app.delete("/delProjSnippet/:snipID", function (req, res) {
  let snipID = req.params.snipID; 

  console.log(snipID);  
  res.sendStatus('202');
}); 


app.post("/addProjTag", function (req, res) {
  let newTag = req.body.tagName; 

  console.log(newTag);  

  res.sendStatus('201');
}); 

app.delete("/delProjTag/:tagName", function (req, res) {
  let projTagName = req.params.tagName; 

  console.log(projTagName);  
  res.sendStatus('202');
});

};