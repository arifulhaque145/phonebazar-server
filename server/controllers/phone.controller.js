const {
  actionAllPhones,
  actionSinglePhone,
  actionAddPhone,
  actionUpdatePhone,
  actionDeletePhone,
} = require("../services/phone.services");

exports.allPhones = async (req, res) => {
  try {
    const phones = await actionAllPhones();
    res
      .status(201)
      .json({ data: phones, message: "Phone registered successfully." });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.singlePhone = async (req, res) => {
  try {
    const id = req.params.id;
    const phone = await actionSinglePhone(id);

    res.status(201).json({
      data: phone,
      message: "Single phone data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.addPhone = async (req, res) => {
  try {
    const phoneData = req.body;
    const phone = await actionAddPhone(phoneData);

    res.status(201).json({
      data: phone,
      message: "Single phone data fetched successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.updatePhone = async (req, res) => {
  try {
    const phoneData = req.body;
    const phone = await actionUpdatePhone(phoneData);

    res.status(201).json({
      data: phone,
      message: "Single phone data updated successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deletePhone = async (req, res) => {
  try {
    const phoneId = req.params.id;
    const phone = await actionDeletePhone(phoneId);

    res.status(201).json({
      data: phone,
      message: "Single phone data deleted successfully.",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
