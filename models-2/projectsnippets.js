module.exports = function (sequelize, DataTypes) {
    var Projectsnippets = sequelize.define('Projectsnippets', {
        snippet: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        snippableId: DataTypes.INTEGER,
        snipp: DataTypes.STRING
    });
    Projectsnippets.associate = function (models) {
        //many-to-many->one tag can be related to many snippets, and one snippet can have many tags. This is related via snippets_tags
         Projectsnippets.belongsToMany(models.Tags, {
            through: {
                model: models.Projectcomment_tags,
                unique: false,
                scope: {
                    taggable: 'Projectsnippets'
                }
            },
            foreignKey: 'taggable_id',
            constraints: false
        });
        //many-to-many->one snippet can be related to many comments, and one snippet can have many tags. This is related via snippets_tags
        Projectsnippets.belongsToMany(models.Projectcomments, {
            through: {
                model: models.Projectcomment_tags,
                unique: false,
                scope: {
                    commentable: 'Projectsnippets'
                }
            },
            foreignKey: 'comment_id',
            constraints: false
        });
        //many to one-> snips to a url
        Projectsnippets.belongsTo(models.Projectfullurls, {
            foreignKey: 'snippableId',
            constraints: false,
            as: 'Projectsnippets'
        });
        // Projectsnippets.hasMany(models.Projectreference_snippets, {
        //     onDelete: "no action",
        //     onUpdate: "cascade"
        // });
        // Projectsnippets.hasMany(models.Projectreference_comments, {
        //     onDelete: "no action",
        //     onUpdate: "cascade"
        // });
    };
    return Projectsnippets
};