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
        //one to man->urls have many tags, related by Tags table
        Projectfullurls.hasMany(models.Tags, {
            foreignKey: 'taggableId',
            constraints: false,
            scope: {
                tagg: 'Tags'
            }
        });
        Fullurls.hasMany(models.Snippets, {
            //one to man->urls have many snips, related via projectsnippets table
            foreignKey: 'snippableId',
            constraints: false,
            scope: {
                snipp: 'Snippets'
            }
        });
    };
    return Fullurls;
};