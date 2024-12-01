const mongoose = require('mongoose');

const mongoURL = 'mongodb+srv://heramb3112:heramb3112@cluster0.domgb.mongodb.net/gofoodmern?retryWrites=true&w=majority&appName=Cluster0';

const mongoDB = async () => {
  try {
    await mongoose.connect(mongoURL, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log("Mongoose connected successfully!heheh");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1); // Exit process with failure
  }
};

module.exports = mongoDB;
