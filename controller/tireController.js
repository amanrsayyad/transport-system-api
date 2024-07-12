import tireModel from "../model/tireModel.js";

// POST TIRE DATA
export const createTire = async (req, res) => {
  try {
    const {
      date,
      vehicleNo,
      tireName,
      purchaseShop,
      tireRate,
      intialKm,
      liveKm,
      finalKm,
      mileage,
      tireNo,
      sellRemoved,
      category,
    } = req.body;

    const Newtire = new tireModel({
      date,
      vehicleNo,
      tireName,
      purchaseShop,
      tireRate,
      intialKm,
      liveKm,
      finalKm,
      mileage,
      tireNo,
      sellRemoved,
      category,
    });
    await Newtire.save();

    res.status(200).json({
      success: true,
      message: "Tire Maintenance Created Successfully.",
      Newtire,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Interl server eror" });
  }
};

// GET TIRE DATA
export const getTire = async (req, res) => {
  try {
    const tires = await tireModel.find();
    if (!tires) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ tires });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getTireById = async (req, res) => {
  try {
    const id = req.params.id;
    const tireIdExist = await tireModel.findById(id);
    if (!tireIdExist) {
      return res.status(404).json({ message: "Tire id not found" });
    }
    res.status(200).json({ tireIdExist });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

// UPDATE TIRE API
export const updateTire = async (req, res) => {
  try {
    const tireId = req.params.id;

    const updatetire = await tireModel.findByIdAndUpdate(tireId, req.body, {
      new: true,
    });
    if (!updatetire) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Tire Maintenance Updated Successfully",
      updatetire,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deleteTire = async (req, res) => {
  try {
    const tireId = req.params.id;
    const delettire = await tireModel.findByIdAndDelete(tireId);
    if (!delettire) {
      return res
        .status(404)
        .json({ success: false, message: "user Not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "user Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
