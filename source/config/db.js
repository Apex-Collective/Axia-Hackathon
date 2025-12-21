require("dotenv").config();
const mongoose = require('mongoose');

module.exports = async () => {
    try{
        if(!process.env.MONGODB_URL) {
            throw new Error('MONGODB_URL is not defined in environment variables');
        }
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected.');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};