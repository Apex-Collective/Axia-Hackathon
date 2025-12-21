const crypto = require('crypto');
const mailer = require('../config/mail');

module.exports = async function sendMagicLink(user){
    const token = crypto.randomBytes(32).toString('hex');
    const hashed = crypto.createHash('sha256').update(token).digest('hex');

    user.magicLinkToken = hashed;
    user.magicLinkTokenExpires = Date.now() + 15 * 60 * 1000;
    await user.save();

    console.log('=========== MAGIC LINK DEBUG ===========');
    console.log('RAW TOKEN (TO BE USED FOR VERIFICATION:', token);
    console.log('HASHED TOKEN (DB STORAGE):', hashed);
    console.log('EXPIRES AT:', new Date(user.magicLinkTokenExpires));
    console.log('=================================');

    const magicLink = `${process.env.FRONTEND_URL}/verify?token=${token}&email=${user.email}`;
    await mailer.sendMail({
        from: `"Apex Collective" <${process.env.EMAIL}>`,
        to: user.email,
        subject: 'Apex Collective Magic Link',
        html: `<p>Click to verify your profile:</p><a href="${magicLink}">Login</a>`
    });
};