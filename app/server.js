const express = require('express');
const connectDB = require('./config/db')
const dotenv = require('dotenv').config();
const pacientes = require('./src/routes/pacientes')
const port=process.env.PORT
connectDB();
const app = express();

app.use(express.json());
app.use('/api/v1/pacientes', pacientes);

app.listen(port, () => console.log(`Running on port ${port}`))

