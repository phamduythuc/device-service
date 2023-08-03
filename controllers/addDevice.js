import deviceModel from '../models/deviceModel.js'

export const addDevice = async function (req, res, nex) {
    try {
        const device = await deviceModel.create(req.body)
        console.log(device)
        res.status(201).json({
            message: 'success',
            response: device
        })
    } catch
        (error) {
        console.log(error)
        res.status(400).json({
            message: error.errors,
        })
    }

}
export const getDevice = async function (req, res, next) {
    const device = await deviceModel.find();
    console.log(device)
    res.status(200).json({
        message: 'success',
        device: device
    })
}