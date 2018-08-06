module.exports = function (sequelize, DataTypes) {
    var Projectcomments = sequelize.define("Projectcomments", {
        commenttext: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
    });
    Projectcomments.associate = function (models) {
        Projectcomments.belongsToMany(models.Tags, {
            through: models.Projectcomment_tags,
            onDelete: "no action",
            onUpdate: "no action"

        });
        Projectcomments.hasMany(models.Projectreference_comments, {
            onDelete: "no action",
            onUpdate: "no action"

        });
    };
    return Projectcomments
};