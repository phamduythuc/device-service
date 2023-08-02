import express from "express";
import {addDevice, getDevice} from '../controllers/addDevice.js'

const router = express.Router();
router.post('/new-device', addDevice );
router.get('/', getDevice)
export default router;