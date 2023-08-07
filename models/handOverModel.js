import {Schema} from "mongoose";
import {model} from "mongoose";
import {deviceSchema} from "./deviceModel.js";
export const handOverSchema = Schema({
    receiver: {
        type: String,
        required: true
    },
    handoverPerson: {
        required: true,
        type: String
    },
    date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    onsite: {
        required: true,
        type: Number,
        default: 0
    },
    hotline: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    note: {
        required: false,
        type: String
    }
})
const HandOverModel = model('handOver', handOverSchema);
export default HandOverModel