import deviceModel from '../models/deviceModel.js'
import HandOverModel from "../models/handOverModel.js";

export const addDevice = async function (req, res, next) {
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
export const handOver = async function (req, res, next) {
    try {
        const allotment = {allotment: req.body}
        const device = await deviceModel.findByIdAndUpdate(req.params.id, {allotment: req.body})
        // console.log(device)
        if (device.allotment) {
            device.status = 1
        }
        await device.save()
        console.log(device)
        res.status(201).json({
            message: 'success',
            response: device.allotment
        })

    } catch (error) {
        res.status(400).json({
            message: error.errors,
        })
    }
}
export const updateDevice = async function (req, res, next) {
    try {
        const device = await deviceModel.findByIdAndUpdate(req.params.id, req.body)
        res.status(200).json({
            message: 'success',
            response: device
        })

    } catch (error) {
        res.status(400).json({
            message: error.errors,
        })
    }
}
export const getDevice = async function (req, res, next) {
    try {
        const device = await deviceModel.find().lean().exec();
        console.log(device)
        const sanitizedData = device.map(item => {
            const {_id, ...rest} = item;

            return {id: _id, ...rest};
        });

        res.status(200).json({
            message: 'success',
            response: sanitizedData
        })
    } catch (error) {
        res.status(400).json({
            message: error.errors,
        })
    }

}

export const getDetailDevice = async function (req, res, next) {
    try {
        const detailService = deviceModel.findById(req.params.id);
        res.status(200).json({
            code: '00',
            message: 'success',
            response: detailService
        })
    } catch (e) {
        res.status(400).json({
            message: 'fail'

        })
    }

};

export const deleteItemDevice = async function (req, res, next) {
    try {
        const item = await deviceModel.deleteOne({_id: req.params.id})
        res.status(200).json({
            message: 'success',
            response: item
        })
    } catch (error) {
        console.log(error)
        res.status(400).json({
            message: 'fail',
        })
    }
}