import 'reflect-metadata';

import express from "express";
import routes from './routes';

import './database';
import './container';

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('Server listening on port 3333');
});