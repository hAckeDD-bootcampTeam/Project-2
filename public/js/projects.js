/* eslint-disable */

// REMOVED B/C SCOPE

// $(document).ready(function () {

//   // instantiate the list.js library for searching through the tags
//   let options = {
//     valueNames: ['searchTags']
//   };
//   let userList = new List('search-tags', options);

//   //variable to store the user Information
//   let userID = 'ID retrieved from database'

//   // User Action buttons
//   let userName = $('#user-name');
//   let homeBtn = $('#home-btn');
//   let logOutBtn = $('#logOut-btn');

//   //button to clear search
//   let clearSearchButton = $('.clear-proj-search')

//   // specific project selectors. used a class name because each project must be unique
//   let projName = $('.proj-name');
//   let projDesc = $('.proj-desc');
//   let projTags = $('.proj-tags');

//   // button to search tag 
//   let searchTagBtn = $('.searchTags')

//   // button to join the project
//   let joinBtn = $('.join-btn');

//   // User able to log out
//   logOutBtn.click(function () {
//     event.preventDefault();
//     console.log('Log Out');
//     window.location.href = '/'; // kick the user back to the landing page
//   });

//   // when a tag is clicked register the name and request all projects with that tag
//   searchTagBtn.click(function () {
//     let selectedTag = $(this).text();     

//     $.ajax({
//       url: `/filterbytag/${selectedTag}`,
//     }).done ((response) => {
//       if (response === 'OK') {
//         console.log('Good Selection')
//       }
//     });  
//   }); 


//   // when the join button is clicked
//   joinBtn.click(function () {
//     event.preventDefault();

//     //Get the name of the specfic project that the user has clicked on
//     let projectJoinName = $(this).siblings('.proj-name').text();
//     let testUser = 'David'; 

//     //test object to send back to the server
//     testObj = {
//       project_name : projectJoinName,
//       user_name: testUser 
//     }

//     // Send put request to server with the group name and the test user
//     $.ajax({
//       url: '/joinGroup',
//       type: 'PUT',
//       data: testObj
//     }).done ((joined) => {
//       //if the response is good, status is update (202), for accepted, log good put request
//       if (joined === 'Accepted') {
//        console.log('Good put request')
//       }
//     }); 



//   });


//   // Get request to clear the search by tag name and return all tags
//   clearSearchButton.click(function () {
//     $.ajax({
//       url: '/allProjects',
//       type: 'GET'
//     }).done ((allProjects) => {
//       //if the response is good, status is update (202), for accepted, log good put request
//       if (allProjects === 'OK') {
//        console.log('All projects retrieved')
//       }
  
//     }); 
//   });





// }); 
