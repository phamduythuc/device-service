import express from "express";
import {addDevice, deleteItemDevice, getDevice, handOver, updateDevice} from '../controllers/addDevice.js'

const router = express.Router();
router.post('/hand-over/:id', handOver);
router.post('/new-device', addDevice );
router.patch('/update-device/:id', updateDevice)
router.get('/devices', getDevice);
router.delete('/delete/:id', deleteItemDevice);
export default router;