# ATT-App-Prototype

This app is a small prototype I made to think through an app that I wanted to build. It has a pretty straightforward file structure. Nothing really special.

Index.html is the homepage for the app. From the homepage the menu icon and menu_screen.js are used to navigate to the app page. App_page.html is the page with the app modules. Initialize_app.js opens up the session the user clicks on. Finally app.js handles the audio in the main "app" part of the website.

/styles contains the style sheets and /assets contains the single .mp3 file used to test the prototype.

All of the code was written without any frontend libraries like Bootstrap or Semantic UI. Jquery was not used. The native audio library for the browser was used instead of howler for simplicity.
