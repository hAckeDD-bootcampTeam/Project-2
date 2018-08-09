module.exports = function (sequelize, DataTypes) {
    var Projectgroupmembers = sequelize.define('projectgroupmembers', {
        membertype: {
            type: DataTypes.ENUM,
            values: ['Viewer', 'Admin', 'Editor']
        }
        // projectid
        // userid
        // projectreference
    });
    Projectgroupmembers.associate = function (models) {
        Projectgroupmembers.hasMany(models.projectreference, {
        });
    }
    return Projectgroupmembers;
};