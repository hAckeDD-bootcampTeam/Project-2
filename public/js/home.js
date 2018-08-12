/* eslint-disable */
$(document).ready(function () {

    //instanitate list filter for searching through projects
    let options = {
        valueNames: ['projTags']
    };
    let userList = new List('project-tags', options);

    // Selectors for the interactive elements on the page 
    let cacheBtn = $('#cache-btn');
    let projBtn = $('#projs-btn');

    // User divs and project dashboard
    let cacheDiv = $('#cache-div');
    let projDiv = $('#projs-div');
    let groupSettingsDiv = $('#group-modal-settings');
    let groupInfoSection = $('#group-info-section');
    let groupDashboardBtn = $('#group-settings-btn');

    //Hide the divs when the page loads
    cacheDiv.hide();
    projDiv.hide();
    groupSettingsDiv.hide();

    // Toggle feature for the personal cache div
    cacheBtn.click(function () {
        cacheDiv.animate({
            width: 'toggle'
        });
        projDiv.hide();
    });

    // Toggle feature for the project div
    projBtn.click(function () {
        projDiv.animate({
            width: 'toggle'
        });
        cacheDiv.hide();
    });

    // Dashboard admin features toggle
    groupDashboardBtn.click(function () {
        groupSettingsDiv.animate({
            height: 'toggle'
        });
        groupInfoSection.animate({
            height: 'toggle'
        });
    });

    //User action buttons and selectors
    let logOutBtn = $('#logOut-btn');
    let userName = $('#user-name');

    // Selectors for searching through reddit
    let searchredditBtn = $('#search-reddit-btn');
    let redditQuery = $('#search-reddit-input');
    let redditClear = $('#reddit-clear-btn');

    // selectors to  populate the div with reddit queries
    let redditQueryRow = $('.redditQueryRow'); //add a new row with limited amount of queries
    let redditQueryCol = $('.reddit-query-col'); //append all queries to the row once the query has been made
    // each selectorsed to populate the new row
    let redditQueryTitle = $('.reddit-query-title')
    let redditQueryURL = $('.reddit-query-url')
    let redditQueryText = $('.reddit-query-text')

    // Selectors for adding a new snippet to personal cache
    let newSnipName = $('#new-snip-name');
    let newSnipDesc = $('#new-snip-desc');
    let newSnipTag = $('#new-snip-tag');
    let addSnipBtn = $('#add-snip-btn');

    //SELECTORS FOR PERSONAL CACHE BEGIN

    // Selector for user searching through a snippet in personal cache, filtered by either tag or text param - or both
    let searchTagInput = $('#search-tag-input');
    let searchSnipBtn = $('#search-snip-btn');
    let searchTagParam = $('#search-tag-param');
    let searchTextParam = $('#search-text-param');

    // Add a tag to a specific snnippet in personal cache
    let addTagInput = $('.add-tag-input');
    let addTagBtn = $('.add-tag-btn');

    // Remove a tag from snippet in personal cache
    let removeTagBtn = $('.remove-cache-tag');
    let cacheTag = $('.cache-snippet-badge ');

    // delete entire snippet from personal cache
    let deleteSnip = $('.delete-snippet');

    // selectors to populate each url and snippet tet in the users actual cache
    let cacheSnipURL = $('.cache-snip-url');
    let cacheSnipText = $('.cache-snip-text');

    // SELECTORS FOR PERSONAL PROJECTS BEGIN    

    //Class to input the project title and description on the main screen
    let homeProjTitle = $('.home-proj-title');
    let homeProjDesc = $('.home-proj-desc');

    //Selector for adding a a new project, optionally public
    let newProjName = $('#new-proj-name');
    let newProjDesc = $('#new-proj-desc');
    let newProjBtn = $('#new-proj-btn');
    let projPublicCheck = $('#public-proj');

    // Selectors for changing the features of the project, and deleting it
    let publicViewBtn = $('.public-view');
    let changeProjName = $('.change-proj-name');
    let changeProjDesc = $('.change-proj-desc');
    let changeProjBtn = $('.change-proj-btn');

    // Selectors for adding a new snippet object to a certain project
    let newProjSnipURL = $('.new-proj-snip-url');
    let newProjSnipTag = $('.new-proj-snip-tag');
    let newProjSnipText = $('.new-proj-snip-text');
    let newProjSnipBtn = $('.new-proj-snip-btn');

    // Selector for deleting a whole project
    let deleteProject = $('.delete-project');

    // Selectors for changing the viewing rights of a specific user on a project. Filtered by the ID of the user
    let changeRightsId = $('.u-id');
    let adminBtn = $('.admin-btn');
    let viewBtn = $('.view-btn');

    // delete URL snippet from specific project
    let deleteProjUrl = $('.delete-proj-url');
    //Selectors for populating the URL and created at from a project
    let projURLCreated = $('.url-created-date');
    let projURL = $('.proj-url');

    // Search features for a project, filtered by either tag or text
    let searchProjInput = $('.search-proj-input');
    let searchProjBtn = $('.search-proj-btn');
    let searchProjTextParam = $('.proj-search-text-param');
    let searchProjTagParam = $('.proj-search-tag-param');

    //Selectors for populating the text and created date from a project
    let projSnipCreated = $('.proj-snip-created-date');
    let projText = $('.proj-text');

    // Snippet specific to a project, add and delete tags, and and delete the whole snippet 
    let projTags = $('.projTags');
    let addProjTag = $('.moveInput-add');
    let delProjTagBtn = $('.del-proj-tag-btn');
    let addProjTagBtn = $('.add-proj-tag-btn');
    let delProjSnip = $('.delete-proj-snippet') 

    // Flags for removing tags from projects and personal cache
     let removeTagBool = false ; 
     let removeProjTagBool = false; 


    // Allow the user to log out
    logOutBtn.click(function () {
        event.preventDefault();
        console.log('Log out')
    });

    // query reddit for some information
    searchredditBtn.click(function () {
        event.preventDefault();
        console.log(redditQuery.val());
        console.log('search reddit')
    });

    // clear the reddit element
    redditClear.click(function () {
        event.preventDefault();
        console.log('clear Reddit');
    })

    // Button click event for when the user adds a snippet to their personal cache
    addSnipBtn.click(function () {
        event.preventDefault();
        console.log(newSnipName.val());
        console.log(newSnipDesc.val());
        console.log(newSnipTag.val());
    });

    // Button click event for searching through cache, if conditions used to verify how they filter their search
    searchSnipBtn.click(function () {
        event.preventDefault();
        console.log(searchTagInput.val());

        if (searchTagParam.is(':checked')) {
            console.log('search tag')

        }

        if (searchTextParam.is(':checked')) {
            console.log('search text')
        }

        // Need to build a query based on the text user gave and what they have checked
    });

    // Add tag click event when adding to personal cache
    addTagBtn.click(function () {
        console.log(addTagInput.val());
    });



    // remove a tag from a specific snippet in personal cache
    removeTagBtn.click(function () {
        if (!removeTagBool) {
            removeTagBool = true;
            cacheTag.addClass("bg-danger");
        } else {
            removeTagBool = false;
            cacheTag.removeClass("bg-danger");
        }

    });

    // once a user has chosen remove tag, all tags become red and can then be selected for deletion
    cacheTag.click(function () {
        if (removeTagBool) {
            let removedTag = $(this).text();
            cacheTag.removeClass("bg-danger");
            console.log(removedTag);
            removeTagBool = false;
        }
    });


    // delete a snippet from the users personal cache
    deleteSnip.click(function () {
        console.log('Delete Snippet')
    });

    // Click event for starting a new project, filtered by a check if the user wants it to be public
    newProjBtn.click(function () {
        event.preventDefault();
        console.log(newProjDesc.val());
        console.log(newProjName.val());

        if (projPublicCheck.is(':checked')) {
            console.log('Public')
        }
    });



    //Admin rights for changing a project, filtered
    changeProjBtn.click(function () {
        event.preventDefault();

        let changedName = changeProjName.val();
        let changedDesc = changeProjDesc.val();
        console.log(changedName);
        console.log(changedDesc);
    });

    // Change the view of a project froom public to private or vice versa
    publicViewBtn.click(function () {

        if ($(this).is(':checked')) {
            console.log('public')
        } else {
            console.log('private')
        }
    });


    // Add a new snippet object to a certain project
    newProjSnipBtn.click(function () {
        event.preventDefault();
        console.log(newProjSnipURL.val());
        console.log(newProjSnipTag.val());
        console.log(newProjSnipText.val());
    });

    // Delete a specific project
    deleteProject.click(function () {
        console.log('Delete Project')
    });


    // Change the rights of each user, button finds the ID of that user to filter query
    [adminBtn, viewBtn].forEach(element => {
        element.click(function () {
            event.preventDefault();
            selection = $(this);
            userID = selection.closest('td').siblings('.u-id').text();
            if (selection.text() === 'View') {
                console.log(`Viewer rights where user id is ${userID}`)
            }

            if (selection.text() === 'Admin') {
                console.log(`Admin rights where user id is ${userID}`)
            }
        });


    });


    // click event for deleting a URL from a specific project
    deleteProjUrl.click(function () {
        console.log('Delete URL');
    });

    // Search through a project with optional parameters
    searchProjBtn.click(function () {
        console.log(searchProjInput.val());

        if (searchProjTextParam.is(':checked')) {
            console.log('search tag')
        }

        if (searchProjTagParam.is(':checked')) {
            console.log('search text')
        }
    });


    // Delete a snippet from the console of the project you are on
    delProjSnip.click(function () {
        console.log('Delete this snippet')
    })

    // When the delete button is clicked, turn on flag for tag to be deleted and set color to red
    delProjTagBtn.click(function () {
        if(!removeProjTagBool) {
            removeProjTagBool = true;
            projTags.addClass("bg-danger");
        } else {
            removeProjTagBool = false;
            projTags.removeClass("bg-danger");
        }

    });

    // when you click a project tag, if the delete flag is on, register the tag for a query and turn off the flag
    projTags.click(function () {
        if (removeProjTagBool) {
            projTags.removeClass("bg-danger");
            console.log($(this).text())
            removeProjTagBool = false;
        }
    });

    // Add a tag to the snippet in a project console. Grab the value of the input
    addProjTagBtn.click(function () {
        console.log(addProjTag.val());
    });



});


