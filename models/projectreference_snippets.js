module.exports = function (sequelize, DataTypes) {
    var Projectreference_snippets = sequelize.define("Projectreference_snippets", {
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
    return Projectreference_snippets
};