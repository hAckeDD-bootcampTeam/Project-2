var db = require("../models");

module.exports = function (app) {

    db.Projects.bulkCreate([
        { projectName: 'Trilogy Group Project # 2', description: 'Our second project, which is marked as private', accesstype: "Public"},
        { projectName: 'Guitar Lessons', description: 'Place to keep our guitar-related info', accesstypeId:"Private"},
        { projectName: 'Trip to Rome!', description: 'All the fun things we can do in Rome', accesstype:"Private"},
    ]).then(project => {
        //console.log(project)
    });
};