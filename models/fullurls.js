module.exports = function (sequelize, DataTypes) {
    var Fullurls = sequelize.define('Fullurls', {
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
        // commentable_id: 
        // tags_id: 
        // snippetsid:
        // ownersid
    });
    Fullurls.associate = function (models) {
        Fullurls.belongsToMany(models.Tags, {
            through: {
                model: models.Taggable,
                unique: false,
                scope: {
                    taggable: 'Fullurls'
                }
            },
            foreignKey: 'taggable_id',
            constraints: false
        });
        //many to many => many urls can have many tags
        Fullurls.hasMany(models.Commentable, {
            foreignKey: 'commentable_id',
            constraints: false,
            scope: {
                commentable: 'Fullurls'
            }
        });
        //one to many => each url can have many comments
        Fullurls.hasMany(models.Snippets, {
            //one to many => each url can have many snippets
        });
        Fullurls.belongsTo(models.Owners, {
        })
        //one to one => each url belongs to a certain project
    }
    return Fullurls;
};