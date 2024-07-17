const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();

const port=process.env.PORT
connectDB();
const app = express();
app.listen(port, () => console.log(`Running on port ${port}`))

