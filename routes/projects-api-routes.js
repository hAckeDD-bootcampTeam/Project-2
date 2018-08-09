var db = require("../models");

module.exports = function (app) {

    db.projects.bulkCreate([
        { projectName: 'Trilogy Group Project # 2', description: 'Our second project, which is marked as private', accesstypeId: "Public"},
        { projectName: 'Guitar Lessons', description: 'Place to keep our guitar-related info', accesstypeId:"Private"},
        { projectName: 'Trip to Rome!', description: 'All the fun things we can do in Rome', accesstypeId:"Public"},
    ]).then(project => {
        //console.log(project)
    });
};