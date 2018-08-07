
# This HowTo folder contains extra information from the team on how certain aspects of the project were implemented
The idea is that any other team member should be able to review the documents and see how to implement a feature that another person worked on.
-------------------------------------------
# Ideas:
The main idea seems to be to have a way for the user to store, sort, and find information relating to Bookmarks and information in general.
For programmers, this can include code repositories and snippets as well.
We should be able to share information between users. So one user could select "Share my database with another user" and that information could be copied to user 2.
We could also, instead of copying the data, have "Groups" where common data is shared and edited by multiple people. This could be used for things like project research, travel planning, etc.

# User Forum
Create a user forum for "group-shared" categories (not sure what to call it? Projects? Events?) where people can discuss things.

# Tagging
use tags, similar to gmail, for categorizing the information in the database. Any number of multiple tags could be used for any content. Start with some basic tags like "Restaurants", "Things To See", "Programming", "JavaScript", etc. 

# Code Snippets
If the text that the user selects is a code snippet, can we tie into GitHub gists to save it? Should we also save it in our database and/or add a link to the GitHub Gist
https://gist.github.com/
Some examples of how we might organize the data for display on the page:
https://boostnote.io/
https://alternativeto.net/software/boostnote/

# Add Search of GitHub 
Provide a list of repositories/users that align with the user's preferences 

# Passport-Based Login System
http://www.passportjs.org/

# Chrome Extension:
- Highlight text on any web page, then using the extention (right click? key sequence? both?) store the text into the database.
Popup a "categorize" window that allows the user to add tags to the information. If the URl already in the database, then the newly highlighted text (if also not in the database) gets added under that URL for the relation.

# Import User's Existing Bookmarks
Allow the user to import and easily categorize any bookmarks they already have in Chrome

# Possible Useful Links
Realitime Filtration, Fuzzing searching libraries:
http://fusejs.io/

Alternative ORMs:
https://knexjs.org/

http://www.chartjs.org/

Website Documentation:
https://www.docsie.io/

https://graphql.org/learn/

#API Pastebin
similar to our idea and gists from github.  Code snippet repo. We could pull this in so users can search comparable code?
https://pastebin.com/api

#API GitHub
https://developer.github.com/v3/search/#search-code
github has an api that allows searching. Can input very narrow searches by using their meta tags.

saw lots of API's: email validation; checking IP address origin and comparing to Blacklisted IP's; facial recognition, silly stuff too

- also API that screenshots entire webpage and converts to PDF. Prob not useful for us, but I want to save it on our App for another time!! lol
