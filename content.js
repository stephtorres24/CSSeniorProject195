function addShortcutPopup(){
  console.log("Content script loaded;")
    var shortcutPoppedUp = false;
    const elem = document.createElement('div');
    elem.id = 'shortcutPopup';
    elem.style.cssText = 'position:fixed;top:50px;right:20px;width:15%;height:10%;text-align:center;font-family:Tahoma, sans-serif;line-height:1.1em;display:flex;align-items:center;justify-content:center;opacity:0.7;z-index:100;border-radius:15px;border: 2px solid #000000;background:#F00';
    
    while(!shortcutPoppedUp){
        var pickTip = Math.floor(Math.random() * 4);
        switch(pickTip) {
            case 0:
              elem.innerHTML = 'New Tab<br>Ctrl+T';
              shortcutPoppedUp = true;
              break;
            case 1:
              elem.innerHTML = 'New Bookmark<br>Ctrl+D';
              shortcutPoppedUp = true;
              break;
            case 2:
              elem.innerHTML = 'Close Tab<br>Ctrl+W';
              shortcutPoppedUp = true;
              break;
            case 3:
              elem.innerHTML = 'Close Window<br>Ctrl+Shift+W';
              shortcutPoppedUp = true;
              break;
          }
    }
    document.body.appendChild(elem);
    setTimeout(function () {
        console.log("timer expired; removing popup from view");
        document.getElementById('shortcutPopup').remove();
    }, 3000);
}

//listen for page load event
window.addEventListener('load', function () {
    addShortcutPopup();
    // Check if this is a new tab or a regular webpage
    if (window.location.href === 'chrome://newtab/') {
      // Handle new tab behavior, e.g., display a message
      const newTabPageMessage = document.createElement('div');
      newTabPageMessage.textContent = 'Welcome to Netiquette New Tab!';
      document.body.appendChild(newTabPageMessage);
    } else {
      // Handle regular webpage behavior
      const body = document.body;
  
      // Add a tooltip to the "New Tab" button
      const newTabButton = document.querySelector('#new-tab-button');
      if (newTabButton) {
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Keyboard Shortcut: Ctrl + T';
        newTabButton.appendChild(tooltip);
      }
  
      // Add a tooltip to the scroll wheel
      window.addEventListener('wheel', function (event) {
        if (event.deltaY > 0) {
          const tooltip = document.createElement('div');
          tooltip.textContent = 'Keyboard Shortcut: Ctrl + Down Arrow';
          tooltip.style.position = 'fixed';
          tooltip.style.top = '10px';
          tooltip.style.left = '10px';
          document.body.appendChild(tooltip);
          // Remove the tooltip after a few seconds
          setTimeout(() => {
            tooltip.remove();
          }, 3000);
        }
      });
  
      // Add best practice tooltips for password prompts
      const passwordPrompts = document.querySelectorAll('input[type="password"]');
      passwordPrompts.forEach(function (prompt) {
        prompt.addEventListener('focus', function () {
          alert('Tip: Create a secure password with a mix of letters, numbers, and symbols.');
        });
      });
  
      // Warn about advertisements when hovering over links
      const links = document.querySelectorAll('a');
      links.forEach(function (link) {
        link.addEventListener('mouseover', function () {
          if (link.textContent.toLowerCase().includes('ad')) {
            alert('Warning: This link may lead to an advertisement.');
          }
        });
      });
    }
  });
  //test