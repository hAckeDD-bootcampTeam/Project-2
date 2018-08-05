-- This information is for the table design, as implemented using MySQL
-- This will only be used for testing, as these tables and associations are being created using Sequelize.

DROP DATABASE IF EXISTS project2;
CREATE DATABASE project2;
USE project2;

--
-- This section contains tables that are used to track the user's information. The userloginkey table contains the unique login key for each user, regardless of the method they use to log in
--

-- DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `displayname` varchar(100) NOT NULL DEFAULT '',
  `email` varchar(100) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `displayname_UNIQUE` (`displayname`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the main reference for each user';


-- DROP TABLE IF EXISTS `userloginkey`;
CREATE TABLE `userloginkey` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `google` varchar(100) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL, -- we can define more types if we like
  PRIMARY KEY (`id`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `userloginkey_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the unique id string for each user, given by google, facebook, etc';

--
-- This section contains tables which contain data, either website urls, snippets of text, or tags used to categorize any data in our application
--

-- DROP TABLE IF EXISTS `websites`;
-- CREATE TABLE `websites` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `url` varchar(255) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the base or home url of the full urls. Still deciding if this is necessary';


-- DROP TABLE IF EXISTS `fullurls`;
CREATE TABLE `fullurls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(255) DEFAULT NULL,
  `pagetitle` varchar(255) DEFAULT NULL, -- optional? Take the title of the page when saving to the database using the chrome extension. Allow the user to modify it
  `userdescription` varchar(255) DEFAULT NULL, -- optional? a short description of the page, if it helps the user
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds full complete url that the user has added';
-- I still need to add a relation to the websites table, if we're going to use it


-- DROP TABLE IF EXISTS `snippets`;
CREATE TABLE `snippets` (
  `id` int(11) NOT NULL AUTO_INCREMENT, 
  `snippet` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds all the text snippets';

-- DROP TABLE IF EXISTS `tags`;
CREATE TABLE `tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `tag` varchar(255),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds all possible tags';


--
-- This section's table is used to be able to relate snippets to full urls. You may wish to have multiple snippets from the same page, and this will handle that
--

-- DROP TABLE IF EXISTS `snippet_fullurl`;
CREATE TABLE `snippet_fullurl` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullurlid` int(11) DEFAULT NULL,
  `snippetid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fullurlid_idx` (`fullurlid`),
  KEY `snippetid_idx` (`snippetid`),
  CONSTRAINT `snippet_fullurl_fullurlid` FOREIGN KEY (`fullurlid`) REFERENCES `fullurls` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `snippet_fullurl_snippetid` FOREIGN KEY (`snippetid`) REFERENCES `snippets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate a snippet to the full url of its source';


--
-- This section contains the tables for relating users to fullurls and snippets.
--

-- DROP TABLE IF EXISTS `user_fullurls`;
CREATE TABLE `user_fullurls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `fullurlid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fullurlid_idx` (`fullurlid`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `user_fullurls_fullurlid` FOREIGN KEY (`fullurlid`) REFERENCES `fullurls` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_fullurls_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate home or base website urls with all tags assigned to that url';



-- Do we need this extra relationship? If we already can relate the fullurls to the users, and we relate snippets to full urls - are there any cases where that one single user-fullurl relationship is not enough?
-- DROP TABLE IF EXISTS `user_snippets`;
CREATE TABLE `user_snippets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userid` int(11) DEFAULT NULL,
  `snippetid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `snippetid_idx` (`snippetid`),
  KEY `userid_idx` (`userid`),
  CONSTRAINT `user_snippets_snippetid` FOREIGN KEY (`snippetid`) REFERENCES `snippets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `user_snippets_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate home or base website urls with all tags assigned to that url';

--
-- This section contains tables that are used as a way to relate website base urls, website full urls, and snippets to any number of tags
--

-- DROP TABLE IF EXISTS `website_tags`;
-- CREATE TABLE `website_tags` (
--   `id` int(11) NOT NULL AUTO_INCREMENT,
--   `websiteid` int(11) DEFAULT NULL,
--   `tagid` int(11) DEFAULT NULL,
--   PRIMARY KEY (`id`),
--   KEY `websiteid_idx` (`websiteid`),
--   KEY `tagid_idx` (`tagid`),
--   CONSTRAINT `website_tags_websiteid` FOREIGN KEY (`websiteid`) REFERENCES `websites` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
--   CONSTRAINT `website_tags_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate home or base website urls with all tags assigned to that url';

-- DROP TABLE IF EXISTS `fullurl_tags`;
CREATE TABLE `fullurl_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullurlid` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fullurlid_idx` (`fullurlid`),
  KEY `tagid_idx` (`tagid`),
  CONSTRAINT `fullurl_tags_fullurlid` FOREIGN KEY (`fullurlid`) REFERENCES `fullurls` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fullurl_tags_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate a full url with all tags assigned to that url';


-- DROP TABLE IF EXISTS `snippet_tags`;
CREATE TABLE `snippet_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `snippetid` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `snippetid_idx` (`snippetid`),
  KEY `tagid_idx` (`tagid`),
  CONSTRAINT `snippet_tags_snippetid` FOREIGN KEY (`snippetid`) REFERENCES `snippets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `snippet_tags_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate a snippet with all tags assigned to that snippet';



/* The section below is for projects, and how project data relates */


-- DROP TABLE IF EXISTS `projectaccesstypes`;
CREATE TABLE `projectaccesstypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `accesstype` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `accesstype_UNIQUE` (`accesstype`) -- each entry must be unique
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the types for viewing. initially public or private';


-- DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectname` varchar(100) NOT NULL DEFAULT '',
  `description` varchar(255) DEFAULT NULL,
  `accesstype` int(11) DEFAULT NULL, -- Whether the project is to be public/searchable, or visible only to the users involved
  `created` datetime DEFAULT NULL,
  `lastupdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `accesstype_idx` (`accesstype`),
  UNIQUE KEY `projectname_UNIQUE` (`projectname`), -- no two projects can have the same name. Is this necessary?
  CONSTRAINT `projects_accesstype` FOREIGN KEY (`accesstype`) REFERENCES `projectaccesstypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the main reference for projects';



-- DROP TABLE IF EXISTS `projectmembertypes`;
CREATE TABLE `projectmembertypes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(100) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`),
  UNIQUE KEY `type_UNIQUE` (`type`) -- each entry must be unique. you can't have two entries of admin, for example
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the possible types of members like admin, viewer, editor';



-- DROP TABLE IF EXISTS `projectgroupmembers`;
CREATE TABLE `projectgroupmembers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectid` int(11) DEFAULT NULL, -- id of the project/group
  `userid` int(11) DEFAULT NULL, -- id of the user who is a member of the project/group
  `membertype` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `projectid_idx` (`projectid`),
  KEY `userid_idx` (`userid`),
  KEY `membertype_idx` (`membertype`),
  CONSTRAINT `projectgroupmembers_projectid` FOREIGN KEY (`projectid`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectgroupmembers_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectgroupmembers_membertype` FOREIGN KEY (`membertype`) REFERENCES `projectmembertypes` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the unique id strings for the users and the projects that they are associated with';

--
-- This section contains project-related tables which contain data, either website urls, snippets of text, or tags used to categorize any data in our application
--

-- DROP TABLE IF EXISTS `projectwebsites`;
-- CREATE TABLE `projectwebsites` (
--   `id` int(11) NOT NULL,
--   `url` varchar(255) DEFAULT NULL,
--   PRIMARY KEY (`id`)
-- ) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds the base or home url of the full urls relating to projects. This table probably isn\'t necessary';


-- DROP TABLE IF EXISTS `projectfullurls`;
CREATE TABLE `projectfullurls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  -- `userid` int(11) DEFAULT NULL, -- should we log who adds the full url?  
  `url` varchar(255) DEFAULT NULL,
  `pagetitle` varchar(255) DEFAULT NULL, -- optional? Take the title of the page when saving to the database using the chrome extension. Allow the user to modify it
  `userdescription` varchar(255) DEFAULT NULL, -- optional? a short description of the page, if it helps the user
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds full complete url that the user has added to a project';

-- DROP TABLE IF EXISTS `projectfullurl_tags`;
CREATE TABLE `projectfullurl_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fullurlid` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fullurlid_idx` (`fullurlid`),
  KEY `tagid_idx` (`tagid`),
  CONSTRAINT `projectfullurl_tags_fullurlid` FOREIGN KEY (`fullurlid`) REFERENCES `projectfullurls` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectfullurl_tags_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate a projectfullurl with all tags assigned to it';


-- DROP TABLE IF EXISTS `projectsnippets`;
CREATE TABLE `projectsnippets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  -- `userid` int(11) DEFAULT NULL, -- should we log who adds the snippet?
  `snippet` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds all the text snippets for projects';

-- DROP TABLE IF EXISTS `projectsnippet_tags`;
CREATE TABLE `projectsnippet_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `snippetid` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `snippetid_idx` (`snippetid`),
  KEY `tagid_idx` (`tagid`),
  CONSTRAINT `projectsnippet_tags_snippetid` FOREIGN KEY (`snippetid`) REFERENCES `projectsnippets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectsnippet_tags_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate a projectsnippet with all tags assigned to that snippet';


-- Do we need this extra relationship? If we already can relate the fullurls to the project/group, and we relate snippets to full urls - are there any cases where that one single user-fullurl relationship is not enough?
-- we do this for users, so maybe keep it the same for now just to make things more consistent in the code
-- DROP TABLE IF EXISTS `projectreference_snippets`;
CREATE TABLE `projectreference_snippets` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectid` int(11) DEFAULT NULL, -- id of the project/group.   
  `userid` int(11) DEFAULT NULL,  -- the userid of who added it to the group?
  `snippetid` int(11) DEFAULT NULL,
  `upvotes` int(11) DEFAULT NULL, -- any project member can upvote/downvote a snippet
  `downvotes` int(11) DEFAULT NULL,    
  PRIMARY KEY (`id`),
  KEY `projectid_idx` (`projectid`),
  KEY `snippetid_idx` (`snippetid`),
  CONSTRAINT `projectreference_snippets_projectid` FOREIGN KEY (`projectid`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectreference_snippets_snippetid` FOREIGN KEY (`snippetid`) REFERENCES `projectsnippets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate home or base website urls with all tags assigned to that url';


-- Note: Don't need to add a tags table for projects, as the one table can be used and referenced everywhere


-- DROP TABLE IF EXISTS `projectcomments`;
CREATE TABLE `projectcomments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  -- `userid` int(11) DEFAULT NULL, -- we need to know who added the comment, but add this to the reference table instead
  `commenttext` varchar(255) DEFAULT NULL,
  `created` datetime DEFAULT NULL,
  `lastupdated` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table holds comments made by project members on full urls or snippets';

-- DROP TABLE IF EXISTS `projectcomment_tags`;
CREATE TABLE `projectcomment_tags` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `commentid` int(11) DEFAULT NULL,
  `tagid` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `commentid_idx` (`commentid`),
  KEY `tagid_idx` (`tagid`),
  CONSTRAINT `projectcomment_tags_commentid` FOREIGN KEY (`commentid`) REFERENCES `projectcomments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectcomment_tags_tagid` FOREIGN KEY (`tagid`) REFERENCES `tags` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate a projectcomment with all tags assigned to that comment';


-- When a comment is added by a user in the project, both this table and the projectcomments table will need to be updated
-- This table holds the upvote/downvote numbers for each comment - but actually can I move that to the projectcomments table?
-- also, the comment could be on a fullurl or a snippet. A comment related to a fullurl will have a NULL for snippetid in this table, and vice-versa
-- DROP TABLE IF EXISTS `projectreference_comments`;
CREATE TABLE `projectreference_comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectid` int(11) DEFAULT NULL, -- id of the project/group.   
  `userid` int(11) DEFAULT NULL,  -- the userid of who added it to the group?
  `fullurlid` int(11) DEFAULT NULL, -- the fullurl where the comment was added
  `snippetid` int(11) DEFAULT NULL, -- the snippet where the comment was added 
  `commentid` int(11) DEFAULT NULL,
  `upvotes` int(11) DEFAULT NULL, -- any project member can upvote/downvote a comment
  `downvotes` int(11) DEFAULT NULL,  
  PRIMARY KEY (`id`),
  KEY `projectid_idx` (`projectid`),  
  KEY `userid_idx` (`userid`),    
  KEY `fullurlid_idx` (`fullurlid`),
  KEY `snippetid_idx` (`snippetid`),  
  KEY `commentid_idx` (`commentid`),
  CONSTRAINT `projectreference_comments_projectid` FOREIGN KEY (`projectid`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectreference_comments_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,  
  CONSTRAINT `projectreference_comments_fullurlid` FOREIGN KEY (`fullurlid`) REFERENCES `projectfullurls` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectreference_comments_snippetid` FOREIGN KEY (`snippetid`) REFERENCES `projectsnippets` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectreference_comments_commentid` FOREIGN KEY (`commentid`) REFERENCES `projectcomments` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION  
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate project fullurls or snippets to comments made on them';


--
-- This section contains the tables for relating projects/groups to fullurls and snippets.
--

-- DROP TABLE IF EXISTS `projectreference_fullurls`;
CREATE TABLE `projectreference_fullurls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `projectid` int(11) DEFAULT NULL, -- id of the project/group. 
  `userid` int(11) DEFAULT NULL,  -- the userid of who added it to the group
  `fullurlid` int(11) DEFAULT NULL,
  `upvotes` int(11) DEFAULT NULL, -- any project member can upvote/downvote a full url
  `downvotes` int(11) DEFAULT NULL,  
  PRIMARY KEY (`id`),
  KEY `projectid_idx` (`projectid`),
  KEY `userid_idx` (`userid`),
  KEY `fullurlid_idx` (`fullurlid`),
  CONSTRAINT `projectreference_fullurls_projectid` FOREIGN KEY (`projectid`) REFERENCES `projects` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectreference_fullurls_userid` FOREIGN KEY (`userid`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `projectreference_fullurls_fullurlid` FOREIGN KEY (`fullurlid`) REFERENCES `projectfullurls` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci COMMENT='This table is used to relate home or base website urls with all tags assigned to that url';



