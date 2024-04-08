const express = require('express');
const connectDB = require('./db/connect')

const app = express()
const dotenv = require('dotenv')
dotenv.config()
app.use(express.json())

const PORT = process.env.PORT || 3000
const DB_URL = process.env.DB_URL


const start = () =>{
    connectDB(DB_URL);
    app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
}
start()