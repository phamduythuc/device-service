import {Schema} from "mongoose";
import {model} from "mongoose";
import handOverModel from "./handOverModel.js";
import {handOverSchema} from "./handOverModel.js";
export const deviceSchema = Schema({
    name: {
        type: String,
        required: true
    },
    serial: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        default: 0
    },
    allotment: {
        type: Object,
        default: {}
    }
})
const deviceModel = model('device', deviceSchema);
export default deviceModel;