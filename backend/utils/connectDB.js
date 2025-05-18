import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://tefradc:ytRsSPxvAlFxRu6t@lamacluster.w1vzl8m.mongodb.net/lamapin?retryWrites=true&w=majority&appName=LamaCluster"
    );
    //console.log("MongoDB is connected");
  } catch (error) {
    console.log("MONGODB CONNECTION ERROR", error);
  }
};

export default connectDB;
