import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/booksRoute.js'
import cors from 'cors';

const app = express();

/* app.listen(PORT, () => {
    console.log(`App is listening to port: ${PORT}`);
}); */

app.use(express.json()); //Whatever body received, treat it as json object

app.use(cors());

app.get('/', (req, res) => {
    console.log(req);
    return res.status(200).send('Welcome to backend<3');
});

app.use('/books', booksRoute);


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
