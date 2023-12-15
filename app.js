const express = require('express');
const connectDB = require('./config/db');

require('dotenv').config();

const app = express();

//Start Router
const routerCat = require('./routers/cat');
app.use('/cat', routerCat);
//End Router

//mongodb
connectDB();


app.get('/', (req, res) => {
    res.send('Express and mongoDB Docker');
});

const PUERTO = process.env.PORT || 3000;

app.listen(PUERTO, () => {
    console.log(`The server is listening the PORT: ${PUERTO}....`);
});
