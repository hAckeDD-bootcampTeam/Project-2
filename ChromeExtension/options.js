
// https://developer.chrome.com/extensions/api_index

$(document).ready(function () {
    // Getting references to our form and inputs
    var saveSettingsForm = $("form.saveSettings");
    var urlInput = $("#cacheItURL");
    var defaultSnippetTag = $("#cacheItDefaultTag");

    // If there are values stored in chrome for the extension, retrieve them
    chrome.storage.sync.get(["cacheItURL", "cacheItDefaultTag"], function (result)  {
        document.getElementById('cacheItURL').value = result.cacheItURL;
        document.getElementById('cacheItDefaultTag').value = result.cacheItDefaultTag;        
      });

    // Save the url and default tag
    saveSettingsForm.on("submit", function (event) {
        event.preventDefault();

        // Save the settings into chrome extension storage
        chrome.storage.sync.set({
            'cacheItURL': urlInput.val().trim(),
            'cacheItDefaultTag': defaultSnippetTag.val().trim()
        });
        close();
    });
});


