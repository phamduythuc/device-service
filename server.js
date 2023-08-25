import mongoose from 'mongoose'
// const mongoose = require('mongoose');
import app from './app.js'
import dotenv from 'dotenv'
// const dotenv = require('dotenv')
dotenv.config({path: './environments/config.env'});

const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
console.log(DB)
mongoose.connect(DB, {
    useNewUrlParser: true,
}).then(() => console.log('DB connect successful!'))

const port = process.env.PORT || 3000;
const server =  app.listen(port, () => {
    console.log(`app running on port ${port}`);})