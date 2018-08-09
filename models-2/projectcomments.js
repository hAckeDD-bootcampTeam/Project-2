module.exports = function (sequelize, DataTypes) {
    var Projectcomments = sequelize.define('Projectcomments', {
        commenttext: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        //defined for urls
        commentId: DataTypes.INTEGER,
        comm: DataTypes.STRING
    });
    Projectcomments.associate = function (models) {
        //many-to-many->linking project comments with their tags via projecttags_comment_snips table
        Projectcomments.belongsToMany(models.Tags, {
            through: {
                model: models.Projecttags_comment_snips,
                unique: false,
                scope: {
                    taggable: 'Projectcomments'
                }
            },
            foreignKey: 'taggable_id',
            constraints: false
        });
         //many-to-many->linking project comments with their snips via projecttags_comment_snips table
        Projectcomments.belongsToMany(models.Projectsnippets, {
            through: {
                model: models.Projecttags_comment_snips,
                unique: false,
                scope: {
                    snippetable: 'Projectcomments'
                }
            },
            foreignKey: 'snippetable_id',
            constraints: false
        });
        //using what's defined above for urls
        Projectcomments.belongsTo(models.Projectfullurls, {
            foreignKey: 'commentId',
            constraints: false,
            as: 'Projectcomments'
        });
        
        // Projectcomments.hasMany(models.Projectreference_comments, {
        //     onDelete: "no action",
        //     onUpdate: "cascade"

        // });
    };
    return Projectcomments
};