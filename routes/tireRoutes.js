import express from "express";
import {
  createTire,
  getTire,
  updateTire,
  getTireById,
  deleteTire,
} from "../controller/tireController.js";

const tireRoute = express.Router();

tireRoute.post("/create-tire-maintenance", createTire);

tireRoute.get("/get-tire-maintenance", getTire);

tireRoute.get("/get-tire-id/:id", getTireById);

tireRoute.put("/update-tire/user/:id", updateTire);

tireRoute.delete("/delete-tire/:id", deleteTire);

export default tireRoute;
