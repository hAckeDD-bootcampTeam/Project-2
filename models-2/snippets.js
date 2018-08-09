module.exports = function (sequelize, DataTypes) {
    var Snippets = sequelize.define("Snippets", {
        snippet: {
            type: DataTypes.STRING,
            allowNull: true
        },
        //     snippableId: DataTypes.INTEGER,
        //     snipp: DataTypes.STRING
    });
    Snippets.associate = function (models) {
        //many-to-many->one snippet can be related to many comments, and one snippet can have many tags. This is related via snippets_tags
        Snippets.belongsToMany(models.Tags, {
            through: {
                model: models.Snippet_tags,
                unique: false,
                scope: {
                    taggable: 'Snippets'
                }
            },
            foreignKey: 'taggable_id',
            constraints: false
        });
        //many to one-> snips to a url
        Snippets.belongsTo(models.Fullurls, {
            foreignKey: 'snippableId',
            constraints: false,
            as: 'Snippets'
        });
    };
    return Snippets;
};

