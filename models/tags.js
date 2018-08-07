module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define("Tags", {
        tag: {
            type: DataTypes.STRING,
            // allowNull: false
        },
    });
    Tags.associate = function (models) {
        //tags can have many snippets, and snippets can have many tags. These are assoc via Snippe-tags table
        Tags.belongsToMany(models.Snippets, {
            through: models.Snippet_tags,
            onDelete: "no action",
            onUpdate: "cascade"
        });
         //tags can have many fullurls from a project, and fullurls from a project can have many tags. These are assoc via Projectfullurl_tags table
        Tags.belongsToMany(models.Projectfullurls, {
            through: models.Projectfullurl_tags,
            onDelete: "no action",
            onUpdate: "cascade"
        });
        //tags can have many snippets from a project, and snippets from a project can have many tags. These are assoc via Projectsnippet_tags table
        Tags.belongsToMany(models.Projectsnippets, {
            through: models.Projectsnippet_tags,
            onDelete: "no action",
            onUpdate: "cascade"
        });

    };
    return Tags;
};