# Butterflies of Britain Website

Butterflies are a natural beauty that are underappreciated by many people.  This website will aim to help users to name some of the more common butterflies that they may see in their garden or in local parks.<br>
It will provide users with the images and names of several common butterflies in Britain, and will then lead to a ‘Simon Says’-based memory game that will test their knowledge of the butterflies’ names.

Screenshot of Homepage

------------------------------
## UX
------------------------------
This website is aimed for anyone who is wanting to become familiar with common butterflies that they may see.  It is only focused on the names of common butterflies; it is assumed that with this information, people wanting more would then be able to use those names to investigate other sources further.

### User Stories
As a individual wanting to learn more about butterflies, I want to:
* Be introduced to the names of several types of butterfly.
* Be tested on the types of butterfly I have been introduced to.
* Contact the owner of the website if necessary.

As a developer, I want:
* To gain more knowledge on the use of JavaScript to enhance interactivity of websites.	
* To entertain both myself and the end-user in the process of testing the names of butterflies.
* For users to be able to contact me for questions or feedback on the website.

### Wireframes
Balsamiq was used to design the wireframes for this project.  As the project was developed, the original design of a five-page website was redesigned to a three-page website to streamline and simplify the experience.  

#### Original wireframes
* [desktop homepage](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Desktop%20Home%20Page.png?raw=true)
* [desktop types of butterfly](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Desktop%20Types%20of%20Butterfly.png?raw=true)
* [desktop game](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Desktop%20Game.png?raw=true)
* [desktop contact](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Desktop%20Contact.png?raw=true)
* [mobile homepage](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Mobile%20Home%20Page.png?raw=true)
* [mobile types of butterfly](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Desktop%20Types%20of%20Butterfly.png?raw=true)
* [mobile game](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Mobile%20Game.png?raw=true)
* [mobile contact](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/original/Mobile%20Contact.png?raw=true)

#### Redesigned wireframes
* [desktop homepage](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/redesigned/Redesigned%20Desktop%20Homepage.png?raw=true)
* [mobile homepage](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/redesigned/Redesigned%20Mobile%20Home%20Page.png?raw=true)
* [game page](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/redesigned/Redesigned%20Game%20Page.png?raw=true)
* [contact page](https://github.com/Tom1358/butterflies_of_britain/blob/master/assets/wireframes/redesigned/Redesigned%20Contact%20Page.png?raw=true)

By amending the website in this way, it means fewer clicks for the user, and a simpler, cleaner, more satisfying experience.

### Design
Basic colours of white and black were used for text colours and tables, to ensure contrast was high and easily legible.<br>
#567d46 was used - a grassy green - for the links between pages. <br>
White text was used when needed over images to ensure font was easily legible. <br>
The font Nunito from Google Fonts was chosen as it is clean, clear and basic, without being overly ostentatious. Sans Serif is the fallback font in case Nunito does not load correctly.

------------------------------
## Features
------------------------------
### Existing features
* The home page features links to the game and the contact page.
* The game features links to the home page and the contact page.
* The contact page features a link to the home page.
* The instructions on the home page allow the user to read the instructions to play the game, and use the website.
* The start button allows users to start the game.
* The audio button allows users to control the sound of the game.
* The four butterflies on the game screen allow the user to interact with the game.
* The contact form allows users to contact the owner of the website for questions or feedback.

### Features left to implement
* The game to pause between levels, and the user to click a ‘continue’ button
* Ability to pause the game, access the home screen or contact page, and go back to the game to continue where they left off.
------------------------------
## Technologies Used
------------------------------
### Languages
* HTML was the main language of this project.
* CSS was used to style the HTML.
* JavaScript was used to allow interactivity with the website and for the contact form to function.

### Libraries and Frameworks
* FontAwesome was used for the start and audio icons in the game.
* Bootstrap was used for partial structure of the website.
* Google Fonts was used to style the font.
* jQuery was used to simplify some of the JavaScript code, though sparingly.
* Beepbox.com was used to generate the sounds when the butterflies flashed.
* Chrome DevTools was regularly used to test the responsiveness of the website for different devices, and debug any issues.

### Validation Services
* Validator.w3.org was used to validate the HTML code.
* Jigsaw.w3.org/css-validator was used to validate the CSS code.
* JSHint was used to validate the JacvaScript code.

### Tools
* Git was used to handle version control.
* GitHub was used to store and share project code.
* Am I Responsive was used to create images in this Readme file of each page displayed on different screen sizes.
* Balsamiq was used to create the wireframes during the design process.

------------------------------
## Testing
------------------------------
### Automated Testing:

#### *Validation Services*

* The W3C CSS Validation Service - Jigsaw was used for CSS code in this project, which the code passed with no errors or warnings.
* The W3C Markup Validation Service was used for HTML code in this project, and the code passed with no errors or warnings.

#### *User Stories Testing*

#### As a individual wanting to learn more about butterflies, I want to:
* Be introduced to the names of several types of butterfly.
    * On the homepage, there are nine butterflies for desktop, and six butterflies for mobile viewing, all of which are labelled.
* Be tested on the types of butterfly I have been introduced to.
    * The 'Simon Says'-based memory game tests the user's memory of these names, and drills through repetition to help the user remember.
* Contact the owner of the website if necessary.
    * The contact form sends an email to the website designer to allow them to receive any feedback or requests from the user.

#### As a developer, I want:

* To gain more knowledge on the use of JavaScript to enhance interactivity of websites.
    * Three months ago, I knew no JavaScript.  I need to keep reminding myself of this to keep things in perspective - I do not expect to know it all after three months, or a year.  However, this game has provided a springboard to learn a great deal of JS.
* To entertain both myself and the end-user in the process of testing the names of butterflies.
    * As the game mechanics work, it is an entertaining game that serves its purpose.
* For users to be able to contact me for questions or feedback on the website.
    * Users are able to send feedback or requests using the form provided.
------------------------------
### Manual Testing:
------------------------------
#### *Navigation Testing*
* On the home page click 'Play Game' and verify this opens the game page.
* On the game page, click 'Home' to verify returning to the home page works.
* On the home page, click 'Contact' to verify this opens the contact page.
* Click 'Home' to verify returning to the home page works.
* On the game screen, click 'Contact' to verify this opens the contact page.
* Click 'Home' to verify returning to the home page works.


#### *Contact Form Testing*
* Fill in all rows of the form with the required information.
* Click on 'Submit' button.
* Verify that 'sending...' appears in the button.
* Verify that an alert message pops up.
* Verify that the sent message has been received.

#### *Gameplay Testing*
* Click on 'Play' (arrow) button to start game.
* Confirm message after each level is correct, and formatted correctly for aesthetic purposes.
* Try and click on butterflies while it is computer's turn.
* Select the wrong choice from two random levels (chose levels 2 and 4) to confirm that game recognises player's choice does not match computer's, and that the 'wrong' message displays, with the option to replay if the user wishes.

#### *Mobile Device Testing*
* It was confirmed through Chrome DevTools that all optional devices showed all pages in full, there was no unviewable parts of any page, and all parts of the website functioned as they should.

### Bugs Discovered

#### *Solved Bugs*

* All butterflies flashed at once rather than in sequence.
    * Added  `(time) * i` to the setTimeout end of the butterflyFlash function in game.js - ref [Stack Overflow](https://stackoverflow.com/questions/37497872/how-to-save-clear-settimeouts-array-using-loops-index).
* Initially there was the 'check' function referenced in the playerTurn function.  However, each click by the player would increase the amount in the array double (1, 3, 6, 12, 24...)
    * Took out the 'check' reference and added it to separate event listeners for each butterfly click.
* Audio 'mute' function was not working.
    * It seemed that the JavaScript and HTML were not collaborating effectively - using both jQuery and JavaScript, nothing affected the HTML audio element.
    * Took out of game.html, and embedded into JavaScript directly for each butterfly with the code:
     ` let audio = new Audio('assets/sounds/sound_one.mp3');
            audio.play();`

#### *Known Bugs*
* Limitations of game:
    * Player can click on other butterflies while it is computer's turn.
    * Even if player makes a wrong choice their turn will not finish until they have selected the same number of butterflies as the computer flashed for its turn.

### Further Testing
All pages were viewed on all devides and orientations available on Chrome Developer Tools.

------------------------------
## Deployment
------------------------------
### Github pages
The project was deployed to Github Pages using the following steps:
* Log in to Github and navigate to the Github repository
* Under the repository name, click 'Settings'.
* In the left sidebar, click 'Pages'.
* Under 'Github Pages', click the 'None' dropdown arrow, and choose the Master branch.
* Click Save.
* The site is then ready to be published at the link.

### How to Run Project Locally
To clone this project into Gitpod you will need:
* A Github account. Create a Github account here
* Google Chrome browser.
Then, follow these steps:
* Install the Gitpod Browser Extensions for Chrome
* Restart your browser.
* Log into Gitpod with your account.
* Navigate to the Project Github repository
* Click the green 'Gitpod' button. This will trigger a new Gitpod workspace, created from the code in Github, where you can work locally.

------------------------------
## Credits
------------------------------
### Content

All text in the website has been written by myself.<br>
Images of butterflies were taken from:
* www.unsplash.com
* www.pixabay.com 
* https://butterfly-conservation.org/butterflies/identify-a-butterfly 

### Sources of code
* How to start coding a memory game in JS:
    *  https://www.youtube.com/watch?v=n_ec3eowFLQ&t=2706s 
* How to set a delay between flashing images:
    * https://www.geeksforgeeks.org/how-to-add-a-delay-in-a-javascript-loop/ 
* How to compare two arrays in JS:
    * https://www.youtube.com/watch?v=xxDqhU-0mek&t=257s 
* For API use in contact form:
    * https://www.emailjs.com/docs/sdk/send-form/ 
* For API use in contact form:
    * www.code-institute.net


------------------------------
## Acknowledgements 
------------------------------

Special thanks to my mentor Gerry Mcbride for patiently going through my code and correcting where necessary, giving helpful ideas and direction, and keeping me informed what is expected of my website and code in industry.

------------------------------
## Disclaimer
------------------------------
The contents of this website are for educational purposes only.