# Adidas Fifa Challenge

This is a Frontend ReactJS Web Application project by Yaiza Muñoz.

## Technologies & Libraries used

For the project I have used:
- React with Hooks & Functional Components
- React Router for navigation to show final selection
- LocalStorage for browser data persistency
- For styling & Components: SASS & Material UI
- For cleaning code & code formatting: ESlint & Prettier
- React Testing Library for tests (basic tests as I try learning a bit with the challenge)
- Github Actions for automated deployment into Github Pages

## Start the Project
### Open Project on localhost

Clone the project into you local to run the app in the development server.

First of all, you'll need to install all the required dependencies to be able to open the project correctly. Run the following command:

`npm install`

There is a **.env.example** file in the project. Copy this one the make it a **.env** file to put your API_KEY_SECRET

The API used to collect all the data is: [football-data.org API](football-data.org)

You can start the server into your localhost with the following command:

`npm start`

This will open localhost:3000

### Web App Page

On `.github/Workflows/deploy.yml`there is the Github Action to automate the deploy process of the React Web App into Github Pages.

The link to the site is the following one:

(Adidas Fifa Challenge)[https://yaimsc.github.io/fifa-challenge/]

### Launch the test runner

For launching the test and watch that everything is okay, run the following command:

`npm test`

#### Known Bugs

When you are selecting players:
 - You need to add one more as usual, as the setter of array append goes with 1 select delay.
  Haven't found a solution quick enough & decided to move on to finish the project correctly.
  On `src > components > SelectTeamPlayers.js > addPlayer()` is the code to see how I am doing the process.
Tests:
- `Finalteam.test.js`is not the correct test as it involves localStorage process and was more complex. I just strated today with tests & try the basic ones.

