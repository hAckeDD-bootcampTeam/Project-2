module.exports = function (sequelize, DataTypes) {
    var Projectreference_comments = sequelize.define("Projectreference_comments", {
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
    });
    return Projectreference_comments
};