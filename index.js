import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import tireRoute from "./routes/tireRoutes.js";
import truckRoute from "./routes/truckRoutes.js";
import plateRoute from "./routes/plateRoutes.js";

const app = express();
app.use(bodyParser.json());
app.use(cors());
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

app.get("/", (req, res) => {
  res.send("Transport API Running");
});

app.use("/api", tireRoute);
app.use("/truck", truckRoute);
app.use("/clutch-plate", plateRoute);
