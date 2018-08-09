module.exports = function (sequelize, DataTypes) {
    var Projectfullurls = sequelize.define('Projectfullurls', {
        url: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        pagetitle: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        userdescription: {
            type: DataTypes.TEXT,
            allowNull: true,
            defaultValue: null
        },

    });
    Projectfullurls.associate = function (models) {
        //urls have many tags, related by Tags table
        Projectfullurls.hasMany(models.Tags, {
            foreignKey: 'taggableId',
            constraints: false,
            scope: {
                tagg: 'Tags'
            }
          });
          Projectfullurls.hasMany(models.Projectsnippets, {
              //urls have many snips, related via projectsnippets table
            foreignKey: 'snippableId',
            constraints: false,
            scope: {
                snipp: 'Projectsnippets'
            }
          });
          Projectfullurls.hasMany(models.Projectcomments, {
            //urls have many comments, related via projectsnippets table
          foreignKey: 'commentId',
          constraints: false,
          scope: {
            comm: 'Projectcomments'
          }
        });
        
        // Projectfullurls.hasMany(models.Projectreference_comments, {
        //     onDelete: "no action",
        //     onUpdate: "cascade"
        // });
        // Projectfullurls.hasMany(models.Projectreference_fullurls, {
        //     onDelete: "no action",
        //     onUpdate: "cascade"
        // });
    };
    return Projectfullurls;
};