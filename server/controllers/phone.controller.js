const {
  actionAllPhones,
  actionSinglePhone,
  actionAddPhone,
  actionUpdatePhone,
  actionDeletePhone,
} = require("../services/phone.services.js");

const allPhones = async (_req, res) => {
  try {
    const phones = await actionAllPhones();
    if (!phones || phones.length === 0) {
      return res.status(404).json({ message: "No phones found." });
    }

    res
      .status(201)
      .json({ data: phones, message: "Phones are found successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const singlePhone = async (_req, res) => {
  try {
    const id = _req.params.id;
    const phone = await actionSinglePhone(id);

    res.status(201).json({
      data: phone,
      message: "Single phone data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addPhone = async (_req, res) => {
  try {
    const phoneData = _req.body;
    const phone = await actionAddPhone(phoneData);

    res.status(201).json({
      data: phone,
      message: "Single phone data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updatePhone = async (_req, res) => {
  try {
    const phoneData = _req.body;
    const phone = await actionUpdatePhone(phoneData);

    res.status(201).json({
      data: phone,
      message: "Single phone data updated successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deletePhone = async (_req, res) => {
  try {
    const phoneId = _req.params.id;
    const phone = await actionDeletePhone(phoneId);

    res.status(201).json({
      data: phone,
      message: "Single phone data deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  allPhones,
  singlePhone,
  addPhone,
  updatePhone,
  deletePhone,
};
