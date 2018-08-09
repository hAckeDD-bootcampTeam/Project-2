module.exports = function (sequelize, DataTypes) {
    var Snippets = sequelize.define('snippets', {
        // tagsid
        // commentsid
        // fullurlsid
    });
    Snippets.associate = function (models) {
        Snippets.hasMany(models.tags, {
            //one to many=> one snippet can have many tags
        });
        Snippets.belongsTo(models.fullurls, {
            //one to many=> each snippet belongs to a URL
        });
        Snippets.hasMany(models.comments, {
            //many to one=> one snippet can have many comments. 
        });

    };
    return Snippets;
};


