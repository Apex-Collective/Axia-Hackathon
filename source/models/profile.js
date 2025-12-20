const mongoose = require('mongoose');

const profileSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true},
    passportPhoto: {type: String},
    about: {
        fullName: String,
        email: String,
        country: String,
        jobTitle: String,
        yearsOfExperience: Number,
        tools: [String],
        desiredSalary: String,
        availabilityHoursPerWeek: Number,
        bio: String
    },
    socialLinks:{
        website: String,
        LinkedIn: String,
        GitHub: String,
        Twitter: String,
        behance: String
    },
    workExperience: [{
        jobTitle: String,
        employmentType: {type: String, enum: ['full-time', 'Part-time', 'Contract', 'Internship', 'Jobshadowing', 'Freelance']},
        companyName: String,
        startDate: Date,
        endDate: Date,
        isCurrent: Boolean
    }],
    education: [{
        program: String,
        degree: String,
        schoolName: String,
        startDate: Date,
        endDate: Date
    }],
    skills: [String]
}, {timestamps: true});

module.exports = mongoose.model('Profile', profileSchema);