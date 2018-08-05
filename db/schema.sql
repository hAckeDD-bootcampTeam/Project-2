-- 

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


