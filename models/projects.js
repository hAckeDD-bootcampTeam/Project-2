module.exports = function (sequelize, DataTypes) {
    var Projects = sequelize.define('projects', {
        projectName: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: '',
            unique: true,
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        accesstype: {
            type: DataTypes.ENUM,
            values: ['Public', 'Private']
        }
        //userid       
    });
    Projects.associate = function (models) {
        Projects.belongsToMany(models.users, {
            through: models.projectgroupmembers
        });
    };
    return Projects;
};