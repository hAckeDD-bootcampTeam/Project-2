module.exports = function (sequelize, DataTypes) {
  var UserLogInKey = sequelize.define("Userloginkeys", {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: null,
      indexes: {
        unique: true
      }
    },
    google: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });

  UserLogInKey.associate = function (models) {
    UserLogInKey.belongsTo(models.Users, {
      foreignKey: "userId",
      onDelete: "no action",
      onUpdate: "no action"
    });
  };


  return UserLogInKey;
};