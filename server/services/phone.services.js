const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database");

const db = phoneDB.collection("phones");

exports.actionAllPhones = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionSinglePhone = async (phoneId) => {
  const query = { _id: new ObjectId(phoneId) };
  const result = await db.findOne(query);
  return result;
};

exports.actionAddPhone = async (phoneData) => {
  const result = await db.insertOne(phoneData);
  return result;
};

exports.actionUpdatePhone = async (updateData) => {
  const { _id, ...rest } = updateData;

  const filter = { _id: new ObjectId(_id) };
  const updateDoc = {
    $set: {
      ...rest,
    },
  };
  const result = await db.updateOne(filter, updateDoc);
  return result;
};

exports.actionDeletePhone = async (phoneId) => {
  const result = await db.deleteOne({ _id: new ObjectId(phoneId) });
  return result;
};
