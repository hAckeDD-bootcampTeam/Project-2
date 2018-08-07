module.exports = function (sequelize, DataTypes) {
  var UserLogInKeys = sequelize.define("UserLogInKeys", {
    Userid: {
      type: DataTypes.INTEGER,
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

  UserLogInKeys.associate = function (models) {
    UserLogInKeys.belongsTo(models.Users, {
      foreignKey: "Userid",
      onDelete: "no action",
      onUpdate: "cascade"
    });
  };
  return UserLogInKeys;
};