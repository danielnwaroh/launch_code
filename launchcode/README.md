This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## How to run

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

Certain functionalities wont be available without node server and sql database

### `make_table_stp.sql`
Running this sql script will create the database/schema, table and the stored procedures used in web applciation <br/>
We have two stored procedures, one for deleting quotes and another for adding quotes.

### `node index.js`

Before running node file, navigate to the file [src/backend/index.js](src/backend/index.js)  <br/>

Set your host name (host), username(user), and password <br/>
const connection = mysql.createConnection({ <br/>
  host: "localhost", <br/>
  user: "root", <br/>
  password: "YOURPASSWORD.", <br/>
  database: "launchcode", <br/>
});

Navigate into the src/backend directory, and run node index.js to startup the server to connect to the mysql database

Email me at [daniel.nwaroh@gmail.com](daniel.nwaroh@gmail.com) if you have any questions

### `Structural Decisions`
[Material UI library](https://material-ui.com/) was used for this project. <br/>
I tried to follow the main dashboard as closely as possible. From the main page the user can create quotes, see other quotes, and delete quotes. <br/>
The price for quotes is deteremined using the selected transportation. <br/>
When creating a quote there is no validation check to make sure everything is filled out.<br/>
I also have a box for new leads but that doesnt do anything yet. <br/>
At the bottom we have some interactive visualizations. <br/>
So far only two of the pages on the navbar actually do something, the home page and the quotes page. <br/>
From the quotes page the user can see all the quotes and can also add new ones.
