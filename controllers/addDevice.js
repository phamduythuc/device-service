import deviceModel from '../models/deviceModel.js'
export const addDevice = async function (req, res, nex) {
    const device = await  deviceModel.create(req.body)
    res.status(200).json({
        message: 'success',
        device : device
    })
}
export const getDevice = async  function (req, res, next) {
    const device = await  deviceModel.find();
    console.log(device)
    res.status(200).json({
        message: 'success',
        device: device
    })
}