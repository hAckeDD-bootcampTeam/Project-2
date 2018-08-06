module.exports = function (sequelize, DataTypes) {
    var Projectgroupmembers = sequelize.define("Projectgroupmembers", {
        status: DataTypes.STRING
    });
    

    return Projectgroupmembers;
};