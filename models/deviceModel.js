
import {Schema} from "mongoose";
import {model} from "mongoose";


const deviceSchema = Schema({
    name:  {
        type: String,
        require: true
    }
})
const deviceModel = model('device', deviceSchema);
export default deviceModel;