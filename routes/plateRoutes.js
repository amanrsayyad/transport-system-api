import express from "express";
import {
  createPlate,
  getClutchPlate,
  getPlateById,
  updatePlate,
  deletePlate,
} from "../controller/plateController.js";

const plateRoute = express.Router();

plateRoute.post("/create-clutch-plate", createPlate);

plateRoute.get("/get-clutch-plate", getClutchPlate);

plateRoute.get("/get-clutch-plate-id/:id", getPlateById);

plateRoute.put("/update-clutch-plate/:id", updatePlate);

plateRoute.delete("/delete-clutch-plate/:id", deletePlate);

export default plateRoute;
