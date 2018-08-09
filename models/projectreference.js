module.exports = function (sequelize, DataTypes) {
    var Projectreference = sequelize.define('projectreference', {
        upvotes: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: null
        },
        downvotes: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: null
        }
        // projectgroupmembersid
        // fullurlsid
    });
    Projectreference.associate = function (models) {
        Projectreference.belongsTo(models.projectgroupmembers, {
            //one to one=> each project reference belongs to a group
        });
        Projectreference.hasMany(models.fullurls, {
            //one to many=> each project reference has many urls, and all the assoc snips, tags, and comments
        });
    };
    return Projectreference;
};