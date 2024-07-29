import plateModel from "../model/plateModel.js";

export const createPlate = async (req, res) => {
  try {
    const { date, vehicleNo, company, mechanic, intialKm, liveKm, finalKm } =
      req.body;

    const NewClutchPlate = new plateModel({
      date,
      vehicleNo,
      company,
      mechanic,
      intialKm,
      liveKm,
      finalKm,
    });
    await NewClutchPlate.save();

    res.status(200).json({
      success: true,
      message: "Clutch Plate Created Successfully.",
      NewClutchPlate,
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Interl server eror" });
  }
};

export const getClutchPlate = async (req, res) => {
  try {
    const plates = await plateModel.find();
    if (!plates) {
      return res.status(404).json({ success: false });
    }
    res.status(200).json({ plates });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const getPlateById = async (req, res) => {
  try {
    const id = req.params.id;
    const plateExist = await plateModel.findById(id);
    if (!plateExist) {
      return res.status(404).json({ message: "Clutch Data not found." });
    }
    res.status(200).json({ plateExist });
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updatePlate = async (req, res) => {
  try {
    const plateId = req.params.id;

    const updatePlate = await plateModel.findByIdAndUpdate(plateId, req.body, {
      new: true,
    });
    if (!updatePlate) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    res.status(200).json({
      success: true,
      message: "Clutch Plate Updated Successfully",
      updatePlate,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const deletePlate = async (req, res) => {
  try {
    const plateId = req.params.id;
    const deleteplate = await plateModel.findByIdAndDelete(plateId);
    if (!deleteplate) {
      return res
        .status(404)
        .json({ success: false, message: "Record Not found" });
    }
    res
      .status(200)
      .json({ success: true, message: "Deleted Record Successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
