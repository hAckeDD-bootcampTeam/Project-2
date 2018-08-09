var db = require('../models');

module.exports = function (app) {

  db.tags.bulkCreate([
    { tag: 'Javascript'},
    { tag:'Travel'},
    { tag: 'Programming'},
    { tag: 'Cars'}
  ]).then(tag => {
    // console.log(tag)
});
};