const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URI;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const phoneDB = client.db(`${process.env.DB_NAME}`);

const connectDB = async () => {
  try {
    await client.connect();
    console.log("Database Connected Successfully...");
  } catch (error) {
    console.error("Failed to connect MongoDB:", error);
    process.exit(1);
  }
};

module.exports = { connectDB, phoneDB };
