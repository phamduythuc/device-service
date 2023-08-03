import {Schema} from "mongoose";
import {model} from "mongoose";


const deviceSchema = Schema({
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
        required: true
    },
})
const deviceModel = model('device', deviceSchema);
export default deviceModel;