var db = require("../models");

module.exports = function (app) {

    db.Projectfullurls.bulkCreate([
        { url: 'https://www.reddit.com/r/node/comments/8bf4gb/what_are_your_experiences_with_the_sequelize_orm/', pagetitle: 'What are your experiences with the sequelize ORM?', userdescription: '' },
        { url: 'https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize', pagetitle: 'How to organize a node app that uses sequelize?', userdescription: '' },
        { url: 'https://www.danflyingsolo.com/why-learn-to-scuba-dive-padi/', pagetitle: 'Why learning to Scuba Dive will change your life', userdescription: '' }
    ]).then(purls => {
        //console.log(purls)
    });
};