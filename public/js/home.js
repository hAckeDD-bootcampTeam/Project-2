/* eslint-disable */


$(document).ready(function () {

    //List Filter
    let options = {
        valueNames: ['projTags']
    };

    let userList = new List('project-tags', options);

    // Hide both main div's on page load    
    $('#cache-div').hide();
    // $('#projs-div').hide(); 
    $('#group-modal-settings').hide();

    // Toggle feature for both the main div's on the home page
    $('#cache-btn').click(function () {
        $('#cache-div').animate({
            width: 'toggle'
        });
        $('#projs-div').hide();
    });

    $('#projs-btn').click(function () {
        $('#projs-div').animate({
            width: 'toggle'
        });
        $('#cache-div').hide();
    });

    // Toggle button for the project administration
    $('#group-settings-btn').click(function () {
        $('#group-modal-settings').animate({
            height: 'toggle'
        });
        $('#group-info-section').animate({
            height: 'toggle'
        });
    });

    //Selectors
    let logOutBtn = $('#logOut-btn');
    let userName = $('#user-name');
    let searchredditBtn = $('#search-reddit-btn');
    let redditQuery = $('#search-reddit-input');
    let redditClear = $('#reddit-clear-btn');

    let newSnipName = $('#new-snip-name');
    let newSnipDesc = $('#new-snip-desc');
    let newSnipTag = $('#new-snip-tag');
    let addSnipBtn = $('#add-snip-btn');

    let newProjName = $('#new-proj-name');
    let newProjDesc = $('#new-proj-desc');
    let newProjBtn = $('#new-proj-btn');
    let projPublicCheck = $('#public-proj')

    let searchTagInput = $('#search-tag-input');
    let searchSnipBtn = $('#search-snip-btn');
    let searchTagParam = $('#search-tag-param');
    let searchTextParam = $('#search-text-param');

    let addTagInput = $('.add-tag-input');
    let addTagBtn = $('.add-tag-btn');

    let removeTagBtn = $('.remove-cache-tag');
    let cacheTag = $('.cache-snippet-badge ');

    let deleteSnip = $('.delete-snippet');

    let cacheSnipURL = $('.cache-snip-url');
    let cacheSnipText = $('.cache-snip-text');

    let publicViewBtn = $('.public-view');

    let changeProjName = $('.change-proj-name');
    let changeProjDesc = $('.change-proj-desc');
    let changeProjBtn = $('.change-proj-btn');


    let newProjSnipURL = $('.new-proj-snip-url');
    let newProjSnipTag = $('.new-proj-snip-tag');
    let newProjSnipText = $('.new-proj-snip-text');
    let newProjSnipBtn = $('.new-proj-snip-btn');

    let deleteProject = $('.delete-project');

    let changeRightsId = $('.u-id');
    let adminBtn = $('.admin-btn');
    let viewBtn = $('.view-btn');

    let deleteProjUrl = $('.delete-proj-url'); 

    let searchProjInput = $('.search-proj-input'); 
    let searchProjBtn = $('.search-proj-btn'); 
    let searchProjTextParam = $('.proj-search-text-param')
    let searchProjTagParam = $('.proj-search-tag-param')

    let projURLCreated = $('.url-created-date'); 
    let projURL = $('.proj-url'); 

    let projSnipCreated = $('.proj-snip-created-date'); 
    let projText = $('.proj-text');

    let homeProjTitle = $('.home-proj-title'); 
    let homeProjDesc = $('.home-proj-desc'); 

    let projTags = $('.projTags'); 
    let delProjTag = $('.moveInput-del'); 
    let addProjTag = $('.moveInput-del'); 
    let delProjTagBtn = $('.del-proj-tag-btn'); 
    let addProjTagBtn = $('.add-proj-tag-btn'); 


    logOutBtn.click(function () {
        event.preventDefault();
        console.log('Log out')
    });

    searchredditBtn.click(function () {
        event.preventDefault();
        console.log(redditQuery.val());
        console.log('hey')
    });

    redditClear.click(function () {
        event.preventDefault();
        console.log('clear Reddit');
    })

    addSnipBtn.click(function () {
        event.preventDefault();
        console.log(newSnipName.val());
        console.log(newSnipDesc.val());
        console.log(newSnipTag.val());
    });

    searchSnipBtn.click(function () {
        event.preventDefault();
        console.log(searchTagInput.val());

        if (searchTagParam.is(':checked')) {
            console.log('search tag')
        }

        if (searchTextParam.is(':checked')) {
            console.log('search text')
        }
    });

    addTagBtn.click(function () {
        console.log(addTagInput.val());
    });



    removeTagBtn.click(function () {
        removeTagBool = true;
        cacheTag.addClass("bg-danger");

    });

    cacheTag.click(function () {
        if (removeTagBool) {
            cacheTag.removeClass("bg-danger");
            console.log($(this).text())
            removeTagBool = false;
        }
    });



    deleteSnip.click(function () {
        console.log('Delete Snippet')
    });


    newProjBtn.click(function () {
        event.preventDefault();
        console.log(newProjDesc.val());
        console.log(newProjName.val());

        if (projPublicCheck.is(':checked')) {
            console.log('Public')
        }
    });

    publicViewBtn.click(function () {
        console.log($(this));

        if ($(this).is(':checked')) {
            console.log('public')
        } else {
            console.log('private')
        }
    });

    changeProjBtn.click(function () {
        event.preventDefault();
        console.log(changeProjName.val());
        console.log(changeProjDesc.val());
    });


    newProjSnipBtn.click(function () {
        event.preventDefault();
        console.log(newProjSnipURL.val());
        console.log(newProjSnipTag.val());
        console.log(newProjSnipText.val());
    });

    deleteProject.click(function () {
        console.log('Delete Project')
    });


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

    deleteProjUrl.click(function () {
        console.log('Delete Project');
        console.log(this)
    });


    searchProjBtn.click(function () {
        console.log(searchProjInput.val()); 

        if (searchProjTextParam.is(':checked')) {
            console.log('search tag')
        }

        if (searchProjTagParam.is(':checked')) {
            console.log('search text')
        }
    }); 

    delProjTagBtn.click(function () {
        console.log(delProjTag.val()); 
        removeProjTagBool = true;
        projTags.addClass("bg-danger");
    });

    projTags.click(function () {
        if (removeTagBool) {
            projTags.removeClass("bg-danger");
            console.log($(this).text())
            removeprojTagBool = false;
        }
    });

    addProjTagBtn.click(function () {
        console.log(addProjTag.val())
    });








});


