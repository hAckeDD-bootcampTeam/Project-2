/*
-- Example Queries

SELECT id, displayname, email, created FROM users WHERE id='1';

1) Getting all information for a specific user.
   We check the localstorage or cookie for the unique userid from the login (DDEEFF321 in this example), and then use that to get the user id in users

	SELECT userid FROM userloginkey WHERE google='DDEEFF321' OR email='DDEEFF321'; -- this gives us 2
    SELECT * FROM Users WHERE id=(SELECT userid FROM userloginkey WHERE google='DDEEFF321' OR email='DDEEFF321'); -- this gives us Elizabeth's login name, email, etc.

Relating fullurls to snippets associated with each fullurl:
	select * from fullurls
	LEFT JOIN snippet_fullurl on fullurls.id = snippet_fullurl.fullurlid
	LEFT JOIN snippets on snippets.id = snippet_fullurl.snippetid

Relating tags to fullurls:
	select * from fullurls
	LEFT JOIN fullurl_tags on fullurl_tags.fullurlid = fullurls.id
	LEFT JOIN tags on tags.id = fullurl_tags.tagid

Relating tags to snippets:
	select * from snippets
	LEFT JOIN snippet_tags on snippet_tags.snippetid = snippets.id
	LEFT JOIN tags on tags.id = snippet_tags.snippetid

Getting all information about a user's entries, including tags that the user has added to their snippets and their fullurls
In this case, we're using user 2, which is Elizabeth
	SELECT 
	users.displayname as user,
	fullurls.id as fullurlid,
	fullurls.url,
	fullurls.pagetitle,
	fullurls.userdescription,
	fullurltags.tag as fullurltag,
	snippets.id as snippetid,
	snippets.snippet as snippet,
	snippettags.tag as snippettag
	FROM fullurls
	RIGHT JOIN user_fullurls ON user_fullurls.fullurlid = fullurls.id    -- only include full urls that have specifically been assigned to the user
	LEFT JOIN snippet_fullurl ON snippet_fullurl.fullurlid = fullurls.id -- this table relates the id of a snippet with the id of a fullurl where it came from
	LEFT JOIN snippets ON snippets.id = snippet_fullurl.snippetid
	LEFT JOIN user_snippets On user_snippets.snippetid = snippets.id -- this table relates the userid with the snippets entry id
	LEFT JOIN users ON users.id = user_snippets.userid
	LEFT JOIN snippet_tags ON snippet_tags.snippetid = snippets.id
	LEFT JOIN fullurl_tags on fullurl_tags.fullurlid = fullurls.id
	LEFT JOIN tags as snippettags on snippettags.id = snippet_tags.tagid
	LEFT JOIN tags as fullurltags on fullurltags.id = fullurl_tags.tagid
	WHERE users.id = '2' AND user_fullurls.userid='2' AND user_snippets.userid='2';    

*/