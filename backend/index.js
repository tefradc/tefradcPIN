import express from "express";
import cors from "cors";
import userRouter from "./routes/user.route.js";
import pinRouter from "./routes/pin.route.js";
import commentRouter from "./routes/comment.route.js";
import boardRouter from "./routes/board.route.js";
import connectDB from "./utils/connectDB.js";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import fs from "fs";

const app = express();
app.use(cors({ origin: "http://localhost:5173" }));

app.use(express.json());

app.use("/users", userRouter);
app.use("/pins", pinRouter);
app.use("/comment", commentRouter);
app.use("/boards", boardRouter);

app.listen(3000, () => {
  console.log("Server is running");
  connectDB();
});
