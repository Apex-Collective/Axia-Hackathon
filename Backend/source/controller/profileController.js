const Profile = require('../models/profile');
const uploadToCloudinary = require('../utils/uploadToCloudinary');

exports.completeProfile = async (req, res) => {
    try{
        const profile = await Profile.findOneAndUpdate(
            {user: req.userId},
            {...req.body, user: req.userId},
            {upsert: true, new: true}
        );
        res.status(200).json(profile);
    }catch(error){
        res.status(500).json({message: "Server error", error: error.message});
    }
};

exports.getMyProfile = async (req, res) => {
    try{
        const profile = await Profile.findOne({user: req.userId});
        if(!profile) res.status(404).json({message: 'Profile not found.'});
        res.status(200).json(profile);
    }catch(error){
        res.status(500).json({message: "Server error", error: error.message});
    }
};

exports.uploadPassport = async (req, res) => {
    try{
        if(!req.file){
            return res.status(400).json({message: 'No file uploaded.'});
        }
        const result = await uploadToCloudinary(
            req.file.buffer,
            'passport_photos'
        );

        const profile = await Profile.findOneAndUpdate(
            {user: req.userId},
            {passportPhoto: result.secure_url},
            {new: true, upsert: true}
        );
        res.status(200).json({
            message: 'Passport photo uploaded successfully.',
            ImageURL: result.secure_url,
            profile
        });
    }catch(error){
        res.status(500).json({message: 'Server error', error: error.message});
    }
};