import mongoose from "mongoose";


console.log('MONGODB_URI:', process.env.MONGODB_URI); 
const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("Database Connected");
  } catch (error) {
    console.log("DB Error: " + error);
  }
};

export default dbConnection;
