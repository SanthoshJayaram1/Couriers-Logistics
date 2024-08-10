import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const url = process.env.DB_URI!;

mongoose.set("strictQuery", true);

const connectDB = async () => {
  try {
    // connection to mongoose
    await mongoose.connect(url, {
    //   useUnifiedTopology: true,
    //   useNewUrlParser: true,
    });
    console.log("Database connected successfully");
  } catch (error) {
    console.error("MongoDB connection failed:", error.message);
    process.exit(1);
  }
};
export default connectDB;

