module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define("Tags", {
        // tag: {
        //     type: DataTypes.STRING,
        //     // allowNull: false
        // },
        // //this goes with urls
        // taggableId: DataTypes.INTEGER,
        // tagg: DataTypes.STRING
    });
    Tags.associate = function (models) {
        //many-to-many->one tag can be related to several comments, and one comment can have many tags. This is related via Projecttags_comment_snips
        Tags.belongsToMany(models.Projectcomments, {
            through: {
                model: models.Projecttags_comment_snips,
                unique: false,
                foreignKey: 'tag_id',
                constraints: false
            },
        }),
            //many-to-many->one tag can be related to many snippets, and one snippet can have many tags. This is related via Projecttags_comment_snips
            Tags.belongsToMany(models.Projectsnippets, {
                through: {
                    model: models.Projecttags_comment_snips,
                    unique: false,
                    foreignKey: 'tag_id',
                    constraints: false
                },
            });
        //one to many->urls to tags. direct link between url and tag tables
        Tags.belongsTo(models.Projectfullurls, {
            //using defined above for urls
            foreignKey: 'taggableId',
            constraints: false,
            as: 'Tags'
        });
        Tags.belongsToMany(models.Snippets, {
            through: {
                model: models.Snippet_tags,
                unique: false,
                foreignKey: 'tag_id',
                constraints: false
            },
        });
    //one to many->urls to tags. direct link between url and tag tables
    Tags.belongsTo(models.Fullurls, {
        //using defined above for urls
        foreignKey: 'taggableId',
        constraints: false,
        as: 'Tags'
    });
    };
    return Tags;
};