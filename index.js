import express from "express";
import userRouter from "./routes/userRoutes.js";
import indexRouter from "./routes/indexRoute.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

const filePath = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "public"
);
app.use(express.static(filePath));

// DB Connection
connectDB();

// Routes
app.use("/", indexRouter);
app.use("/user", userRouter);

// Path
app.listen(3000, () => console.log("Listening on port http://localhost:3000"));
