module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {

    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: null
    }
  });

  //associates this table, Users, with Projects table via Projectgroupmembers table
  Users.associate = function (models) {
    Users.belongsToMany(models.Projects, {
      through: models.Projectgroupmembers,
      onDelete: "no action",
      onUpdate: "no action"
    });
    Users.belongsToMany(models.Fullurls, {
      through: models.User_fullurls,
      onDelete: "no action",
      onUpdate: "no action"
    });
    Users.belongsToMany(models.Snippets, {
      through: models.User_snippets,
      onDelete: "no action",
      onUpdate: "no action"
    });
    Users.belongsToMany(models.Projects, {
      through: models.Projectreference_snippets,
      onDelete: "no action",
      onUpdate: "no action"
    });
    Users.belongsToMany(models.Projects, {
      through: models.Projectreference_comments,
      onDelete: "no action",
      onUpdate: "no action"
    });
    Users.hasMany(models.Projectreference_fullurls, {
      onDelete: "no action",
      onUpdate: "no action"
    });
  };
  return Users;
};