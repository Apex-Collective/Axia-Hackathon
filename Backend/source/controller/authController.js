const crypto = require('crypto');
const User = require('../models/user');
const {generateToken} = require('../utils/token');
const sendMagicLink = require('../utils/sendMagicLink');
const Profile = require('../models/profile');

exports.register = async (req, res) => {
    const {name, email, country, role, skills, yearsOfExperience, tools, introduction} = req.body;
    try{
        const existingUser = await User.findOne({email});
        if(existingUser){
            return res.status(400).json({message: 'User already exists with this email.'});
        }
        
        await User.create({
            name,
            email,
            country,
            role,
            skills,
            yearsOfExperience,
            tools,
            introduction
        });
        res.status(201).json({message: 'Almost there, please click on the magic link to verify your profile.'});
    }catch(error){
        return res.status(500).json({message: 'Server error', error: error.message});
    }
};

exports.requestMagicLink = async (req, res) => {
    const {email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            return res.status(404).json({message: 'User not found.'});
        }

        await sendMagicLink(user);

        res.status(200).json({message: 'Magic link sent to your email.'});
    }catch(error){
        return res.status(500).json({message: 'Server error', error: error.message});
    }
};

exports.verifyMagicLink = async (req, res) => {
    const {token, email} = req.query;
    if(!token || !email){
        return  res.status(400).json({message: 'Invalid request'});
    }
    const hashed = crypto.createHash('sha256').update(token).digest('hex');
    try{
        const user = await User.findOne({
            email,
            magicLinkToken: hashed,
            magicLinkTokenExpires: {$gt: Date.now()}
        });

        if (!user) {
            return res.status(401).json({message: 'Invalid or expired magic link.'});
        }
        user.isVerified = true;
        user.magicLinkToken = null;
        user.magicLinkTokenExpires = null;

        const accessToken = generateToken(user._id);
        await user.save();

        await Profile.findOneAndUpdate(
            {user: user._id},
            {user: user._id, isVerified: true},
            {upsert: true, new: true, setDefaultsOnInsert: true}
        );
     
        // Fixed: Cookie settings for Cross-Site (Vercel <-> Render)
        res.cookie('accessToken', accessToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'none', 
            maxAge: 15 * 60 * 1000 //15 minutes
        });

        res.status(200).json({message: 'Profile verified successfully.'});
    }
    catch(error){
        return res.status(500).json({message: 'Server error', error: error.message});
    }
};

exports.login = async (req, res) => {
    const {email} = req.body;
    // FIX: Added 'return' to stop execution if email is missing
    if(!email) return res.status(400).json({message: 'Email is required.'});
    
    try{
        const user = await User.findOne({email});
        
        // FIX: Added 'return' to stop execution if user is not found
        if(!user) return res.status(404).json({message: 'User not found.'});

        // FIX: Added 'return' to stop execution if profile is not verified
        if(!user.isVerified) return res.status(401).json({message: 'Profile not verified.'});

        await sendMagicLink(user);

        res.status(200).json({message: 'Login, magic link sent to your email.'});
    }catch(error){
        console.error("Login Error:", error); // Added logging to help debugging
        res.status(500).json({message: 'Server error', error: error.message})
    }
};