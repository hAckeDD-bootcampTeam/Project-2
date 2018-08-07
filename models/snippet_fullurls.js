module.exports = function (sequelize, DataTypes) {
    var Snippet_fullurls = sequelize.define("Snippet_fullurls", {
        fullurlid: {
            type: DataTypes.INTEGER,
            allowNull: true,
            indexes: {
                unique: true
            }
        },
        snippet_id: {
            type: DataTypes.STRING,
            allowNull: true,
            indexes: {
                unique: true
            }
        }
    });
    return Snippet_fullurls
};

