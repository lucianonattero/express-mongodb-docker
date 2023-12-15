const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const MONGODB_URL = process.env.MONGODB_URL || 'mongodb://mongo:27017/roommate_db';

const connectDB = async() => {
    try {
        const con = await mongoose.connect(MONGODB_URL);
        console.log(`mongodb connected: ${con.connection.host}`);
    } catch (error) {
        console.error(error);
    }
}


module.exports = connectDB;