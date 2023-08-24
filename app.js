// const  express = require('express');
import express from 'express'
import morgan from 'morgan'
import router from './routers/device.js'
// const  morgan = require('morgan');
import cors from 'cors'

 const  app = express();
app.use(cors({ origin: 'http://localhost:4200' }));
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.static('frontend'));
app.use(express.json());
app.use('/api/v1', router);

export default app
