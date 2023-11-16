//listen for page load event
window.addEventListener('load', function () {
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