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
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
    // commentable_id
    // projectid
    // fullurlsid
  });

  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  Users.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  Users.hook("beforeCreate", function(user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
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


