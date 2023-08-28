// const  express = require('express');
import express from 'express'
import morgan from 'morgan'
import router from './routers/device.js'
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 const  app = express();
app.use(cors());
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.static(path.join(__dirname, '/public')));
// app.map('', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });
app.use(express.json());
app.use('/api/v1', router);
// app.use('/api/v1', (req, res, next) => {
//
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });

export default app
