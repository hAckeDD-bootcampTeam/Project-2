module.exports = function (sequelize, DataTypes) {
    var Snippets = sequelize.define('Snippets', {
        snippets: {
            type: DataTypes.STRING,
            allowNull: true
        }
        // tags_id
        // commentable_id
        // fullurlsid
    });
    Snippets.associate = function (models) {
        Snippets.belongsToMany(models.Tags, {
            through: {
                model: models.Taggable,
                unique: false,
                scope: {
                    taggable: 'Snippets'
                }
            },
            foreignKey: 'taggable_id',
            constraints: false
        });
        //many to many=> many snippets can have many tags
        Snippets.belongsTo(models.Fullurls, {
            //one to many=> each snippet belongs to a URL
        });
        Snippets.hasMany(models.Commentable, {
            foreignKey: 'commentable_id',
            constraints: false,
            scope: {
                commentable: 'Snippets'
            }
        });
        //many to one=> one snippet can have many comments. 
    };
    return Snippets;
};


