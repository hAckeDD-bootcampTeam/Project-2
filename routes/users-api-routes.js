var db = require("../models");

module.exports = function (app) {

  db.users.bulkCreate([
    { displayName: 'Elizabeth', email: 'elizabeth.porter.pevec@gmail.com', credentials:'AABBCC123'},
    { displayName: 'Angelina', email: 'angelinasemail@gmail.com', credentials:'DDEEFF321' },
    { displayName: 'David', email: 'davidsemail@gmail.com', credentials:'GGHHII567'},
    { displayName: 'Derek', email: 'dereksemail@gmail.com', credentials:'JJKKLL765'}
  ]).then(users => {
    // console.log(users)
});
};