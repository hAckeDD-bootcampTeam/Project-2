var db = require("../models");

module.exports = function (app) {

  db.Users.bulkCreate([
    { displayName: 'Elizabeth', email: 'elizabeth.porter.pevec@gmail.com' },
    { displayName: 'Angelina', email: 'angelinasemail@gmail.com' },
    { displayName: 'David', email: 'davidsemail@gmail.com' },
    { displayName: 'Derek', email: 'dereksemail@gmail.com' }
  ]).then(users => {
    // console.log(users)
});
};