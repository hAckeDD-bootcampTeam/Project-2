module.exports = function (sequelize, DataTypes) {
    var Projectsnippets = sequelize.define("Projectsnippets", {
        snippet: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
    });
    Projectsnippets.associate = function (models) {
        Projectsnippets.hasMany(models.Projectreference_snippets, {
            onDelete: "no action",
            onUpdate: "cascade"
        });
        Projectsnippets.hasMany(models.Projectreference_comments, {
            onDelete: "no action",
            onUpdate: "cascade"
        });
    };
    return Projectsnippets
};