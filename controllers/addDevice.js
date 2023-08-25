import deviceModel from '../models/deviceModel.js'
import HandOverModel from "../models/handOverModel.js";
import * as path from "path";
import multer from "multer"

const generateUniqueFileName = (file) => {
    const timestamp = Date.now();
    const randomString = Math.random().toString(36).substring(2, 8);
    const extension = path.extname(file.originalname);
    const ext = file.mimetype.split('/')[1]
    return `photo-${randomString}-${timestamp}${extension}`;
};
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/img');
    },
    filename: (req, file, cb) => {
        cb(null, generateUniqueFileName(file));
    }
});
const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new Error('Not an image! Please upload only images.'), false);
    }
};
const upload = multer({storage: multerStorage, fileFilter: multerFilter})
export const uploadImg = upload.array('photo', 4);
const convertJson = (json) => {
    return JSON.parse(json)
}
export const addDevice = async function (req, res, next) {
    try {

        const jsonData = convertJson(req.body?.data);

        const newDevice = {
            name: jsonData.name,
            type: jsonData.type,
            serial: jsonData.serial,
            deviceAddDate: jsonData.deviceAddDate,
            photo: req.files ? req.files.map(file => file.filename) : null,
            thumbnail: req.files ? req.files[0]?.filename : 'default.jpg'
        };
        const device = await deviceModel.create(newDevice);
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
        // const jsonData = convertJson(req.body?.transfer);
        // const newTransfer = {
        //     dateOfDelivery: jsonData.dateOfDelivery,
        //     email: jsonData.email,
        //     handover_person: jsonData.handover_person,
        //     hotline: jsonData.hotline,
        //     onsite: jsonData.onsite,
        //     position: jsonData.position,
        //     receiver: jsonData.receiver,
        //     status: jsonData.status,
        //     note: jsonData.note
        // }
        const device = await deviceModel.findByIdAndUpdate(req.params.id, {allotment: req.body}, {new: true})
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
        const jsonData = convertJson(req.body?.data);
        const update = {
            name: jsonData.name,
            type: jsonData.type,
            serial: jsonData.serial,
            deviceAddDate: jsonData.deviceAddDate,
            photo: req.files ? req.files.map(file => file.filename) : null,
            thumbnail: req.files ? req.files[0].filename : 'default.jpg'
        };
        const device = await deviceModel.findByIdAndUpdate(req.params.id, update).select('_id name')
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
        const page = parseInt(req.query.page) || 0;
        const size = parseInt(req.query.limit) || 10;
        const pageIndex = page * size;
        const pageSize = (page + 1) * size;
        const device = await deviceModel.find().select('_id name serial type status allotment deviceAddDate thumbnail photo').sort({
            createdAt: -1,
            updatedAt: -1
        }).skip(pageIndex).limit(pageSize).lean().exec();

        console.log(page, size)
        const sanitizedData = device.map(item => {
            const {_id, ...rest} = item;

            return {id: _id, ...rest};
        });

        res.status(200).json({
            message: 'success',
            response: sanitizedData,
            total: await deviceModel.countDocuments()
        })
    } catch (error) {
        res.status(400).json({
            message: error.errors,
        })
    }
}


export const getDetailDevice = async function (req, res, next) {
    try {
        console.log(req.params.id)
        const detailDevice = await deviceModel.findById(req.params.id).select('_id name serial type status allotment deviceAddDate thumbnail photo');
        res.status(200).json({
            message: 'success',
            response: detailDevice
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

export const uploadImage = async function (req, res, next) {
    try {
        console.log(req.body)
        console.log(req.file)
        res.status(200).json({
            message: 'success',
        })
    } catch (e) {

    }
}
