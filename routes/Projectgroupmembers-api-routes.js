var db = require("../models");

module.exports = function (app) {

    db.projectgroupmembers.bulkCreate([
        {membertype: 'Admini'},
        {membertype: 'Editor'},
        {membertype: 'Viewer'},
    ]).then(members => {
        //console.log(members)
    });
};