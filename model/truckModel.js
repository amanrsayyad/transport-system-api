import mongoose from "mongoose";

const truckSchema = new mongoose.Schema({
  vehicleNo: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Trucks", truckSchema);
