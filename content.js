function addShortcutPopup(is_OSX){
  console.log("Content script loaded;")
  var shortcutPoppedUp = false;
  const elem = document.createElement('div');
  elem.id = 'shortcutPopup';
  elem.style.cssText = 'position:fixed;top:120px;right:20px;width:10em;height:2.6em;text-align:center;font-size: 1.5em;font-family:Tahoma, sans-serif;font-weight:600;line-height:1.1em;display:flex;align-items:center;justify-content:center;opacity:0.7;z-index:100;border-radius:15px;border: 2px solid #000000;background:#ADD8E6;-webkit-text-stroke-width: 0.2px;-webkit-text-stroke-color: white;';
  
  elem.style.backgroundColor = localStorage.getItem("themeColor",function(res) {
    console.log(res[key])
    });
  elem.classList.add("netiquette");
    while(!shortcutPoppedUp){
        var pickTip = Math.floor(Math.random() * 11);
        switch(pickTip) {
            case 0:
              if (is_OSX){  elem.innerHTML = 'New Tab<br>⌘+T';}
              else{elem.innerHTML = 'New Tab<br>Ctrl+T';}
              shortcutPoppedUp = true;
              break;
            case 1:
              if (is_OSX){  elem.innerHTML = 'New Window<br>⌘+N';}
              else{elem.innerHTML = 'New Window<br>Ctrl+N';}
              shortcutPoppedUp = true;
              break;
            case 2:
              if(is_OSX){elem.innerHTML = 'Close Tab<br>⌘+W';}
              else{elem.innerHTML = 'Close Tab<br>Ctrl+W';}
              shortcutPoppedUp = true;
              break;
            case 3:
              if(is_OSX){elem.innerHTML = 'Close Window<br>⌘+Shift+W';}
              else{elem.innerHTML = 'Close Window<br>Ctrl+Shift+W';}
              shortcutPoppedUp = true;
              break;
            case 4:
              if(is_OSX){elem.innerHTML = 'Next Tab<br>⌘+Opt+→';}
              else{elem.innerHTML = 'Next Tab<br>Ctrl+PgDn';}
              shortcutPoppedUp = true;
              break;
            case 5:
              if(is_OSX){elem.innerHTML = 'Previous Tab<br>⌘+Opt+←';}
              else{elem.innerHTML = 'Previous Tab<br>Ctrl+PgDn';}
              shortcutPoppedUp = true;
              break;
            case 6:
              if(is_OSX){elem.innerHTML = 'Open Prev Page <br>(History) ⌘+[ or ⌘+←';}
              else{elem.innerHTML = 'Open Prev Page <br>(History) Alt+←';}
              shortcutPoppedUp = true;
              break;
            case 7:
              if(is_OSX){elem.innerHTML = 'Open Next Page <br>(History) ⌘+] or ⌘+→';}
              else{elem.innerHTML = 'Open Next Page <br>(History) Alt+→';}
              shortcutPoppedUp = true;
              break;
             case 8:
              if(is_OSX){elem.innerHTML = 'New Bookmark<br>⌘+D';}
              else{elem.innerHTML = 'New Bookmark<br>Ctrl+D';}
              shortcutPoppedUp = true;
              break;
             case 9:
              if(is_OSX){elem.innerHTML = '(Typing) Next Word Opt+→';}
              else{elem.innerHTML = '(Typing) Next Word Ctrl+→';}
              shortcutPoppedUp = true;
              break;
            case 10:
              if(is_OSX){elem.innerHTML = 'Delete Prev Word <br>Opt+Delete';}
              else{elem.innerHTML = 'Delete Prev Word <br>Ctrl+Backspace';}
              shortcutPoppedUp = true;
              break;
          }
    }
    document.body.appendChild(elem);
    setTimeout(function () {
        console.log("timer expired; removing popup from view");
        document.getElementById('shortcutPopup').remove();
    }, 5000);
}

//listen for page load event
window.addEventListener('load', function () {
    localStorage.setItem("themeColor", "#F2EFC7");
    const is_OSX = window.navigator.userAgent.indexOf("Mac OS") != -1;
    addShortcutPopup(is_OSX);
    // Check if this is a new tab or a regular webpage

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
        const tooltip = document.createElement('div');
        tooltip.textContent = 'Scroll: Arrow keys → ↑ ↓ ←';
        tooltip.id = 'scrollTooltip';
        tooltip.style.cssText = 'position:fixed;bottom:80px;right:20px;width:10em;height:2.6em;text-align:center;font-size: 1.5em;font-family:Tahoma, sans-serif;font-weight:600;line-height:1.1em;display:flex;align-items:center;justify-content:center;opacity:0.08;z-index:100;border-radius:15px;border: 2px solid #000000;background:#ADD8E6;-webkit-text-stroke-width: 0.2px;-webkit-text-stroke-color: white;';
        tooltip.style.backgroundColor = localStorage.getItem("themeColor",function(res) {
          console.log(res[key])
          });
        tooltip.classList.add("netiquette");

        document.body.appendChild(tooltip);
        
        // Remove the tooltip after a few seconds
        setTimeout(() => {
          tooltip.remove();
        }, 300);
    });
  
      // Add best practice tooltips for password prompts
      const passwordPrompts = document.querySelectorAll('input[type="password"]');
      passwordPrompts.forEach(function (prompt) {
        prompt.addEventListener('focus', function () {
          var passwordTip = Math.floor(Math.random() * 2);
          switch(passwordTip){
            case 0:
              alert('Tip: Create a secure password; 12 characters minimum, with a mix of upper-and-lowercase letters, numbers, and symbols.');
            case 1:
              alert('Tip: Create a secure password; try a phrase only you would know.');
          }
        });
      });
  
      // Warn about advertisements when hovering over links
      const links = document.querySelectorAll('a');
      const adWarn = document.createElement('div');
      adWarn.textContent = 'Link may be an Ad';
      adWarn.id = 'adWarning';
      adWarn.style.cssText = 'position:fixed;top:40%;right:40%;width:10em;height:2.6em;text-align:center;font-size: 1.5em;font-family:Tahoma, sans-serif;font-weight:600;line-height:1.1em;display:flex;align-items:center;justify-content:center;opacity:0.7;z-index:100;border-radius:15px;border: 2px solid #000000;background:#ADD8E6;-webkit-text-stroke-width: 0.2px;-webkit-text-stroke-color: white;';
      adWarn.classList.add("netiquette");

      links.forEach(function (link) {
        link.addEventListener('mouseover', function () {
          
          if (link.textContent.toLowerCase().includes('ad')) {
            var rect = link.getBoundingClientRect();
            var xPos = rect.left;
            var yPos = rect.top;
            var linkColor = link.style.color;
            link.style.color = "#FF0000"
            adWarn.style.backgroundColor = localStorage.getItem("themeColor");
            adWarn.style.left = xPos;
            adWarn.style.top = yPos;
            document.body.appendChild(adWarn);
      
            // Remove the ad warning after a few seconds
            setTimeout(() => {
              adWarn.remove();
              link.style.color = linkColor;
            }, 1500);
          }
        });
      });
  });
  //test