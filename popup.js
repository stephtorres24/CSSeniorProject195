//Popup js File 

if (chrome.runtime && !!chrome.runtime.getManifest()) {
  document.addEventListener('DOMContentLoaded', () => {
 
    function applyThemeColor() {
      const savedColor = localStorage.getItem("themeColor")
      if (savedColor) {
        document.body.style.backgroundColor = savedColor;
        const sections = document.querySelectorAll('section');
        sections.forEach(section => {
          section.style.backgroundColor = savedColor;
        });
      }
    }
    applyThemeColor();
    const colorPicker = document.getElementById('colorPicker');
  
    colorPicker.addEventListener('change', function() {
      const selectedColor = this.value;
      document.body.style.backgroundColor = selectedColor;
      const sections = document.querySelectorAll('section');
      sections.forEach(section => {
        section.style.backgroundColor = selectedColor;
      });
      localStorage.setItem( "themeColor", selectedColor );
    });
  
    const shortcuts = [
      {id: 'new-tab', command: 'Ctrl+T (Cmd+T on Mac)'},
      {id: 'new-window', command: 'Ctrl+N (Cmd+N on Mac)'},
      {id: 'close-tab', command: 'Ctrl+W (Cmd+W on Mac)'},
      {id: 'close-window', command: 'Ctrl+Shift+U (Cmd+Shift+Y on Mac)'},
      {id: 'next-tab', command: 'Ctrl+PageDown (Cmd+PageDown on Mac)'},
      {id: 'previous-tab', command: 'Ctrl+PageUp (Cmd+PageUp on Mac)'},
      {id: 'load-prev-page', command: 'Alt+Left (Cmd+Left on Mac)'},
      {id: 'load-next-page', command: 'Alt+Right (Cmd+Right on Mac)'},
      {id: 'bookmark-page', command: 'Ctrl+D (Cmd+D on Mac)'},
      {id: 'cursor-next-word', command: 'Alt+Right (Option+Right on Mac)'},
      {id: 'delete-prev-word', command: 'Ctrl+Delete (Option+PageDown on Mac)'}
      

    ];
    //function to show shortcut prompt 
  function showShortcutPrompt(id, command) {
    let message = `Shortcut ${id}:\n ${command}`;
    let modal = document.getElementById( 'shortcutModal');
    document.getElementById('shortcutMessage').textContent = message;
    modal.style.display = 'block';
  
    let span = document.getElementsByClassName("close")[0];
    span.onclick = function() {
        modal.style.display = 'none';
    }
    setTimeout(function() {
       modal.style.display = 'none';
    }, 3000);   
    }
  
    //load the saved preferences from localStorage and set the checkbox states
    shortcuts.forEach(shortcut => {
      const savedState = localStorage.getItem(shortcut.id);
      const checkbox = document.getElementById(shortcut.id);
  
      if (savedState !== null) {
        checkbox.checked = savedState === 'true';
      }
      checkbox.addEventListener('change', function() {
        var checkedBox = this.checked;
        var shortcutId = shortcut.id;
        localStorage.setItem( shortcutId, checkedBox );
  
        if (checkedBox){
          showShortcutPrompt (shortcut.id, shortcut.command);
        }
      });
    });
  
    document.getElementById('save-preferences').addEventListener('click', function(event) {
      //prevent the form from actually submitting
      event.preventDefault();
  
      shortcuts.forEach(shortcut => {
        const isEnabled = localStorage.getItem(shortcut.id) === 'true';
        if (isEnabled) {
            showShortcutPrompt(shortcut.id, shortcut.command);
        }
      
      });
  
      document.getElementById('myModal').style.display = "block";
      setTimeout(function() {
        document.getElementById('myModal').style.display = "none";
      }, 2000);
    });
  
    document.getElementById('open-user-guide').addEventListener('click', function() {
      //open a new tab with the user guide
      window.open('user-guide.html', '_blank');
    });
  
    let safetyTips = [
      "Safety Tip: Always double-check the URL to ensure you're visiting a legitimate website.",
      "Safety Tip: Avoid downloading files from suspicious websites.",
      "Safety Tip: Keep your browser and plugins up to date.",
      "Safety Tip: Use strong, unique passwords for each online account.",
      "Safety Tip: Be cautious when granting apps or websites access to your personal data.",
      "Safety Tip: Regularly backup your data.",
      "Safety Tip: Beware of phishing scams. Legitimate businesses will never ask for sensitive information through email.",
      "Safety Tip: Avoid using public Wi-Fi networks for online banking or shopping.",
      "Safety Tip: Turn on two-factor authentication (2FA) for added security on your accounts.",
      "Safety Tip: Don't open email attachments from unknown or suspicious sources.",
      "Safety Tip: Keep your operating system and all software updated to protect against vulnerabilities.",
      "Safety Tip: Use a reputable antivirus and anti-malware software.",
      "Safety Tip: Don't share personal information on social media platforms.",
      "Safety Tip: Regularly review and clean up app permissions on your devices.",
      "Safety Tip: Check for HTTPS in the website URL before entering any personal or financial information.",
      "Safety Tip: Regularly monitor your bank and credit card statements for any unauthorized activities.",
      "Safety Tip: Be cautious when using USB drives from unknown sources; they might contain malware."
    ];
    
    const showTipsButton = document.getElementById("show-tips");
    showTipsButton.addEventListener("click", function() {
        let randomIndex = Math.floor(Math.random() * safetyTips.length);
        alert(safetyTips[randomIndex]);
    });
  
    document.getElementById('refreshButton').addEventListener('click',function(){
      console.log('btnComment worked')
      window.location.reload();
   });
  });
  
} else {
  // Fall back to contentscript-only behavior
  console.log("page refreshed")
}
