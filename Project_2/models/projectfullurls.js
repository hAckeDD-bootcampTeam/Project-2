module.exports = function (sequelize, DataTypes) {
    var Projectfullurls = sequelize.define("Projectfullurls", {
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
    });

    Projectfullurls.associate = function (models) {
        Projectfullurls.belongsToMany(models.Tags, {
            through: models.Projectfullurl_tags,
            foreignKey: "Projfullurlid",
            onDelete: "no action",
            onUpdate: "cascade"
        });
        Projectfullurls.hasMany(models.Projectreference_comments, {
            onDelete: "no action",
            onUpdate: "cascade"
        });
        Projectfullurls.hasMany(models.Projectreference_fullurls, {
            onDelete: "no action",
            onUpdate: "cascade"
        });
    };
    return Projectfullurls;
};