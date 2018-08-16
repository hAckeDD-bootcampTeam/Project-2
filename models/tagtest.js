/* eslint-disable */ 
module.exports = function(sequelize, DataTypes) {
    let tagTest = sequelize.define("tagTest", {
      tag: {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
 

    tagTest.associate = function(models) {
        tagTest.belongsTo(models.snipTest, {
          onDelete: "cascade"
      }) 
  } 

    return tagTest; 
  };