/* eslint-disable */

$(document).ready(function () {

  // instantiate the list.js library for searching through the tags
  let options = {
    valueNames: ['searchTags']
  }; 
  let userList = new List('search-tags', options);

  //variable to store the user Information
  let userID = 'ID retrieved from database'

  // User Action buttons
  let userName = $('#user-name'); 
  let homeBtn = $('#home-btn'); 
  let logOutBtn = $('#logOut-btn'); 

  //button to clear search

  let clearSearchButton = $('.clear-proj-search')

  //Search through the tags
  let searchTagBtn = $('.searchTags'); 

  // specific project selectors. used a class name because each project must be unique
  let projName = $('.proj-name');
  let projDesc = $('.proj-desc');
  let projTags = $('.proj-tags');
  let joinBtn = $('.join-btn');  

  // User able to log out
  logOutBtn.click(function () {
    event.preventDefault(); 
    console.log('Log Out')
  }); 

  // when a tag is clicked register the name and request all projects with that tag
  searchTagBtn.click(function () {
    let selectedTag = $(this).text(); 
    console.log(selectedTag); 
  });
  
  // when the join button is clicked
  joinBtn.click(function () {
    event.preventDefault(); 

    //Get the name of the specfic project that the user has clicked on
    let projectJoinName = $(this).siblings('.proj-name').text(); 

    console.log(projectJoinName);  


  }); 

  clearSearchButton.click(function () {
    console.log('clear search')
  }); 




 
}); 
