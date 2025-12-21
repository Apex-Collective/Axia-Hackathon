const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json({message: 'Not authorized, no token'});
    try{
        req.user = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.userId = req.user.id;
        next();
    }catch(error){
        return res.status(401).json({message: 'Not authorized, token failed.'});
    }
};