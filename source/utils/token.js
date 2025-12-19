const jwt = require('jsonwebtoken');

exports.generateToken = (user) => 
    jwt.sign({id: user._id},
        process.env.ACCESS_TOKEN,
        {expiresIn: '15m'});