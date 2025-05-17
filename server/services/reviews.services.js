const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database");

const db = phoneDB.collection("reviews");

exports.actionAllReviews = async () => {
  const result = await db.find({}).toArray();
  return result;
};

exports.actionSingleProductReviews = async (id) => {
  const query = { product_id: id };
  const result = await db.find(query).toArray();
  return result;
};

exports.actionAddReviews = async (reviewData) => {
  const result = await db.insertOne({
    ...reviewData,
    createAt: new Date().toISOString(),
  });
  return result;
};

exports.actionUpdateReviews = async (updateReviewData) => {
  const { _id, ...rest } = updateReviewData;

  const filter = { _id: new ObjectId(_id) };
  const updateDoc = {
    $set: {
      ...rest,
    },
  };
  const result = await db.updateOne(filter, updateDoc);
  return result;
};

exports.actionDeleteReviews = async (reviewId) => {
  const result = await db.deleteOne({ _id: new ObjectId(reviewId) });
  return result;
};
