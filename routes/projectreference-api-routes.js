var db = require('../models');

module.exports = function (app) {

    db.projectreference.bulkCreate([
        {upvotes: '2', downvotes: '3'},
        {upvotes: '2', downvotes: '3'},
        {upvotes: '2', downvotes: '3'},
    ]).then(reference => {
        //console.log(reference)
    });
};