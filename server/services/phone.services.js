const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database.js");

const db = phoneDB.collection("phones");

const actionAllPhones = async () => {
  const result = await db.find({}).toArray();
  return result;
};

const actionSinglePhone = async (phoneId) => {
  const query = { _id: new ObjectId(String(phoneId)) };
  const result = await db.findOne(query);
  return result;
};

const actionAddPhone = async (phoneData) => {
  const result = await db.insertOne(phoneData);
  return result;
};

const actionUpdatePhone = async (updateData) => {
  const { _id, ...rest } = updateData;

  const filter = { _id: new ObjectId(String(_id)) };
  const updateDoc = {
    $set: {
      ...rest,
    },
  };
  const result = await db.updateOne(filter, updateDoc);
  return result;
};

const actionDeletePhone = async (phoneId) => {
  const result = await db.deleteOne({ _id: new ObjectId(String(phoneId)) });
  return result;
};

module.exports = {
  actionAllPhones,
  actionSinglePhone,
  actionAddPhone,
  actionUpdatePhone,
  actionDeletePhone,
};
