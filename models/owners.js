module.exports = function (sequelize, DataTypes) {
    var Owners = sequelize.define('Owners', {
        upvotes: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: null
        },
        downvotes: {
            type: DataTypes.INTEGER(11),
            allowNull: true,
            defaultValue: null
        },
        owner_type: {
            type: DataTypes.STRING,
        },
        // fullurlsid
        // usersid
        // projectid 
    });
    Owners.associate = function (models) {
        Owners.belongsTo(models.Projects, {
        });
        //one to many =>each project has many owners
        Owners.hasMany(models.Fullurls, {
        });
        //one to many=> Owners table has Groups, which have URLS
        Owners.belongsTo(models.Users, {
        });
        //one to many=> Owners table has Users, which have assoc urls
    };
    return Owners;
};