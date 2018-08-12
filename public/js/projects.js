/* eslint-disable */

$(document).ready(function () {

  // instantiate the list.js library for searching capabilities
  let options = {
    valueNames: ['searchTags']
  }; 
  let userList = new List('search-tags', options);

  // Selectors
  let userName = $('#user-name'); 
  let homeBtn = $('#home-btn'); 
  let logOutBtn = $('#logOut-btn'); 
  let searchInput = $('.search'); 
  let searchClearBtn = $('#clear-search'); 
  let searchTagBtn = $('.searchTags'); 

  let projName = $('.proj-name');
  let projDesc = $('.proj-desc');
  let projTags = $('.proj-tags');

  let clearSearch = $('#clear-search')
 
  let joinBtn = $('.join-btn'); 

  let searchTags = $('.searchTags'); 

  logOutBtn.click(function () {
    event.preventDefault(); 
    console.log('Log Out')
  }); 

  searchClearBtn.click(function () {
    searchInput.empty()
  }); 

  searchTags.click(function () {
    console.log($(this).text()); 
  });
  
  joinBtn.click(function () {
    event.preventDefault(); 
    console.log($(this).siblings('.proj-name').text()); 

  }); 

  clearSearch.click(function () {
    searchInput.trigger(':reset');  
    console.log('hey')
  }); 



 
}); 
