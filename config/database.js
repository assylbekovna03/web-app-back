const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// const { MONGO_URI } = process.env;
// const createIndex = async () => {
//   try {
//     const url = "paste your db url";
//     const client = new MongoClient(url);
//     const dbName = "nfactorial_project";
//     await client.connect();
//     const db = client.db("nfactorial_project");
//     await db
//       .collection("nfactorial_project")
//       .createIndex({ email: 1 }, { unique: true });

//     process.exit(1);
//   } catch (err) {
//     console.log(err.stack);
//   }
// };
// createIndex();
const connectToDatabase = () => {
  const params = {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  };
  try {
    mongoose.connect(
      "mongodb+srv://aruzhan:2R!aq3TvghvhdCd@cluster0.gvlkzog.mongodb.net/?retryWrites=true&w=majority",
      params
    );

    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectToDatabase;
