const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    country: {type: String, required: true},
    role: {type: String, required: true},
    skills: {type: [String], required: true},
    yearsOfExperience: {type: Number, required: true},
    tools: {type: [String], required: true},
    introduction: {type: String, default: '', required: true},
    isVerified: {type: Boolean, default: false},
    magicLinkToken: {type: String, default: ''},
    magicLinkTokenExpires: {type: Date}
}, {timestamps: true});

module.exports = mongoose.model('User', userSchema);