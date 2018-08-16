/* eslint-disable */
$(document).ready(function () {

    //instanitate list filter for searching through projects
    let options = {
        valueNames: ['searchTags']
    };
    let userList = new List('search-tags', options);

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


    //SELECTORS FOR PERSONAL CACHE BEGIN

    // Selectors for adding a new snippet to personal cache
    let newSnipName = $('#new-snip-name');
    let newSnipDesc = $('#new-snip-desc');
    let newSnipTag = $('#new-snip-tag');
    let addSnipBtn = $('#add-snip-btn');

    // Selector for user searching through a snippet in personal cache, filtered by either tag or text param - or both
    let searchTag = $('.searchTags');
    let clearTag = $('.clear-cache-search');


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

    $.ajax({
        url: '/getUserInfo/uniqueID',
        type: 'GET'
    }).done((userInfor) => {
        if (userInfo === 'OK') {
            console.log(userInfo); 
        }

    });


    // Allow the user to log out
    logOutBtn.click(function () {
        event.preventDefault();
        console.log('Log out');
        window.location.href = '/';
    });

    // query reddit for some information
    // query reddit for some information
    searchredditBtn.click(function () {
        event.preventDefault();
        $('.reddit-query-col').empty(); 
        
        if (redditQuery.val()) {
            let parseQuery = redditQuery.val().replace(/\/./g, ''); // remove all slashes and dots
            let requrl = "https://www.reddit.com/search.json?&limit=10&sort=hot&sort=new&q=";
            let fullurl = requrl + parseQuery;

            let queryHTML = '<h4 class="heading-font" style="var(--blue-color)">Results!</h4>'; 

            $.getJSON(fullurl, function (json) {
                let myList = json.data.children;

                for (var i=0, l=myList.length && 3; i<l; i++) {
                    let obj = myList[i].data;
                    let title = obj.title;
                    let subrdturl = "http://www.reddit.com/r/"+obj.subreddit+"/";
                    let subrdt = obj.subreddit;

                    queryHTML += `<div class="row reddit-query-row m-2 justify-content-center">
                                    <div class="col-10 m-2 query-col">
                                        <h5 class="heading-font reddit-query-title">${subrdt}</h5>
                                    </div>
                                    <div class="col-10  m-2 query-col">
                                        <h5 class="heading-font">
                                        <a class="reddit-query-url" href="${subrdturl} " target="_blank">URL!</a>
                                    </h5>
                                    </div>
                                    <div class="col-10  m-2 query-col">
                                        <p class="content-font reddit-query-text">
                                        ${title}
                                        </p>
                                    </div>
                                </div>`
                }
                $('.reddit-query-col').append(queryHTML);
                redditQuery.val('') 
            });
        } else {
            alert('Cannot have empty query')
        }

    }); 

    // clear the reddit element
    redditClear.click(function () {
        event.preventDefault();
        $('.reddit-query-col').empty(); 
        redditQuery.val('') 

    });


    // PERSONAL CACHE FUNTIONALITY BEGINS

     // allow the user to pull all the caches objects or one selected
     [searchTag, clearTag].forEach(function (el) {
        el.click(function () {

            let param;
            console.log(event.target.nodeName)
            if (event.target.nodeName === 'BUTTON') {
                let value = $(this).parents('.input-group').children('.form-control').val();
                if (value === '') {
                    param = 'all'
                }
            } else {
                param = $(this).text()
            }

            $.ajax({
                url: `/getSnip/${param}`,
                type: 'GET'
            }).done((selectedSnips) => {

                $('.card-deck').html(selectedSnips)

            });

        })

    })

    // Button click event for when the user adds a snippet to their personal cache
    addSnipBtn.click(function () {
        event.preventDefault();
        if (newSnipName.val() && newSnipDesc.val() && newSnipTag.val()) {
            let snipObj = {
                snipName: newSnipName.val().trim(),
                snipDesc: newSnipDesc.val().trim(),
                snipTag: newSnipTag.val().trim(),
            }

            // make sure it is an email address
            let expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
            let regex = new RegExp(expression);
            let url = snipObj.snipName;

            if (url.match(regex)) {
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
                        window.location.href = '/home';
                    } else {
                        alert('Bad Request')
                    }
                });
            } else {
                alert('That is not a URL');
            }

        } else {
            alert('No Fields can be empty');
        }
    });


    // Add tag click event when adding to personal cache
    $(document).on('click', '.add-tag-btn', function () {

        let snip = $($(this)).closest("[data-ID]");
        let tagVal = snip.find('input')

        if (tagVal.val()) {

            let snipID = snip.data().id

            let newTagObj = {
                newTag: tagVal.val().trim(),
                snipID: snipID
            }

            $.ajax({
                url: '/newSnipTag',
                type: 'POST',
                data: newTagObj
            }).done((newTag) => {

                console.log(newTag);


                if (newTag === 'Created') {
                    console.log('Good Tag creation');
                    window.location.href = '/home'
                    tagVal.val('')
                } else {
                    alert('Bad Request')
                }

            });
        } else {
            alert('Cannot add empty Tag')
        }
    });



    // Remove a tag from a specific snippet in personal cache
    $(document).on('click', '.remove-cache-tag', function () {

        let badges = $(this).parents('.card').find('.cache-snippet-badge');

        for (let i = 0; i < badges.length; i++) {
            $(badges[i]).addClass("bg-danger");
            removeTagBool = true;
        }

    })

    // once a user has chosen remove tag, all tags become red and can then be selected for deletion
    $(document).on('click', '.cache-snippet-badge', function () {
        if (removeTagBool && $(this).hasClass('bg-danger')) {

            let deleteSnip = {
                snipID: $($(this)).closest("[data-ID]").data().id,
                removedTag: $(this).text()
            }

            // remove the red from the elements and turn off boolean
            $(this).removeClass("bg-danger");
            removedTagBool = false;

            $.ajax({
                url: `/delSnipTag`,
                type: 'DELETE',
                data: deleteSnip
            }).done((delTag) => {
                if (delTag === 'Accepted') {
                    window.location.href = '/home'
                    console.log('Tag deleted');
                    removeTagBool = false;
                }
            });
        }
    });


    $(document).on('click', '.delete-snippet', function () {

        let snipID = $($(this)).closest("[data-ID]").data().id;

        $.ajax({
            url: `/delFullSnip/${snipID}`,
            type: 'DELETE',
        }).done((delSnip) => {
            if (delSnip === 'Accepted') {
                window.location.href = '/home'
                console.log('Snippet deleted');
            }
        });

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



