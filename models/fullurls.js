module.exports = function (sequelize, DataTypes) {
    var Fullurls = sequelize.define("Fullurls", {
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        pagetitle: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        userdescription: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null
        }
    });

    Fullurls.associate = function (models) {
        Fullurls.belongsToMany(models.Snippets, {
            through: models.Snippet_fullurls,
            foreignKey: "fullurlid",
            onDelete: "no action",
            onUpdate: "no action"
        });
        Fullurls.belongsToMany(models.Tags, {
            through: models.Fullurl_tags,
            onDelete: "no action",
            onUpdate: "no action"
        });
    };
    return Fullurls;
};