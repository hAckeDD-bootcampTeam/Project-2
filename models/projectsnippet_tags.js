module.exports = function (sequelize, DataTypes) {
    var Projectsnippet_tags = sequelize.define("Projectsnippet_tags", {
        tag: {
            type: DataTypes.STRING,
            // allowNull: false
        },
    });
    return Projectsnippet_tags
};