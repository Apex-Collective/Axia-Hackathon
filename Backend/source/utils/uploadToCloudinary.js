const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

module.exports = async (fileBuffer, folder) => {
try{
    return await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream({folder}, (error, result) => {
                if(error) return reject(error);
                resolve(result);
            })
            stream.end(fileBuffer);
         });
    }catch(error){
        console.log('Cloudinary upload failed:', error);
        return {secure_url: 'https://via.placeholder.com/150'};
    }
};