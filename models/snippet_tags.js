module.exports = function (sequelize, DataTypes) {
    var Snippet_tags = sequelize.define("Snippet_tags", {
        status: DataTypes.STRING
    });
    

    return Snippet_tags;
};