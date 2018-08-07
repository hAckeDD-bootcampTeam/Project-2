module.exports = function (sequelize, DataTypes) {
    var Projectmembertypes = sequelize.define("Projectmembertypes", {
        membertype: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Viewer",
            unique: true
        }
    });
    Projectmembertypes.associate = function (models) {
        Projectmembertypes.hasMany(models.Projectgroupmembers, {
            foreignKey: "membertypeid",
            onDelete: "no action",
            onUpdate: "no action"
        });
    };
    return Projectmembertypes;
};