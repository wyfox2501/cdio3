import mongoose from "mongoose";

const MONGO_URL = "mongodb://localhost:27017/healthcare";

const connectDB = async () => {
    try{
        mongoose.connect(MONGO_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connect fail " + error);
        process.exit(1);
    }
}

export default connectDB;