import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const URL = process.env.MONGO_URL;

const connectDB = async () => {
  await mongoose.connect(URL);
};

connectDB()
  .then(() => console.log("Connection Successfully..."))
  .catch(() => console.log("Connection Error..."));

export default connectDB;
