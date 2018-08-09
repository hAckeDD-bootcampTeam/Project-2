module.exports = function (sequelize, DataTypes) {
  var Projecttags_comment_snips = sequelize.define("Projecttags_comment_snips", {
    tag_id: {
      // tag_id is foreign key on proj snips and proj comments, that is attached to 
      type: DataTypes.INTEGER,
      unique: 'tag_taggable'
    },
    taggable: {
      type: DataTypes.STRING,
      unique: 'tag_taggable'
    },
    taggable_id: {
      type: DataTypes.INTEGER,
      unique: 'tag_taggable',
      references: null
    },
    comment_id: {
      type: DataTypes.INTEGER,
      unique: 'comment_commentable'
    },
    commentable: {
      type: DataTypes.STRING,
      unique: 'comment_commentable'
    },
    commentable_id: {
      type: DataTypes.INTEGER,
      unique: 'comment_commentable',
      references: null
    },
    snippet_id: {
      type: DataTypes.INTEGER,
      unique: 'snip_snippable'
    },
    snippetable: {
      type: DataTypes.STRING,
      unique: 'snip_snippable'
    },
    snippetable_id: {
      type: DataTypes.INTEGER,
      unique: 'snip_snippable',
      references: null
    }
  });
  return Projecttags_comment_snips;
};