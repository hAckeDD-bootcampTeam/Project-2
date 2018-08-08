module.exports = function (sequelize, DataTypes) {
    var Projectfullurl_tags = sequelize.define("Projectfullurl_tags", {
        tag: {
            type: DataTypes.STRING,
            // allowNull: false
        },
    });

    return Projectfullurl_tags
};