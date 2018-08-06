module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define("Tags", {
        tag: {
            type: DataTypes.STRING,
            // allowNull: false
        },
    });
    Tags.associate = function (models) {
        Tags.belongsToMany(models.Snippets, {
            through: models.Snippet_tags,
            onDelete: "no action",
            onUpdate: "no action"
        });
        Tags.belongsToMany(models.Projectfullurls, {
            through: models.Projectfullurl_tags,
            onDelete: "no action",
            onUpdate: "no action"
        });
        Tags.belongsToMany(models.Projectsnippets, {
            through: models.Projectsnippet_tags,
            onDelete: "no action",
            onUpdate: "no action"
        });

    };
    return Tags;
};