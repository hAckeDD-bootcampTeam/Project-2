/* eslint-disable */
$(document).ready(function () {

    //instanitate list filter for searching through projects
    let options = {
        valueNames: ['projTags']
    };
    let userList = new List('project-tags', options);

    // Selectors for the interactive elements on the page 
    let cacheBtn = $('#cache-btn');

    // REMOVED B/C SCOPE
    // let projBtn = $('#projs-btn');

    // User divs and project dashboard
    let cacheDiv = $('#cache-div');

    // REMOVED B/C SCOPE
    // let projDiv = $('#projs-div');
    // let groupSettingsDiv = $('#group-modal-settings');
    // let groupInfoSection = $('#group-info-section');
    // let groupDashboardBtn = $('#group-settings-btn');

    //Hide the divs when the page loads
    cacheDiv.hide();

    // REMOVED B/C SCOPE
    // projDiv.hide();
    // groupSettingsDiv.hide();

    // Toggle feature for the personal cache div
    cacheBtn.click(function () {
        cacheDiv.animate({
            width: 'toggle'
        });
        // projDiv.hide();
    });

    // Toggle feature for the project div

    // REMOVED B/C SCOPE
    // projBtn.click(function () {
    //     projDiv.animate({
    //         width: 'toggle'
    //     });
    //     cacheDiv.hide();
    // });

    // Dashboard admin features toggle
    // REMOVED B/C SCOPE

    // groupDashboardBtn.click(function () {
    //     groupSettingsDiv.animate({
    //         height: 'toggle'
    //     });
    //     groupInfoSection.animate({
    //         height: 'toggle'
    //     });
    // });

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


    //SELECTORS FOR PERSONAL CACHE BEGIN

    // Selectors for adding a new snippet to personal cache
    let newSnipName = $('#new-snip-name');
    let newSnipDesc = $('#new-snip-desc');
    let newSnipTag = $('#new-snip-tag');
    let addSnipBtn = $('#add-snip-btn');

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


    // SELECTORS FOR PERSONAL PROJECTS BEGIN    

    // REMOVED B/C SCOPE

    // //Class to input the project title and description on the main screen
    // let homeProjTitle = $('.home-proj-title');
    // let homeProjDesc = $('.home-proj-desc');

    // //Selector for adding a a new project, optionally public
    // let newProjName = $('#new-proj-name');
    // let newProjDesc = $('#new-proj-desc');
    // let newProjBtn = $('#new-proj-btn');
    // let projPublicCheck = $('#public-proj');

    // // Selectors for changing the features of the project, and deleting it
    // let publicViewBtn = $('.public-view');
    // let changeProjName = $('.change-proj-name');
    // let changeProjDesc = $('.change-proj-desc');
    // let changeProjBtn = $('.change-proj-btn');

    // // Selectors for adding a new snippet object to a certain project
    // let newProjSnipURL = $('.new-proj-snip-url');
    // let newProjSnipTag = $('.new-proj-snip-tag');
    // let newProjSnipText = $('.new-proj-snip-text');
    // let newProjSnipBtn = $('.new-proj-snip-btn');

    // // Selector for deleting a whole project
    // let deleteProject = $('.delete-project');

    // // Selectors for changing the viewing rights of a specific user on a project. Filtered by the ID of the user
    // let changeRightsId = $('.u-id');
    // let adminBtn = $('.admin-btn');
    // let viewBtn = $('.view-btn');

    // // delete URL snippet from specific project
    // let deleteProjUrl = $('.delete-proj-url');

    // // leave specific project 
    // let leaveProjBtn = $('.leave-project-btn');


    // //Selectors for populating the URL and created at from a project
    // let projURLCreated = $('.url-created-date');
    // let projURL = $('.proj-url');

    // // Search features for a project, filtered by either tag or text
    // let searchProjInput = $('.search-proj-input');
    // let searchProjBtn = $('.search-proj-btn');
    // let searchProjTextParam = $('.proj-search-text-param');
    // let searchProjTagParam = $('.proj-search-tag-param');

    // //Selectors for populating the text and created date from a project
    // let projSnipCreated = $('.proj-snip-created-date');
    // let projText = $('.proj-text');

    // // Snippet specific to a project, add and delete tags, and and delete the whole snippet 
    // let projTags = $('.projTags');
    // let addProjTag = $('.moveInput-add');
    // let delProjTagBtn = $('.del-proj-tag-btn');
    // let addProjTagBtn = $('.add-proj-tag-btn');
    // let delProjSnip = $('.delete-proj-snippet');

    // let addProjURL = $('.add-proj-url')
    // let addProjURLBtn = $('.add-proj-url-btn')

    // Flags for removing tags from personal cache
    let removeTagBool = false;

    let uniqueId = 'unique passport identifier'

    let userInfo =

        //using jquery .load, to populate element with user info on IMMEDIATE page load.  Can be used over again, unlike document ready
        $("#").load('/getUserInfo/uniqueID', function (userInfo, status) {
            if (status == 'success') {
                console.log("content loaded");
            } else {
                console.log("Error");
            };
        });

    // $.ajax({
    //     url: '/getUserInfo/uniqueID',
    //     type: 'GET'
    // }).done((userInfo) => {
    //     if (userInfo === 'OK') {
    //         console.log(userInfo); 
    //     }

    // });


    // Allow the user to log out
    logOutBtn.click(function () {
        event.preventDefault();
        console.log('Log out');
        window.location.href = '/';
    });

    // query reddit for some information
    searchredditBtn.click(function () {
        event.preventDefault();
        if (redditQuery.val()) {
            console.log(redditQuery.val());
            console.log('clear Reddit');
            redditQuery.val('')
        } else {
            alert('Cannot have empty query')
        }

    });

    // clear the reddit element
    redditClear.click(function () {
        event.preventDefault();
        console.log('clear Reddit');

    });

    // PERSONAL CACHE FUNTIONALITY BEGINS

    // Button click event for when the user adds a snippet to their personal cache
    addSnipBtn.click(function () {
        event.preventDefault();

        let snipID = $($(this)).closest("[data-ID]").data().id;
        //need userid

        if (newSnipName.val() && newSnipDesc.val() && newSnipTag.val()) {
            let snipObj = {
                snipName: newSnipName.val().trim(),
                snipDesc: newSnipDesc.val().trim(),
                snipTag: newSnipTag.val().trim(),
                snipID: snipID
                ///need userid as opposed to snip id******
            }

            $.ajax({
                url: '/newPersSnip',
                type: 'POST',
                data: snipObj
            }).done((addSnip) => {
                if (addSnip === 'Created') {
                    console.log('Good creation');
                    newSnipName.val('');
                    newSnipDesc.val('');
                    newSnipTag.val('');
                }
            });

        } else {
            alert('No Fields can be empty');
        }

    });

    // Button click event for searching through cache, if conditions used to verify how they filter their search
    searchSnipBtn.click(function () {
        event.preventDefault();

        if (searchTagInput.val()) {

            // Grab the value and set flags for how to filter
            let tagValue = searchTagInput.val().trim();

            $.ajax({
                url: `/searchPersSnip/${tagValue}`
            }).done((searchSnip) => {
                if (searchSnip === 'OK') {
                    console.log('Sucessful search')
                    searchTagInput.val('')
                }
            });

        } else {
            alert('Cannot search empty tag')
        }

    });


    // Add tag click event when adding to personal cache
    addTagBtn.click(function () {
        if (addTagInput.val()) {


            let snipID = $($(this)).closest("[data-ID]").data().id;

            let newTagObj = {
                newTag: addTagInput.val().trim(),
                snipID: snipID
            }

            $.ajax({
                url: '/newSnipTag',
                type: 'POST',
                data: newTagObj
            }).done((newTag) => {
                if (newTag === 'Created') {
                    console.log('Good Tag creation');
                    addTagInput.val('')
                }

            });
        } else {
            alert('Cannot add empty Tag')
        }
    });

    // Remove a tag from a specific snippet in personal cache
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

            let snipID = $($(this)).closest("[data-ID]").data().id;
            let removedTag = $(this).text();

            cacheTag.removeClass("bg-danger");

            $.ajax({
                url: `/delSnipTag`,
                type: 'DELETE',
            }).done((delTag) => {
                if (delTag === 'Accepted') {
                    console.log('Tag deleted');
                    removeTagBool = false;
                }
            });
        }
    });


    // delete a snippet from the users personal cache
    deleteSnip.click(function () {
        let snipID = 'testID';

        console.log($(this))


        $.ajax({
            url: `/delFullSnip/${snipID}`,
            type: 'DELETE',
        }).done((delSnip) => {
            if (delSnip === 'Accepted') {
                console.log('Snippet deleted');
            }
        });

    });

    // Functionality for the projects element and section 

    //    REMOVED B/C SCOPE

    // // Click event for starting a new project, filtered by a check if the user wants it to be public
    // newProjBtn.click(function () {

    //     if (newProjDesc.val() && newProjName.val()) {

    //         let newProjObj = {
    //             projName: newProjName.val(),
    //             projDesc: newProjDesc.val(),
    //         }

    //         if (projPublicCheck.is(':checked')) {
    //             makePrivate = false;
    //         } else {
    //             makePrivate = true;
    //         }

    //         $.ajax({
    //             url: `/newProj/${makePrivate}`,
    //             type: 'POST',
    //             data: newProjObj
    //         }).done((newProj) => {
    //             if (newProj === 'Created') {
    //                 console.log('Project Created');
    //                 newProjName.val(''),
    //                 newProjDesc.val('')
    //             }
    //         });

    //     } else {
    //         alert('Fields cannot be empty!')
    //     }

    // });

    // // Change the view of a project from public to private or vice versa
    // publicViewBtn.click(function () {

    //     let projID = '2'; 

    //     if ($(this).is(':checked')) {
    //         publicProj = true;
    //     } else {
    //         publicProj = false
    //     }

    //     $.ajax({
    //         url: `/changeProjView/${publicProj}/${projID}`,
    //         type: 'PUT',
    //     }).done((pubProj) => {
    //         if (pubProj === 'OK') {
    //             console.log('View Changed');
    //         }
    //     });
    // });


    // //Change the details of a project
    // changeProjBtn.click(function () {
    //     event.preventDefault();

    //     if (changeProjName.val() || changeProjDesc.val()) {

    //         let newProjInfo = {
    //             changedName: changeProjName.val().trim(),
    //             changedDesc: changeProjDesc.val().trim()
    //         }

    //         $.ajax({
    //             url: `/changeProjInfo`,
    //             type: 'PUT',
    //             data: newProjInfo
    //         }).done((newInfo) => {
    //             if (newInfo === 'OK') {
    //                 console.log('Info Changed');
    //                 changeProjName.val(''); 
    //                 changeProjDesc.val('')
    //             }
    //         });

    //     } else {
    //         alert('You cannot leave change fields empty!')
    //     }
    // });

    // // Add a new snippet object to a certain project
    // newProjSnipBtn.click(function () {
    //     event.preventDefault();

    //     if (newProjSnipURL.val() && newProjSnipTag.val() && newProjSnipText.val()) {

    //         let newSnipObj = {
    //             newSnipUrl: newProjSnipURL.val().trim(),
    //             newSnipTag: newProjSnipTag.val().trim(),
    //             newSnipText: newProjSnipText.val().trim()
    //         }

    //         $.ajax({
    //             url: `/addSnipObj`,
    //             type: 'POST',
    //             data: newSnipObj
    //         }).done((newProjSnip) => {
    //             if (newProjSnip === 'Created') {
    //                 console.log('Snippet Created');
    //                 newProjSnipURL.val('')
    //                 newProjSnipTag.val('')
    //                 newProjSnipText.val('')
    //             }
    //         });

    //     } else {
    //         alert('You cannot leave change fields empty!')
    //     }

    // });

    // // Delete a specific project
    // deleteProject.click(function () {
    //     let projSnipID = '2';
    //     $.ajax({
    //         url: `/delProjSnip/${projSnipID}`,
    //         type: 'DELETE',
    //     }).done((delProj) => {
    //         if (delProj === 'Accepted') {
    //             console.log('Project deleted');
    //         }
    //     });
    // });


    // // Allow the user to leave a project
    // leaveProjBtn.click(function () {

    //     let projID = '2';

    //     $.ajax({
    //         url: `/leaveProj/${projID}`,
    //         type: 'PUT',
    //     }).done((leaveProj) => {
    //         if (leaveProj === 'OK') {
    //             console.log('You have left the project');
    //         }
    //     });
    // });



    // // Change the rights of each user, button finds the ID of that user to filter query
    // [adminBtn, viewBtn].forEach(element => {
    //     element.click(function () {
    //         event.preventDefault();

    //         let selectedView = $(this);
    //         let changedUserID = selectedView.closest('td').siblings('.u-id').text();

    //         $.ajax({
    //             url: `/changeMemberRights/${selectedView.text()}/${changedUserID}`,
    //             type: 'PUT',
    //         }).done((changedRights) => {
    //             if (changedRights === 'OK') {
    //                 console.log('Viewer ship changed');
    //             }
    //         });

    //     });


    // });


    // // click event for deleting a URL from a specific project
    // deleteProjUrl.click(function () {

    //     let projURLID = '2';

    //     $.ajax({
    //         url: `/delProjURL/${projURLID}`,
    //         type: 'DELETE',
    //     }).done((delProjURL) => {
    //         if (delProjURL === 'Accepted') {
    //             console.log('Snippet deleted');
    //         }
    //     });
    // }); 


    // // Search through a project with optional parameters
    // searchProjBtn.click(function () {
    //     let searchValue = searchProjInput;
    //     let filterProjTag = false;
    //     let filterProjText = false

    //     if (searchValue.val()) {
    //         if (searchProjTextParam.is(':checked')) {
    //             filterProjTag = true

    //         }
    //         if (searchProjTagParam.is(':checked')) {
    //             filterProjText = true;
    //         }

    //         $.ajax({
    //             url: `/searchProjSnip/${searchValue.val().trim()}/${filterProjTag}/${filterProjText}`
    //         }).done((searchProj) => {
    //             if (searchProj === 'OK') {
    //                 console.log('Sucessful search')
    //                 searchProjInput.val('')
    //             }
    //         });

    //     } else {
    //         alert('You cannot search an empty value!')
    //     }
    // });


    // // Add a URL to a snippet in a project
    // addProjURLBtn.click(function () {
    //     let newURL = {
    //         URL: addProjURL.val(), 
    //         snipID : '2'
    //     }

    //     if (addProjURL.val()) {
    //         $.ajax({
    //             url: `/addProjURL`,
    //             type: 'POST',
    //             data: newURL
    //         }).done((addedURL) => {
    //             if (addedURL === 'Created') {
    //                 console.log('Sucessfully added URL')
    //                 addProjURL.val('');
    //             }
    //         });
    //     } else {
    //         alert(' You cannot add an empty URL')
    //     }
    // });


    // // Delete a snippet from the console of the project you are on
    // delProjSnip.click(function () {
    //     let projSnipID = '2';

    //     $.ajax({
    //         url: `/delProjSnippet/${projSnipID}`,
    //         type: 'DELETE',
    //     }).done((delProjSnip) => {
    //         if (delProjSnip === 'Accepted') {
    //             console.log(' Project Snippet deleted');
    //         }
    //     });
    // })

    // // When the delete button is clicked, turn on flag for tag to be deleted and set color to red
    // delProjTagBtn.click(function () {
    //     if (!removeProjTagBool) {
    //         removeProjTagBool = true;
    //         projTags.addClass("bg-danger");
    //     } else {
    //         removeProjTagBool = false;
    //         projTags.removeClass("bg-danger");
    //     }

    // });

    // // when you click a project tag, if the delete flag is on, register the tag for a query and turn off the flag
    // projTags.click(function () {
    //     if (removeProjTagBool) {
    //         let removedProjTag = $(this).text();

    //         projTags.removeClass("bg-danger");

    //         $.ajax({
    //             url: `/delProjTag/${removedProjTag}`,
    //             type: 'DELETE',
    //         }).done((delProjTag) => {
    //             if (delProjTag === 'Accepted') {
    //                 console.log('Project Tag deleted');
    //                 removeTagBool = false;
    //                 projTags.removeClass("bg-danger");
    //             }
    //         });
    //     }
    // });


    // // Add a tag to the snippet in a project console. Grab the value of the input
    // addProjTagBtn.click(function () {

    //     if (addProjTag.val()) {

    //         let newProjTag = {
    //             tagName: addProjTag.val().trim()
    //         }

    //         $.ajax({
    //             url: `/addProjTag`,
    //             type: 'POST',
    //             data: newProjTag
    //         }).done((newProjTag) => {
    //             if (newProjTag === 'Created') {
    //                 console.log('Project Tag Created');
    //                 addProjTag.val('')
    //             }
    //         });

    //     } else {
    //         alert('You cannot leave change fields empty!')
    //     }

    // });


});


