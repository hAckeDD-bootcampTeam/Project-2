var db = require("../models");

module.exports = function (app) {

    db.Projectcomments.bulkCreate([
        { commenttext: 'Hi, my name is Derek and I approve of this message' },
        { commenttext: 'I think that this link is really helpful - David' },
        { commenttext: 'This sounds perfect for what we want to accomplish - Angelina' },
        { commenttext: 'Elizabeth: There are some really good data structure examples here' }
    ]).then(comment => {
        //console.log(comment)
    });
};