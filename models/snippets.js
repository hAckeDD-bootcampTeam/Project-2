module.exports = function (sequelize, DataTypes) {
    var Snippets = sequelize.define("Snippets", {
        snippet: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    return Snippets;
};

