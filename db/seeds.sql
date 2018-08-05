-- 

-- Move this to a seeds file, but stick it here for now
INSERT INTO users(displayname,email,created) VALUES('Angelina','angelinasemail@gmail.com',NOW()),('Elizabeth','elizabethsemail@gmail.com',NOW()),('David','davidsemail@gmail.com',NOW()),('Derek','dereksemail@gmail.com',NOW());

-- also testing for different login types, so if some users use google to log in, and some use email. Just summy ref value for now
INSERT INTO userloginkey(userid,google) VALUES('1','AABBCC123');
INSERT INTO userloginkey(userid,google) VALUES('2','DDEEFF321');
INSERT INTO userloginkey(userid,email) VALUES('3','GGHHII567');
INSERT INTO userloginkey(userid,email) VALUES('4','JJKKLL765');

-- INSERT INTO websites(url) VALUES('https://stackoverflow.com/'),('https://www.reddit.com/'),('https://www.danflyingsolo.com/');

INSERT INTO fullurls(url,pagetitle,userdescription) VALUES('https://www.reddit.com/r/node/comments/8bf4gb/what_are_your_experiences_with_the_sequelize_orm/','What are your experiences with the sequelize ORM?',''),('https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize','How to organize a node app that uses sequelize?
',''),('https://www.danflyingsolo.com/why-learn-to-scuba-dive-padi/','Why learning to Scuba Dive will change your life','');


INSERT INTO snippets(snippet) VALUES('This is some interesting text about data structures'),('Here is some text relating to Sequelize'),('This text was copied from a travel blog'),('this sure is interesting'),('this is some text about an interesting subject');

INSERT INTO tags(tag) VALUES('Javascript'),('Travel'),('Programming'),('Cars'),('Bass'),('Guitar'),('Sequelize'),('Bootstrap');

INSERT INTO snippet_fullurl(fullurlid,snippetid) VALUES('1','1'),('1','2'),('2','1'),('2','2'),('3','3');

INSERT INTO user_fullurls(userid,fullurlid) VALUES('1','1'),('1','3'),('2','2'),('2','3'),('3','3');

INSERT INTO user_snippets(userid,snippetid) VALUES('1','1'),('1','3'),('2','2'),('2','3'),('2','5'),('4','4');

INSERT INTO fullurl_tags(fullurlid,tagid) VALUES('1','1'),('1','2'),('1','3'),('2','3'),('3','2');

INSERT INTO snippet_tags(snippetid,tagid) VALUES('2','7'),('2','3'),('3','2');
