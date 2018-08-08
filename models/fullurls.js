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
        //many Fullurls can have many Snippets, and vice versa, they area associated through the Snippet_fullurls table
        Fullurls.belongsToMany(models.Snippets, {
            through: models.Snippet_fullurls,
            foreignKey: "fullurlid",
            onDelete: "no action",
            onUpdate: "cascade"
        });
         //many Fullurls can have many tags, and vice versa, they area associated through the Fullurl_tags table
        Fullurls.belongsToMany(models.Tags, {
            through: models.Fullurl_tags,
            onDelete: "no action",
            onUpdate: "cascade"
        });
    };
    return Fullurls;
};