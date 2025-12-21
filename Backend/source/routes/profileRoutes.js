const router = require("express").Router();
const { getMyProfile, uploadPassport, completeProfile } = require('../controller/profileController');
const {protect} = require('../middleware/authMiddleware');
const multer = require('multer');
const upload = multer({storage: multer.memoryStorage()});

router.get('/me', protect, getMyProfile);
router.post('/upload-passport', protect, upload.single('image'), uploadPassport);
router.post('/complete-profile', protect, completeProfile);

module.exports = router;