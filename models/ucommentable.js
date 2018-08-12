module.exports = function (sequelize, DataTypes) {
    var Commentable = sequelize.define('Commentable', {
        commenttext: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        },
        comment_id: {
            type: DataTypes.INTEGER,
            unique: 'Commentable_commentable'
        },
        commentable: {
            type: DataTypes.STRING,
            unique: 'Commentable_commentable'
        },
        commentable_id: {
            type: DataTypes.INTEGER,
            unique: 'Commentable_commentable',
            references: null
        }
        // usersid:      
        // fullurlsid: 
        // snippetsid: 
        //projectsid:      
    });
    Commentable.associate = function (models) {
        Commentable.belongsTo(models.Users, {
        });
        //each comment belongs to a specific User
        Commentable.belongsTo(models.Snippets, {
            foreignKey: 'commentable_id',
            constraints: false,
            as: 'Snippets'
        });
        //each comment belongs to a specific Snippet
        Commentable.belongsTo(models.Fullurls, {
            foreignKey: 'commentable_id',
            constraints: false,
            as: 'Fullurls'
        });
        //each comment belongs to a specific URL
    };
    return Commentable;
};