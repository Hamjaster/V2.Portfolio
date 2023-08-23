const mongoose = require('mongoose')
require('dotenv').config();
const MongDB = process.env.MongoDB;

const connectDB = async () => {
    console.log('connecting to DB...');
    try {
        const connection = await mongoose.connect(MongDB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('MongoDB connected', connection.connection.host);

    } catch (error) {
        console.log('Not connected to MongDB', error);
    }
}

module.exports = connectDB;