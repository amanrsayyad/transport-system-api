import express from "express";
import {
  createTruck,
  getTruck,
  getTruckById,
  updateTruck,
  deleteTruck,
} from "../controller/truckController.js";

const truckRoute = express.Router();

truckRoute.post("/create-truck", createTruck);

truckRoute.get("/get-truck", getTruck);

truckRoute.get("/get-truck-id/:id", getTruckById);

truckRoute.put("/update-truck/user/:id", updateTruck);

truckRoute.delete("/delete-truck/:id", deleteTruck);

export default truckRoute;
