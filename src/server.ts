import express from "express";

const app = express();

const number = 0.1;

const number2 = 0.1;

console.log(0.1 + 0.2 == 0.3);

app.listen(3333, () => {
    console.log('Server listening on port 3333');
});