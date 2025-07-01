const { ObjectId } = require("mongodb");
const { phoneDB } = require("../config/database.js");

const db = phoneDB.collection("reviews");

const actionAllReviews = async () => {
  const result = await db.find({}).toArray();
  return result;
};

const actionSingleProductReviews = async (id) => {
  const query = { product_id: id };
  const result = await db.find(query).toArray();
  return result;
};

const actionAddReviews = async (reviewData) => {
  const result = await db.insertOne({
    ...reviewData,
    createAt: new Date().toISOString(),
  });
  return result;
};

const actionUpdateReviews = async (updateReviewData) => {
  const { _id, ...rest } = updateReviewData;

  const filter = { _id: new ObjectId(String(_id)) };
  const updateDoc = {
    $set: {
      ...rest,
    },
  };
  const result = await db.updateOne(filter, updateDoc);
  return result;
};

const actionDeleteReviews = async (reviewId) => {
  const result = await db.deleteOne({ _id: new ObjectId(String(reviewId)) });
  return result;
};

module.exports = {
  actionAllReviews,
  actionSingleProductReviews,
  actionAddReviews,
  actionUpdateReviews,
  actionDeleteReviews,
};
