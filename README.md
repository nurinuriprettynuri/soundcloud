# README

[Live Demo](https://sound-cloud-pj.herokuapp.com)

SoundClown is a single-page web application that offers users to stream my favorite songs.The design and functionality is inspired by SoundCloud.

## Technologies

SoundClown is built using Ruby on Rails and a PostgreSQL database to handle the backend. AWS S3 is used to host the main media files (artist, , and album art as well as song files). React and Redux are used to manage the state of the front end alongside HTML5 and SASS for styling.



## Features

### Global music playbar

The goal:
Add the ability for users to play songs continuously while browsing the site. Allow globally synced play/pause functionality from the playbar, the song's page, and on other pages where the song appears.

The solution:
Have a UI slice of state as part of the global Redux state that keeps track of the necessary data that needs to be synced across the app. Pass the relevant parts of that slice of state and relevant actions to other components (such as the song show page) to allow for globally synced playback and control.

## MVPs

### 1. Hosting on Heroku
### 2. New account creation, login, and guest/demo login

* Users can sign up, sign in, log out
* Users can use a demo login to try the site
* Users can't use certain features without logging in (creating songs & likes)

### 3. Track CRUD
* Logged in users can upload songs
* Users can view other songs
* Logged in users can edit existing songs

### 4. Playing songs with progress bar with continuous play
* Playing songs with progress bar 
* Continuous play when navigating

### 5. Comments
* Users can add comments to songs
* Users can delete comments

### 6. User pages
* logged in users have access to their profile with their own music and information

### 7. Production README
