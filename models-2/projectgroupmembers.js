module.exports = function (sequelize, DataTypes) {
    var Projectgroupmembers = sequelize.define('Projectgroupmembers', {
        projectid: DataTypes.INTEGER,
        userid: DataTypes.INTEGER,
        membertype: DataTypes.INTEGER
    });
    return Projectgroupmembers;
};