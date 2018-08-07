module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define("Projects", {

        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            unique: true,
            indexes: {
                unique: true
            }
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        accesstypeId: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    });
    Projects.associate = function (models) {
        Projects.hasMany(models.Projectreference_fullurls, {
            onDelete: "no action",
            onUpdate: "cascade"
        });
    };
    return Projects;
};