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
app.use(cors({ origin: 'http://localhost:4200' }));
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
app.use(express.static(path.join(__dirname, '/public')));
// app.map('', (req, res) => {
//     res.sendFile(path.join(__dirname, '/public/index.html'));
// });
app.use(express.json());
app.use((req, res, next) => {
    // Sử dụng regex để kiểm tra xem đường dẫn có bắt đầu bằng /api/v1 hay không
    if (/^\/api\/v1/.test(req.path)) {
        // Gọi middleware tiếp theo nếu đường dẫn bắt đầu bằng /api/v1
        next();
    } else {
        // Xử lý yêu cầu không khớp với /api/v1
        // Gọi trang public index.html
        res.sendFile(path.join(__dirname, '/public/index.html'));
    }
});
app.use('/api/v1', router);
app.use('/api/v1', (req, res, next) => {
    // Xử lý các yêu cầu không khớp với các đường dẫn API
    // Gọi trang public index.html
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

export default app
