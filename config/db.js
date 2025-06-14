
//databases connection

import mongoose from 'mongoose';

const connectDB = async() => {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/narendra_db');
        console.log("MongoDB connected successfully");
    }
    catch (error) {
        console.error("Error, MongoDB connection Failed...")
        process.exit(1);
    }

}

export default connectDB;