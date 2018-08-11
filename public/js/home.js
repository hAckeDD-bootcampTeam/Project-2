/* eslint-disable */


$(document).ready(function () {

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


      let options = {
        valueNames: ['projTagBadge']
      };
    
      let userList = new List('project-tags', options);



});


