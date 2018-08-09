module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    UserId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
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

  //associates this table, with Projects table via Projectgroupmembers table
  Users.associate = function (models) {
    Users.belongsToMany(models.Projects, {
      through: models.Projectgroupmembers,
      onDelete: "no action",
      onUpdate: "cascade"
    });
    //associate this table with the Fullurls table via User_fullurls
    Users.belongsToMany(models.Fullurls, {
      through: models.User_fullurls,
      onDelete: "no action",
      onUpdate: "cascade"
    });
    //associates this table with the Snippets table via User_snippets
    Users.belongsToMany(models.Snippets, {
      through: models.User_snippets,
      onDelete: "no action",
      onUpdate: "cascade"
    });
    //associates this table with the Projects table via the Projectreference_snippets
    Users.belongsToMany(models.Projects, {
      through: models.Projectreference_snippets,
      onDelete: "no action",
      onUpdate: "cascade"
    });
    //associates this table with the Projects table via Projectreference_comments
    Users.belongsToMany(models.Projects, {
      through: models.Projectreference_comments,
      onDelete: "no action",
      onUpdate: "cascade"
    });
    //associates this table Users have many Projectreference_fullurls
    Users.hasMany(models.Projectreference_fullurls, {
      onDelete: "no action",
      onUpdate: "cascade"
    });
  };
  return Users;
};


