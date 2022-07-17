const mongoose = require("mongoose");

// const { MONGO_URI } = process.env;

const connectToDatabase = () => {
  const params = {
    useNewUrlParser: true,
    useUnifiedtopology: true,
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
