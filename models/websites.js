module.exports = function (sequelize, DataTypes) {
    var Websites = sequelize.define("Websites", {
        url: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Websites;
};