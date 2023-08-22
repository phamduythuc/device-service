import express from "express";

import {
    addDevice,
    deleteItemDevice,
    getDetailDevice,
    getDevice,
    handOver,
    updateDevice, uploadImage, uploadImg,
} from '../controllers/addDevice.js'

const router = express.Router();
router.post('/hand-over/:id', handOver);
router.post('/new-device', uploadImg, addDevice );
router.patch('/update-device/:id', updateDevice)
router.get('/devices', getDevice);
router.get('/device/:id', getDetailDevice);
router.delete('/delete/:id', deleteItemDevice);
router.post('/image', uploadImg, uploadImage);
export default router;
