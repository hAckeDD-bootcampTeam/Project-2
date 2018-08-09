module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('users', {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    credentials: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // commentsid
    // projectid
    // fullurlsid
  });
	Users.associate = function (models) {
    Users.belongsToMany(models.projects, {
      //associates this table, with Projects table via Projectgroupmembers table
      through: models.projectgroupmembers,
      constraints: false
    });
    Users.hasMany(models.fullurls, {
      //one to many=> each user can have many urls
    });
    Users.hasMany(models.comments, {
      //one to many=> each user can have many comments
    });
  };
  return Users;
};


