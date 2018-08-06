module.exports = function (sequelize, DataTypes) {
    var Projectreference_fullurls = sequelize.define("Projectreference_fullurls", {
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
    return Projectreference_fullurls
};