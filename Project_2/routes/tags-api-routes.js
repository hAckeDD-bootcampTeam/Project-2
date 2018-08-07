var db = require("../models");

module.exports = function (app) {

  db.Tags.bulkCreate([
    { tag: 'Javascript'},
    { tag:'Travel'},
    { tag: 'Programming'},
    { tag: 'Cars'}
  ]).then(tag => {
    // console.log(tag)
});
};