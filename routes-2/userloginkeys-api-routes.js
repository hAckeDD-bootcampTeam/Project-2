var db = require("../models");

module.exports = function (app) {

    db.UserLogInKeys.bulkCreate([
        { Userid: '1', google: 'AABBCC123' },
        { Userid: '2', google: 'DDEEFF321' },
        { Userid: '3', google: 'GGHHII567' },
        { Userid: '4', google: 'JJKKLL765' }
    ]).then(login => {
        console.log(login)
    });
};