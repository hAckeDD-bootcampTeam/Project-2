/* eslint-disable */ 
module.exports = function(sequelize, DataTypes) {
    let snipTest = sequelize.define("snipTest", {
      URL: {
        type: DataTypes.STRING,
        allowNull: false
      },
      text: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
 

    snipTest.associate = function(models) {
        snipTest.hasMany(models.tagTest, {
          onDelete: "cascade"
      }), 
      snipTest.belongsTo(models.userTest, {
        onDelete: "cascade"
    }); 
  } 

    return snipTest; 
  };