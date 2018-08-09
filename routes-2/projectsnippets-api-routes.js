var db = require("../models");

module.exports = function (app) {

  db.Projectsnippets.bulkCreate([
    { snippet: 'This is some interesting text about data structures'},
    { snippet: 'Here is some text relating to Sequelize'},
    { snippet: 'This text was copied from a travel blog'},
    { snippet: 'this sure is interesting'}
  ]).then(snip => {
    //console.log(snip)
});
};