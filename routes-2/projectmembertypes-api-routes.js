var db = require("../models");

module.exports = function (app) {

    db.Projectmembertypes.bulkCreate([
        {membertype: 'Administrator'},
        {membertype: 'Editor'},
        {membertype: 'Viewer'},
    ]).then(members => {
        //console.log(members)
    });
};