var contextMenusI = {
  "id": "saveToCacheIt",
  "title": "Save to CacheIt",
  "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenusI); //this will show our app context menu

chrome.contextMenus.onClicked.addListener(function (clicked) {

  // Get the present URL, and the add that and the snippet text into an object
  getCurrentURL()
    .then(function (response) {

      var snippetObject = {
        snipName: response,                // URL
        snipDesc: clicked.selectionText,   // Snippet of text
        snipTag: 'Untagged'                // Default tag
      }
      //alert(JSON.stringify(snippetObject));

      // Send the new cache object to the cacheIt application
      fetch('http://localhost:8080/newPersSnip', {
        method: 'post',
        body: JSON.stringify(snippetObject)
      })
        .then(function (res) {

          // Notify the user that the save was successful
          var notifOption = {
            type: 'basic',
            iconUrl: "cacheitlogo128.png",
            title: "CacheIt",
            message: `Saved snippet from ${snippetObject}`
          };
          chrome.notifications.create("notifIntro", notifOption, function () {
            console.log("created");
          });
        })
        .then(
          reloadMatchingOpenTabs('http://localhost:8080/*')
        );

      //chrome.notifications.create("notifyCopiedText",notificationOptions,notifyCopiedText);
      //chrome.notifications.create(notifyCopiedText);
    });

});

// get the URL of the presently selected tab.
// used when sending the cacheIt object to the application
function getCurrentURL() {
  return new Promise(function (resolve, reject) {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      var tabURL = tabs[0].url;
      resolve(tabURL);
    });
  });

}

// Pass in a url wildcard and this function returns an array
// of all matching urls that the user presently has open
function getMatchingOpenTabs(baseurl) {
  return new Promise(function (resolve, reject) {
    chrome.tabs.query({
      url: baseurl
    },
      function (tab) {
        var allMatchingTabs = [];
        for (var i = 0; i < tab.length; i++) {
          allMatchingTabs.push(tab[i].url);
        }
        return resolve(allMatchingTabs);
      });
  });
}

// For use with this extention, if the user
// adds content to their storage through a 
// roght-click "Save to CacheIt", this will find
// any open tabs with the application's base URL
// and reload them so that the new content is shown
// when they return to the page.
// Note: We may want to limit this to specific URLs, like /home
function reloadMatchingOpenTabs(baseurl) {
  return new Promise(function (resolve, reject) {
    chrome.tabs.query({
      url: baseurl
    },
      function (tab) {
        for (var i = 0; i < tab.length; i++) {
          chrome.tabs.reload(tab[i].id)
        }
        resolve();
      });
  });
}

      // Just for testing
      // getMatchingOpenTabs('http://localhost:8080/*')
      //   .then(function (sendingVal) {
      //     alert(sendingVal);
      //   });