<h1 align="center">Bandwidth</h1> 
<p align="center">The Network for Musicians</p>
<p align="center">
<img width="200" src="https://raw.githubusercontent.com/rroyalty/bandwidth/main/client/public/favicon.ico">
</p>

## Deployment
<a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">View Our Deployed application here</a>

## Description
 Are you a Band looking for a Musician? A Musician looking for a Band? Which Instruments do you play? Are you looking to network with other bands based on Genre? Enter Bandwidth, a networking platform for musicians nationwide to find new members in their area, as well as for bands looking to work with other bands to tour or create shows of their own. We supply the network. You supply the music. It's that easy.

## Table of Contents
   [User Story](#user-story) | [Technologies](#technologies) | [How it Works](#how-it-works) | [License](#license) | [Collaborators](#collaborators)    


## User Story
```
As a Musician, I want to visit a website and see other Bands and Musicians to network with.
I want a website that I can access on my phone, tablet, or desktop.
When I want to contact one or more musicians,
Then I want to be directed to login.
When I signup for the first time,
Then I want to create a profile that contains my own Musical profile, including User and Contact info, as well as Instruments, Genres, etc.
When I create a profile or login again,
Then I want to be redirected to my dashboard.
When I contact a User,
Then I want to send them an email, call, or direct message.
When I am logged in,
Then I want to be able to search for others in my area, or by instruments played, genre, etc.
```
## Technologies
[NPM](https://www.npmjs.com/) | [Express](https://www.npmjs.com/package/express) | [React JS](https://reactjs.org/) | [MySQL2](https://www.npmjs.com/package/mysql2) | [Sequelize](https://www.npmjs.com/package/sequelize) | [Dotenv](https://www.npmjs.com/package/dotenv) | [Auth0](https://auth0.com/#!) | [TypeScript](https://www.typescriptlang.org/) | [Redux](https://redux.js.org/)

## How It Works
* Clone the repo
* Run the command line npm install for all the dependencies to be installed (in both server and client folders)
* Create a database with db schema.sql name before running
* Create a .env file to connect to your database for Model seeding (we used TablePlus on Mac and Windows).
* Type npm run seed from the server file to populate the database with data.
* Type npm run start from the client file to start the React application.

## Questions
Please contact the builders of this application if you have any questions, concerns or issues running the app on your local machine (contact info below).

## Future Development
* Add different color modes for users. This could include the nowadays standard dark mode (toggle), perhaps a more creative toggle color such as Pride mode, or maybe even a color picker associated with CSS variables that would change certain sets of colors based off User preference.
* Expanded functionality for other User profile types. Right now there is one generic type, with different field values (such as Status: looking for Band or Musician). This could simply be expanded to include statuses such as "Looking for Manager" or "Tour Manager looking for Bands", but the macro sense would be to expand beyond relating musicians to bands and bands to other bands, by also connecting music professionals to management, venues, and other desired roles within various musical environments.
* Integrate Spotify API into User Profiles. 
* Include additional options for YouTube, maybe even mp3 or mp4 uploads to a certain extend.
* Re-design User models to perhaps be separated her role: Musician, Band, etc. This could possibly result in a different layout, but may not be a good idea all things considered.
* Enhance and Expand search functionality. The idea would be more like a Craigslist for Musicians. Multiple search features (location, genre, instrument, status, etc.), however there exists the question how this would be marketable. After a certain extent, this passion project would have to be used for a purpose beyond Project 3. Donation based? - How does Craigslist make money?
* Ability to Upload photos for backgrounds. Ditto for A/V (audio/video).
* Expanded Login options (Social Media, Gmail, custom signup (non-Gmail accounts), GitHub, etc.)
* Fast Average Color npm package for photos to determine the background of a band page algorithmically.
* Update/Delete routes for instrument and genres
* Array filtering on model queries to eliminate duplicate returns


## License
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Built with 🤘 by

[Cathy Marchese on GitHub](https://github.com/crrmarchese)<br/>
[Toni Powell on GitHub](https://github.com/tonipow3ll)<br/>
[Ryan Royalty on GitHub](https://github.com/rroyalty)<br/>
[Bjorn Yourey on GitHub](https://github.com/byourey)<br/>
[Jonathan Hammond on GitHub](https://github.com/Pythonidaer)<br/>

