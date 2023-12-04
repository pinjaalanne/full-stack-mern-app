# Full Stack MERN App

- Mkdir for the new project
- Create folders for backend(server) and frontend (client)
- Run in terminal: npm init -y // Initialise full stack project, creates package.json 
- Add to package.json: "type": "module", // add to package.json after "main" to be able to use latest JS (ES6)
- Run in terminal: npm i express // Install server / Express.js
- Run in terminal: npm i nodemon // Needed to run backend
- Add these inside "scripts" in package.json:     "start": "node index.js", "dev": "nodemon index.js"
- Create a index.js file
- Import express to index.js: import express from 'express'; 
- Add to index.js: const app = express();
- Create a file config.js
- Add port to config.js: const PORT = 5555;
- Export port by adding export: export const PORT = 5555;
- Import PORT to index.js: import { PORT } from './config.js';
- Add listen method (from express server)to index.js: app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
}); 
- Go to MongoDB website and create a database
- Add a variable for MongoDB to config.js:
export const mongoDBURL = copy code from MongoDB as a string
- Import variable to index.js: 
import { PORT, mongoDBURL } from './config.js';
- Install Mongoose in terminal: npm i mongoose // you can check from package.json
- Import Mongoose to index.js: import mongoose from 'mongoose';
- Connect Mongo with Mongoose to index.js: 
```js
 mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('App connected to the MongoDB database');
        app.listen(PORT, () => {
            console.log(`App is listening to port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });
```
- Add a Models-folder inside Backend-folder, and add a js file called bookModal.js
- Create a structure for book
- Import Book from bookModal.js: import { Book } from './models/bookModal.js'
- Create a route to save a new book to index.js
- Add to index.js: app.use(express.json()); //Whatever body received, treat it as json object
- Download Postman app to your computer
- You can add data via Postman with POST method by adding data in json form and pressing send
- Add a get, put and delete function to your app as well and test them with Postman
- Check the MongoDB database to see that the data is correct
- Create a bookRoutes.js file to a new Routes folder and move the get, post, put and delete functions there
- Add app.use('/books', bookRoutes); to indeh.js and import nesessary files
- Install CORS to connect backend and frontend: npm install cors
- import cors from 'cors'; and app.use(cors()); to index.js
- Create frontend with Vite, npm create vite@latest and folder name frontend and follow instructions (install etc)
- Create Routes and different pages/components
- Install Axios npm i axios  
- Install React Icons npm i react-icons


