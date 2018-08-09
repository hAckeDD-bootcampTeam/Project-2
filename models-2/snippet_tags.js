module.exports = function (sequelize, DataTypes) {
    var Snippet_tags = sequelize.define('Snippet_tags', {
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
    return Snippet_tags;
};