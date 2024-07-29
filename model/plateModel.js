import mongoose from "mongoose";

const plateSchema = new mongoose.Schema({
  date: {
    type: String,
    required: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  mechanic: {
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
});

export default mongoose.model("Plate", plateSchema);
