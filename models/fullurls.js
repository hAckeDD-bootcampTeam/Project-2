module.exports = function (sequelize, DataTypes) {
    var Fullurls = sequelize.define('fullurls', {
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
        // commentsid: 
        // tagsid: 
        // snippetsid:
        // Projectreferenceid
        // usersid
    });
    Fullurls.associate = function (models) {
        Fullurls.hasMany(models.tags, {
            //one to many => each url can have many tags
        });
        Fullurls.hasMany(models.comments, {
            //one to many => each url can have many comments
        });
        Fullurls.hasMany(models.snippets, {
            //one to many => each url can have many snippets
        });
        Fullurls.belongsTo(models.projectreference, {
            //one to one => each url belongs to a certain project/group
        });
        Fullurls.belongsTo(models.users, {
            //one to one => each url belongs to a certain user
        });
    }
    return Fullurls;
};