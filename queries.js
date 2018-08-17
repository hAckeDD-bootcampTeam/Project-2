
//load up the table with dummy data
//accept user input to add url, tag, snip

db.Fullurl.create({
    url: "www.awesome.com",
    userid: '1'
    //need userid as opposed to snip id**********
}).then(url => {
    let urlId = url.id
    db.Snippet.create({
        snippet: "coding",
    }).then(snips => {
        snips.FullurlId = urlId
        snips.save().then(() => {
            db.Tag.create({
                tag: "java"
            }).then(tags => {
                tags.setSnippets(snips).then(taggable => {
                    console.log(taggable[0])
                }, err => {
                })
            })
        })
    })
})


//add a tag to a snippet

db.Tag.create({
    tag: "knitting"
}).then(addTag => {
    addTag.addSnippets([1])
});


//select a tag, get assoc snippet and url

db.Tag.findAll({
    where: {
        tag: 'knitting'
    },
    include: [{
        model: db.Snippet,
        through: {
            attributes: ['SnippetId'],
        },
        include: [{
            model: db.Fullurl,
        }]
    }]
}).then(tags => {
})


//display all info for user.
//use jquery .load() ?? is re-usable, where windows.document ready is only once
db.Fullurl.findAll({
	where: {
		userid: '1'
	},
	include: [{
			model: db.Snippet,
			include: [{
					model: db.Tag,
					through: {
						attributes: ['TagId']
					}
				}
			]
		}
	]
}).then(all => {
	console.log(JSON.stringify('*****' + all))
})

//also Object.assign() is a nice little method to tidy up the user data back end
https://lorenstewart.me/2016/09/12/sequelize-table-associations-joins/
//check out the link for an example


