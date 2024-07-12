import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import tireRoute from "./routes/tireRoutes.js";

const app = express();
app.use(bodyParser.json());
dotenv.config();

const PORT = process.env.PORT || 7000;
const MONGOURL = process.env.MONGO_URL;

mongoose
  .connect(MONGOURL)
  .then(() => {
    console.log("DB connected");
    app.listen(PORT, () => {
      console.log(`Server Started : ${PORT}`);
    });
  })
  .catch((error) => console.log(error));

app.use("/api", tireRoute);
