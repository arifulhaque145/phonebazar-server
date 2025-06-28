const bcrypt = require("bcrypt");
const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database");

const db = phoneDB.collection("users");

exports.actionAllUsers = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionSingleUser = async (id) => {
  const query = { _id: new ObjectId(id) };
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
  let result = await db.findOne({ email: userData?.email });

  let hashed;
  if (result !== null) return userData;
  if (userData?.password) {
    const saltRounds = 10;
    hashed = await bcrypt.hash(userData?.password, saltRounds);
  } else {
    hashed = null;
  }

  result = await db.insertOne({ ...userData, password: hashed });
  return userData;
};

exports.actionUpdateUser = async ({ userId, userData }) => {
  const filter = { _id: new ObjectId(userId) };
  const updatedData = { $set: userData };
  const result = await db.updateOne(filter, updatedData);
  return result;
};

exports.actionDeleteUser = async (id) => {
  const result = await db.deleteOne({ _id: new ObjectId(id) });
  return result;
};
