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


/* The section below is for projects, and how project data relates */

INSERT INTO projectaccesstypes(accesstype) VALUES('Public'),('Private');

INSERT INTO projects(projectname,description,accesstype,created,lastupdated) VALUES('Trilogy Group Project # 2','Our second project, which is marked as private','2',NOW(),NOW()),('Guitar Lessons','Place to keep our guitar-related info','1',NOW(),NOW()),('Trip to Rome!','All the fun things we can do in Rome','1',NOW(),NOW());

INSERT INTO projectmembertypes(type) VALUES('Administrator'),('Editor'),('Viewer');

INSERT INTO projectgroupmembers(projectid,userid,membertype) VALUES('1','1','1'),('1','2','1'),('1','3','1'),('1','4','1'),('2','4','1'),('2','3','2'),('3','1','1'),('3','2','3');

-- for testing, I just kept the information that same as the text info for the dummy user data
INSERT INTO projectfullurls(url,pagetitle,userdescription) VALUES('https://www.reddit.com/r/node/comments/8bf4gb/what_are_your_experiences_with_the_sequelize_orm/','What are your experiences with the sequelize ORM?',''),('https://stackoverflow.com/questions/12487416/how-to-organize-a-node-app-that-uses-sequelize','How to organize a node app that uses sequelize?
',''),('https://www.danflyingsolo.com/why-learn-to-scuba-dive-padi/','Why learning to Scuba Dive will change your life','');

-- for testing, I just kept the information that same as the text info for the user
INSERT INTO projectsnippets(snippet) VALUES('This is some interesting text about data structures'),('Here is some text relating to Sequelize'),('This text was copied from a travel blog'),('this sure is interesting'),('this is some text about an interesting subject');



INSERT INTO projectcomments(commenttext,created,lastupdated) VALUES('Hi, my name is Derek and I approve of this message',NOW(),NOW()),('I think that this link is really helpful - David',NOW(),NOW()),('This sounds perfect for what we want to accomplish - Angelina',NOW(),NOW()),('Elizabeth: There are some really good data structure examples here',NOW(),NOW());

INSERT INTO projectreference_comments(projectid,userid,fullurlid,snippetid,commentid,upvotes,downvotes) VALUES('1','4','1',null,'1','11','11');
INSERT INTO projectreference_comments(projectid,userid,fullurlid,snippetid,commentid,upvotes,downvotes) VALUES('1','3',null,'2','2','22','22');
INSERT INTO projectreference_comments(projectid,userid,fullurlid,snippetid,commentid,upvotes,downvotes) VALUES('1','2',null,'2','3','33','33');
INSERT INTO projectreference_comments(projectid,userid,fullurlid,snippetid,commentid,upvotes,downvotes) VALUES('1','1',null,'2','4','44','44');

INSERT INTO projectreference_fullurls(projectid,userid,fullurlid,upvotes,downvotes) VALUES('1','1','1','3','1'),('1','2','2','8','3'),('2','3','2','8','3'),('3','4','3','1','1'),('3','4','1','1','1');
INSERT INTO projectfullurl_tags(fullurlid,tagid) VALUES('1','3'),('1','7'),('2','1');
INSERT INTO projectsnippet_tags(snippetid,tagid) VALUES('2','3'),('3','7'),('1','1');

INSERT INTO projectreference_snippets(projectid,userid,snippetid,upvotes,downvotes) VALUES('1','1','1','5','2'),('1','2','3','1','1'),('1','3','2','4','0'),('2','4','3','2','0');
-- INSERT INTO projectcomment_tags(commentid,tagid) VALUES('1','3'),('1','7'),('2','2');