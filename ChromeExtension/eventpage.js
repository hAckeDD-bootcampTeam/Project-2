var contextMenusI = {
  "id": "saveToCacheIt",
  "title": "Save to CacheIt",
  "contexts": ["selection"]
};
chrome.contextMenus.create(contextMenusI); //this will show our app context menu

chrome.contextMenus.onClicked.addListener(function (clicked) {

  // before the cache object can be stored to the application, we first
  // read the extension settings to get the URL of the app, and the default tag to use.
  // Any new snippet that gets added will be tagged with whatever is set for the default tag.
  var step1 = getStoredSettings(); // get the settings for default tag, and app URL
  var step2 = getCurrentURL();     // the URL where the copied snippet was found

  Promise.all([step1, step2])
    .then(values => {

      var extensionSettingsAndPresentURL = {
        cacheItURL: values[0].cacheItURL,
        cacheItDefaultTag: values[0].cacheItDefaultTag,
        tabURL: values[1]
      }
      return extensionSettingsAndPresentURL;
    })
    .then(function (response) {

      var snippetObject = {
        snipName: response.tabURL,           // URL
        snipDesc: clicked.selectionText,     // Snippet of text
        snipTag: response.cacheItDefaultTag  // Default tag
      }

      // Send the new cache object to the cacheIt application
      fetch(`${response.cacheItURL}/newPersSnip`, {
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
          reloadMatchingOpenTabs(`${response.cacheItURL}/*`)
        );
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

// Get the settings stored in chrome extension storage, so that
// we can use them in the application
function getStoredSettings() {
  return new Promise(function (resolve, reject) {

    chrome.storage.sync.get(["cacheItURL", "cacheItDefaultTag"], function (result) {
      var cacheItSettings = {
        cacheItURL: result.cacheItURL,
        cacheItDefaultTag: result.cacheItDefaultTag,
      }

      if ((result.cacheItURL == undefined) || (result.cacheItDefaultTag == undefined)) {
        alert('You must add the cacheIt URL and default tag in Options!');
        reject();
      } else {
        resolve(cacheItSettings);
      }
    });
  });
}

