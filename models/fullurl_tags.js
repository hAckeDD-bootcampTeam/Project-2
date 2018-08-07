module.exports = function (sequelize, DataTypes) {
    var Fullurl_tags = sequelize.define("Fullurl_tags", {
        status: DataTypes.STRING
    });
    

    return Fullurl_tags;
};