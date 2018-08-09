module.exports = function (sequelize, DataTypes) {
    var Comments = sequelize.define('comments', {
        commenttext: {
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: null
        }
        // usersid:      
        // fullurlsid: 
        // snippetsid: 
        //projectsid:        
    });
    Comments.associate = function (models) {
        Comments.belongsTo(models.users, {
            //each comment belongs to a specific User
        });
        Comments.belongsTo(models.snippets, {
            //each comment belongs to a specific Snippet
        });
        Comments.belongsTo(models.fullurls, {
            //each comment belongs to a specific URL
        });
        Comments.belongsTo(models.projects, {
            //each comment belongs to a specific Project
        });
    };
    return Comments;
};