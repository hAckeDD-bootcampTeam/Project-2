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
            onUpdate: "no action"
        });
        Projectsnippets.hasMany(models.Projectreference_comments, {
            onDelete: "no action",
            onUpdate: "no action"
        });
    };

    return Projectsnippets
};