module.exports = function (sequelize, DataTypes) {
    var Taggable = sequelize.define('Taggable', {
        tag_id: {
            type: DataTypes.INTEGER,
            unique: 'Taggable_taggable'
        },
        taggable: {
            type: DataTypes.STRING,
            unique: 'Taggable_taggable'
        },
        taggable_id: {
            type: DataTypes.INTEGER,
            unique: 'Taggable_taggable',
            references: null
        }
    });
    return Taggable;
};