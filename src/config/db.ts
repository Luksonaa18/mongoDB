import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://lukazhozhadze53:MrHjrV3uFUYyz3wI@cluster0.aztmki5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Error connecting", error);
    process.exit(1);
  }
};
