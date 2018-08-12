module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define('Users', {
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '',
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hashed_email_pw: {
      type: DataTypes.STRING,
      allowNull: true
    },
    google: {
      type: DataTypes.STRING,
      allowNull: true
    },
    hashed_google_pw: {
      type: DataTypes.STRING,
      allowNull: true
    }
    // commentable_id
    // projectid
    // fullurlsid
  });
  Users.associate = function (models) {
    Users.belongsToMany(models.Projects, {
      through: models.Projectgroupmembers
      //associates this table, with Projects table via Projectgroupmembers table
    });
    Users.hasMany(models.Fullurls, {
      //one to many=> each user can have many urls
    });
    Users.hasMany(models.Commentable, {
      //one to many=> each user can have many comments
    });
    Users.hasMany(models.Owners, {
      //one to many => each url can have many snippets
  });
  };
  return Users;
};


