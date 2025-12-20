require('dotenv').config();
const connectDB = require('./source/config/db');
const app = require('./source/app');

const port = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}).catch((error) => {
    console.error('Failed to connect to the database:', error);
    process.exit(1);
});

console.log('ENV CHECK:', process.env.MONGODB_URL);
