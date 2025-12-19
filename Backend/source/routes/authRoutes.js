const router = require("express").Router();
const {register, requestMagicLink, verifyMagicLink, login} = require("../controller/authController");

router.post('/register', register);
router.post('/request-magic-link', requestMagicLink);
router.get('/verify-magic-link', verifyMagicLink);
router.post('/login', login);

module.exports = router;