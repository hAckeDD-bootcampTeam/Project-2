module.exports = function (sequelize, DataTypes) {
    var Projectaccesstypes = sequelize.define("Projectaccesstypes", {
        accesstype: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Public"
            // unique: true
        }
    });
    Projectaccesstypes.associate = function (models) {
        Projectaccesstypes.hasMany(models.Projects, {
            foreignKey: "accesstypeId",
            onDelete: "no action",
            onUpdate: "cascade"
        });
    }
    return Projectaccesstypes;
};