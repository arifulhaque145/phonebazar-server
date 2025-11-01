const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database.js");

const db = phoneDB.collection("users");

exports.actionAllUsers = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionSingleUser = async (id) => {
  const query = { _id: ObjectId.createFromHexString(id) };
  const result = await db.findOne(query);
  return result;
};

exports.actionRegister = async (userData) => {
  const { name, email, password } = userData;
  let result = await db.findOne({ email });

  if (result !== null) return null;

  const hashedPassword = await bcrypt.hash(password, 10);
  result = await db.insertOne({
    name,
    email,
    password: hashedPassword,
    role: "user",
  });

  return result;
};

exports.actionAddSingleUser = async (userData) => {
  // Check if user already exists
  const existingUser = await db.findOne({ email: userData?.email });
  if (existingUser) return null;

  // Hash password if provided
  const hashedPassword = userData?.password
    ? await bcrypt.hash(userData.password, 10)
    : null;

  // Insert new user
  const result = await db.insertOne({ ...userData, password: hashedPassword });
  return result;
};

exports.actionUpdateUser = async ({ userEmailId, userData }) => {
  const filter = { email: userEmailId };
  const updatedData = { $set: userData };
  const result = await db.updateOne(filter, updatedData);
  return result;
};

exports.actionDeleteUser = async (userEmail) => {
  const result = await db.deleteOne({ email: userEmail });
  return result;
};
