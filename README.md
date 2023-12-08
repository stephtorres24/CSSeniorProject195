# CSSeniorProject195
Project Title: Netiquette
Shortcut Tool Extension

Customization option: 
Click effect over the center of the button you accessed with a keyboard shortcut.

KeyWords: 
extension, training, browser, safety

Project Description: 
The purpose of the tool is to train users on how to utilize the shortcuts in their Chromium browser more effectively, and to inform uninformed users about general internet safety.

Services/Functionalities:
- The application would be a Chromium UI extension with the purpose of displaying keyboard shortcuts to users for the specific actions available to them. By displaying the appropriate keyboard shortcut associated with the action the user is completing, they will be able to learn the shortcuts associated with those web actions.
- For example, when hovering the mouse over the “new tab” button on Chrome, the text “Ctrl + T” will appear in a transparent box. When scrolling down on the scroll wheel, the text “Ctrl + Down arrow” will display to the left of the scroll wheel. I would like to extend these tooltips outwards to include an essential set of keyboard shortcuts.
- To expand upon the tool further, it could include best practice tooltips for users to help create a more informed user. For example, when the user selects a password prompt HTML element, the web browser will prompt the user with general advice for creating secure passwords. When hovering over a link, the tool can alert the user they are hovering over an advertisement then warn of the possibility of ads.

Code File Purposes: 
background.js: 
  The 'handleKeyboardShortcuts' function in our browser extension improves user experience by implementing keyboard shortcuts. It activates specific browser actions when users press certain key combinations (like 'Ctrl'/'Command' plus another key), as per their settings in local storage. Key actions include opening new tabs ('Ctrl + T' or 'Command + T'), opening new windows ('Ctrl + N' or 'Command + N'), closing tabs or windows ('Ctrl + Shift + W' or 'Command + Shift + W'), and bookmarking pages ('Ctrl + D' or 'Command + D'). Unrecognized keys are logged to the console. The function, linked to the 'keydown' event, responds immediately to key presses, enhancing the browsing experience. To deactivate, the event listener must be removed from the script.

content.js:
This script is crucial for our extension, focused on improving user interaction through keyboard shortcuts and safety tips. It primarily displays context-sensitive pop-ups and tooltips to enhance web navigation:
  - 'addShortcutPopup' function dynamically shows a popup with relevant keyboard shortcuts based on the user's operating system.
  - Automatically sets a theme color for popups and manages their appearance and disappearance.
  - Adds tooltips for key elements like the 'New Tab' button and during scrolling, providing useful shortcuts and instructions.
  - Displays security tips in password fields and alerts users to potential advertisements in links.
  This script plays a vital role in making browsing more efficient, secure, and user-friendly, by offering guidance and tips directly within the user's web experience.

manifest.json: 
The 'Netiquette' manifest file is the core configuration for our Chrome extension. It outlines key settings and permissions:
  - "manifest_version": 3, ensuring up-to-date compatibility.
  - "name": "Netiquette", the extension's name.
  - "description": Highlights the extension's purpose to enhance web browsing with keyboard shortcuts and internet safety tips.
  - "version": "1.0", for update and version management.
  - "permissions": Includes 'activeTab', 'storage', 'tabs', and 'bookmarks', allowing interaction with web pages, local data storage, tab management, and bookmark manipulation.
  - "host_permissions": Grants access to all web pages.
  - "action": Sets the default user interface, including popup and icons.
  - "icons": Defines icons for browser UI and Chrome Web Store.
  - "content_scripts": Details scripts injected into web pages for extension functionality.
  - "web_accessible_resources": Lists resources like images that are available to web pages.

popup.css:
This CSS file, 'popup.css', is for styling the popup interface of our 'Netiquette' Chrome extension. It defines the visual aspects of various elements to enhance the user interface:
  - Body, headers, paragraphs, forms, and sections are set with no margin or padding initially, ensuring a consistent starting point for styling.
  - The body is styled with a light background and padding, using a modern font for overall aesthetics.
  - The header (h1) has a navy background with white text, centered alignment, and subtle shadow for a prominent appearance.
  - Buttons are styled uniformly with a navy background, white text, and become pink on hover for interactive feedback.
  - Specific classes like '.readable-text' and '.modern-border' are defined for additional text styling and bordered elements.
  - Media queries adjust button widths for responsiveness on larger screens.
  - Sections like '#shortcut-list', '#customize-shortcut', and '#safety-tips' have distinct stylings for clear visual differentiation.
  - Input fields and the submit button in forms are styled for consistency and usability.
  - Special elements like '#toast' for notifications, a modal window, and the '#reset-preferences' button have unique styling to stand out and serve their specific purposes.
Overall, this CSS file ensures that the popup component of our extension is visually appealing, user-friendly, and responsive, contributing significantly to the user experience of our extension.

popup.html:
 Our HTML file forms the user interface of our 'Netiquette' Chrome extension. It provides a structured and interactive layout for users to interact with the extension's features:
  - The document includes external links to Google Fonts for stylish typography.
  - The <body> comprises different sections, each with a specific purpose:
    1. Header (h1): Displays the extension's name and logo, establishing the brand identity.
    2. Shortcut List Section: Allows users to toggle on or off various keyboard shortcuts for browser control, like opening/closing tabs and windows, and webpage navigation.
    3. Theme Color Section: Lets users choose a preferred theme color for the extension's interface.
    4. Customize Shortcuts Section: Provides an option to save user preferences for shortcuts.
    5. Safety Tips Section: Contains a button to show quick online safety tips.
    6. User Guide Section: Offers assistance through a user guide button.
  - Two modal pop-ups are included for feedback ('myModal') and displaying shortcut messages ('shortcutModal').
  - The 'popup.js' script is linked for handling the extension's functionality.

popup.js:
This JavaScript file, 'popup.js', is integral to the functioning of our 'Netiquette' Chrome extension. It handles user interactions and settings within the extension's popup interface.
  - The 'DOMContentLoaded' event listener ensures the script runs after the popup has fully loaded.
  - 'applyThemeColor' function retrieves the user's chosen theme color from local storage and applies it to the popup's background and sections.
  - A color picker allows users to change and save their preferred theme color, which is reflected in real-time and stored for future sessions.
  - An array of keyboard shortcuts is defined, each with an ID and command. These are used to manage shortcut functionalities.
  - A keydown event listener checks if a user's key press matches any of the defined shortcuts and performs the corresponding action (like opening a new tab or bookmarking a page) if the shortcut is enabled.
  - The 'showShortcutPrompt' function displays a modal with information about a selected shortcut.
  - The script loads and updates the user's shortcut preferences from local storage, reflecting their choices in the popup's checkboxes.
  - 'Save Preferences' button triggers a modal indicating successful preference saving.
  - 'Open User Guide' button opens a new tab with a user guide for the extension.
  - An array of safety tips is defined, and a button randomly displays one of these tips to educate users about online safety.

user.guide.html: 
This HTML file serves as the User Guide for our extension. It provides a detailed yet easy-to-understand overview of the extension's features and functionalities:
  - The page is styled with CSS to ensure readability and visual appeal. Styles include modern borders, clear typography, and table formatting for presenting information in an organized way.
  - The guide begins with an 'Introduction' section, welcoming users and setting the context for what Netiquette offers.
  - 'Purpose of Netiquette' section explains the extension's objective - to enhance browsing experience with visual appeal, browser functionality shortcuts, and online safety tips.
  - 'Key Features' section outlines the major functionalities of Netiquette:
    1. Color Theme Customization: Describes how users can change the browser's theme color.
    2. Save Specific Preferences: Highlights the ability to customize and save browser settings.
    3. Quick Safety Tips: Offers instant guidelines for secure browsing.
    4. Keyboard Shortcuts: Lists various shortcuts for common browser actions, presented in a table format, differentiating between Windows and Apple shortcuts.
  - The guide is structured to help users easily understand and utilize the features of the Netiquette extension, enhancing their web browsing experience.

images: contains our logo for Netiquette with different pixel size images for the extension 

Typical Customers: 
Typical users would be anybody trying to improve their speed and efficiency with a computer through knowledge of keyboard shortcuts; business users and organizations may wish to make the extension mandatory to company browsers as a form of employee training.
Middle schools could be interested in the application as a method of passively training students to utilize shortcuts effectively. Learning to navigate a browser quickly is a skill that would make them more effective with computers for the rest of their lives.

Envrionment System:
We anticipate the system being used on Chromium browsers in modern laptop/desktop environments. It will not see use in mobile environments.

Related Work:
Brainscape - How Keyboard Shortcuts could Revive America’s Economy
- By drilling keyboard shortcuts into your brain for 20 minutes today, you could start saving 8 days per year in time.
- Equal to 3.3% of your total productivity

Edutopia - Teaching Students about Keyboard Shortcuts
- It is a powerful transferable skill. Since many apps use the same shortcuts, the knowledge often applies across applications. 
- “Learning shortcuts can help students boost their confidence and efficiency navigating online spaces, as well as help them build transferable skills they can apply to different digital environments.”

Development Concerns:
- Identify tools, software and hardware that you anticipate needing for the development of the project. If you will need funding to purchase any software or equipment, estimate the cost.
- There should be no software or hardware requirements for this project. Chrome extensions are written in the same languages as any webpage, utilizing HTML, CSS, and Javascript. - - Uploading the extension to the Chrome web store would be free

Team Profile:
programmer- Stephanie/Marco/Lucas
interface designer- Stephanie/Marco/Lucas
Functionalities - Stephanie/Marco/Lucas 
project manager-  Stephanie/Marco/Lucas 
artist- Stephanie/Marco/Lucas
