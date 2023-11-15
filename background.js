//For functionalities (shortcuts)

//function to handle keyboard shortcuts
function handleKeyboardShortcuts(event) {
    if (event.ctrlKey || event.metaKey) {
      switch(event.code) {
        case 'KeyT': //new tab
        if (localStorage.getItem('new-tab') === 'true') {
          chrome.tabs.create({});
        }
        break;
  
        case 'KeyN': //new window
        if (localStorage.getItem('new-window') === 'true') {
          chrome.windows.create();
        }
        break;
  
        case 'KeyW': //close tab
        if (event.shiftKey && localStorage.getItem('close-tab') === 'true') {
          chrome.tabs.query({ active: true, currentWindow: true}, function (tabs) {
            chrome.tabs.remove(tabs[0].id);
  
          });
        }
        break;

        case 'KeyU': //close window
          if (event.shiftKey && localStorage.getItem('close-window') === 'true') {
            chrome.windows.getCurrent({}, function(window) {
              chrome.windows.remove(window.id);
            });
          }
          break;
  
        case 'KeyD': //bookmark page 
        if (localStorage.getItem('bookmark-page') === 'true') {
          chrome.tabs.query({active: true, currentWindow: true}, function (tabs){
            const tab = tabs[0];
            chrome.bookmarks.create({ title: tab.title, url: tab.url});
          });
        }
        break;
  
        default:
          console.log('Unrecognized key combination:', event.code);
          break;
      }
    }
  }

  document.addEventListener('keydown', handleKeyboardShortcuts);
  //document.removeEventListener('keydown', handleKeyboardShortcuts);