console.log('APP.JS LOADED 🚀');
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: process.env.FRONTEND_URL,
    credentials: true
}));

app.use('/api', router);
console.log('API ROUTES LOADED');

app.get('/', (req, res) => {
    res.status(200).json({
        message: "Axia Hackathon API is running",
        status: "success",
        timestamp: Date.now()
    });
});

module.exports = app;