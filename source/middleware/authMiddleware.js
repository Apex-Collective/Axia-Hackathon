const jwt = require('jsonwebtoken');

exports.protect = (req, res, next) => {
    const token = req.cookies?.accessToken || req.headers.authorization?.split(' ')[1];
    if(!token) return res.status(401).json({message: 'Not authorized, no token'});
    try{
        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        req.userId = decoded.id;
        next();
    }catch(error){
        return res.status(401).json({message: 'Not authorized, token failed.'});
    }
};