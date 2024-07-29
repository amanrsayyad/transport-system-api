import truckModel from "../model/truckModel.js";

export const createTruck = async (req, res) => {
  try {
    const { vehicleNo, weight } = req.body;

    const Newtruck = new truckModel({
      vehicleNo,
      weight,
    });
    await Newtruck.save();

    res.status(200).json({
      success: true,
      message: "Truck Created Successfully.",
      Newtruck,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Interl server eror" });
  }
};

export const getTruck = async (req, res) => {
  try {
    const trucks = await truckModel.find();
    if (!trucks) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ trucks });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getTruckById = async (req, res) => {
  try {
    const id = req.params.id;
    const truckExist = await truckModel.findById(id);
    if (!truckExist) {
      return res.status(404).json({ message: "Truck not found." });
    }
    res.status(200).json({ truckExist });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateTruck = async (req, res) => {
  try {
    const truckId = req.params.id;

    const updatetruck = await truckModel.findByIdAndUpdate(truckId, req.body, {
      new: true,
    });
    if (!updatetruck) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Truck Updated Successfully",
      updatetruck,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteTruck = async (req, res) => {
  try {
    const truckId = req.params.id;
    const deleteTruck = await truckModel.findByIdAndDelete(truckId);
    if (!deleteTruck) {
      return res
        .status(404)
        .json({ success: false, message: "Record Not found" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
