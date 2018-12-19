# bundesliga

An application that displays data about the Bundesliga, the premier soccer league in Germany.

New features will be added periodically!

Football data provided by the [Football-Data.org API](https://www.football-data.org/).

## Setup

In order to use the application, you will need an API key. Please follow these instructions:

1. Sign up using the above link (it's free!) and you will be given an API key. It can be accessed at any time in the "My Account" tab.
2. In your terminal, navigate to the project directory and type `npm install`.
3. Create a file in the top-level directory of this application called "secrets.js".
4. In secrets.js, paste the following code:
`export const API_TOKEN = 'YOUR_API_TOKEN_HERE';`
5. In the terminal, type `npm run start-dev`.
6. In your browser, navigate to "localhost:3000".
7. Look at some German football data!

## Functionality

Upon starting the application, the application will load the current Bundesliga table for you.

![picture](./initial.png)

Use the two drop-down menus to select a season and matchday of your choice. Currently the app can only load data from the 2017-18 and 2018-19 seasons. Once a season and matchday have been selected, a button will appear.

![picture](./selecting.png)

Click the button to load and view the data.

![picture](./firstselect.png)

Different data can be viewed at any time by selecting a different season and/or matchday and clicking the button.

![picture](./secondselect)
