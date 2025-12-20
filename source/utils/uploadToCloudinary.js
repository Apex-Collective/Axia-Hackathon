const cloudinary = require('cloudinary').v2;
const streamifier = require('streamifier');

module.exports = function uploadToCloudinary(buffer, folder = 'profiles'){
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            {
                folder,
                resource_type: 'image'
            },
            (error, result) => {
                if(error, result) return reject(error);
                resolve(result);
            })
        });

        streamifier.createReadStream(buffer).pipe(uploadStream);
};