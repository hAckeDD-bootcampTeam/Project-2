module.exports = function (sequelize, DataTypes) {
    var User_fullurls = sequelize.define("User_fullurls", {
        status: DataTypes.STRING
    });
    

    return User_fullurls;
};