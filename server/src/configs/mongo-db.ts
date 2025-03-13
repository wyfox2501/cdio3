import mongoose from "mongoose";
require('dotenv').config();

const MONGO_URL = process.env.MONGO_URL;

const connectDB = async () => {
    try{
        if (!MONGO_URL) {
            console.error("MongoDB connection string not found");
            process.exit(1);
        }
        mongoose.connect(MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connect fail " + error);
        process.exit(1);
    }
}

export default connectDB;