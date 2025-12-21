const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(cookieParser());

const allowedOrigins = [
    "https://axia-hackathon.vercel.app", //current frontend URL
    "https://axia-hackathon-mf2j.vercel.app" //other URL 
];

app.use(cors({
    origin: function (origin, callback) {
        if(!origin) return callback(null, true); //allows REST tools like Postman
        if(allowedOrigins.includes(origin)) {
            callback(null, true);
        }else{
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true //for sening cookies
}));

app.use('/api', router);

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Axia Hackathon API is running",
        status: "success",
        timestamp: Date.now()
    });
});

module.exports = app;