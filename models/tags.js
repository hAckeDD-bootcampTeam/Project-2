module.exports = function (sequelize, DataTypes) {
    var Tags = sequelize.define('Tags', {
        tag: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
    //one to one=> each tag belongs to a certain snippet or many
    Tags.associate = function (models) {
        Tags.belongsToMany(models.Snippets, {
            through: {
                model: models.Taggable,
                unique: false
            },
            foreignKey: 'tag_id',
            constraints: false
        });
        Tags.belongsToMany(models.Fullurls, {
            through: {
                model: models.Taggable,
                unique: false
            },
            foreignKey: 'tag_id',
            constraints: false
        });
    }
    //many to many=> each tag belongs to one url or many
    return Tags;
};