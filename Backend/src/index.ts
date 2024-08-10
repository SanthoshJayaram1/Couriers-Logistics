import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import connectDatabase from "./config/database";
import errorMiddleware from "./middleware/error";
import cors from 'cors'; 

const app = express();
dotenv.config();

app.use(cookieParser());
app.use(
    cors({
      origin: 'http://localhost:3000',
      credentials: true,
      methods: ['GET','HEAD','PUT','PATCH','POST','DELETE'],
      allowedHeaders:["Content-Type","jwt-token","Access-Control-Allow-Credentials"]
    })
  );
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connecting to database
connectDatabase();


app.use("/", (req, res) => {
    res.send("App is running.");
});

// Middleware to handle error
app.use(errorMiddleware);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
});
