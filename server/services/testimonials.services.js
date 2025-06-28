const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database");

const db = phoneDB.collection("testimonials");

exports.actionAllTestimonials = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionAddTestimonials = async (testimonialData) => {
  const result = await db.insertOne({
    ...testimonialData,
    createAt: new Date().toISOString(),
  });
  return result;
};

exports.actionUpdateTestimonials = async (updateTestimonialData) => {
  const { _id, ...rest } = updateTestimonialData;

  const filter = { _id: new ObjectId(_id) };
  const updateDoc = {
    $set: {
      ...rest,
    },
  };
  const result = await db.updateOne(filter, updateDoc);
  return result;
};

exports.actionDeleteTestimonials = async (testimonialId) => {
  const result = await db.deleteOne({ _id: new ObjectId(testimonialId) });
  return result;
};
