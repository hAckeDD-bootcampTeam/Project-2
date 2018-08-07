module.exports = function (sequelize, DataTypes) {
    var User_snippets = sequelize.define("User_snippets", {
        status: DataTypes.STRING
    });
    return User_snippets;
};