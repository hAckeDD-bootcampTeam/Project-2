// making the model for the entire cache object

/* eslint-disable */ 
module.exports = function(sequelize, DataTypes) {
    let userTest = sequelize.define("userTest", {
      name: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      }, 
      password : {
        type: DataTypes.STRING,
        allowNull: false
      }
    });
 

    userTest.associate = function(models) {
        userTest.hasMany(models.snipTest, {
          onDelete: "cascade"
      }); 
  } 

    return userTest; 
  };