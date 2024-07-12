import mongoose from "mongoose";

const tireSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  tireName: {
    type: String,
    required: true,
  },
  purchaseShop: {
    type: String,
    required: true,
  },
  tireRate: {
    type: String,
    required: true,
  },
  intialKm: {
    type: String,
    required: true,
  },
  liveKm: {
    type: String,
    required: true,
  },
  finalKm: {
    type: String,
    required: true,
  },
  mileage: {
    type: String,
    required: true,
  },
  tireNo: {
    type: String,
    required: true,
  },
  sellRemoved: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    default: "Tire Maintenance",
  },
});

export default mongoose.model("Tires", tireSchema);
