console.log('PROFILE ROUTES REGISTERED');
const router = require("express").Router();
const { getMyProfile, uploadPassport, completeProfile } = require('../controller/profileController');
const {protect} = require('../middleware/authMiddleware');
const upload = require('../utils/upload');

router.get('/me', protect, getMyProfile);
router.post('/upload-passport', protect, upload.single('image'), uploadPassport);
router.post('/complete-profile', protect, completeProfile);

console.log('PROFILE ROUTES LOADED');

module.exports = router;