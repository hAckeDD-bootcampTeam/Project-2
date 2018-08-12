/* eslint-disable */
var db = require("../models");

module.exports = function (app) {

    db.Projectaccesstypes.bulkCreate([
        { accesstype: 'Public' },
        { accesstype: 'Private' },
        { accesstype: 'Public' },
        { accesstype: 'Private' }
    ]).then(access => {
        // console.log(access)
    });
};