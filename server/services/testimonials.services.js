const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database.js");

const db = phoneDB.collection("testimonials");

const actionAllTestimonials = async () => {
  const result = await db.find({}).toArray();
  return result;
};

const actionAddTestimonials = async (testimonialData) => {
  const result = await db.insertOne({
    ...testimonialData,
    createAt: new Date().toISOString(),
  });
  return result;
};

const actionUpdateTestimonials = async (updateTestimonialData) => {
  const { _id, ...rest } = updateTestimonialData;

  const filter = { _id: new ObjectId(String(_id)) };
  const updateDoc = {
    $set: {
      ...rest,
    },
  };
  const result = await db.updateOne(filter, updateDoc);
  return result;
};

const actionDeleteTestimonials = async (testimonialId) => {
  const result = await db.deleteOne({ _id: new ObjectId(String(testimonialId)) });
  return result;
};

module.exports = {
  actionAllTestimonials,
  actionAddTestimonials,
  actionUpdateTestimonials,
  actionDeleteTestimonials,
};
