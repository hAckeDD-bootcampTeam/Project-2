module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define('tags', {
        tag: {
            type: DataTypes.STRING,
            allowNull: true
        }
        // fullurlsid
        //snippetsid        
    });
    Tags.associate = function (models) {
        Tags.belongsTo(models.snippets, {
            //one to one=> each tag belongs to a certain snippet or many
        });
        Tags.belongsTo(models.fullurls, {
            //one to one=> each tag belongs to one url or many
        });
    }
    return Tags;
};