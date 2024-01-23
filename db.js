const { MongoClient } = require("mongodb");

const db = {};

const connectToDb = async () => {
  try {
    const client = new MongoClient(process.env.MONGODB_URI || "mongodb://0.0.0.0:27017");
    await client.connect();
    console.log("Connected to MongoDB");

    const database = client.db("test2");
    db.inventories = database.collection("inventories");
    db.orders = database.collection("orders");
    db.users = database.collection("users");
  } catch (error) {
    console.error("Could not connect to DB", error);
    process.exit(1);
  }
};

const getAllProducts = async (lowStock = false) => {
  try {
    let query = {};
    if (lowStock) {
      query = { instock: { $lt: 100 } };
    }

    return await db.inventories.find(query).toArray();
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  }
};

module.exports = { connectToDb, db, getAllProducts };