module.exports = function (sequelize, DataTypes) {
    var Projectgroupmembers = sequelize.define('Projectgroupmembers', {
        membertype: {
            type: DataTypes.ENUM,
            values: ['Viewer', 'Admin']
        }
        // projectid
        // userid
    });
    return Projectgroupmembers;
};