const bcrypt = require("bcrypt");
const { phoneDB } = require("../config/database");

const db = phoneDB.collection("users");

exports.actionAllUsers = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionSingleUser = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionRegister = async (userData) => {
  const { name, email, password } = userData;
  let result = await db.findOne({ email });
  console.log(result);

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

exports.actionLogin = async (userData) => {
  const { email, password } = userData;
  const user = await db.findOne({ email });
  const isMatch = await bcrypt.compare(password, user.password);

  return { user, isMatch };
};
