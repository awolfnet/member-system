'use strict';

const express = require('express');
const cors = require('cors');

require('dotenv').config();
console.log('Current database:' + process.env.DB_HOST);

// App
const app = express();
app.use(cors());
app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(process.env.PORT, process.env.HOST);
console.log(`Running on http://${process.env.HOST}:${process.env.PORT}`);