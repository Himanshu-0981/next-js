import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    const connection = await mongoose.connect(process.env.DATABASE_URI);
    if (connection) return console.log("connected successfully");
    return console.log("something went wrong in db");
  } catch (error) {
    console.log(error.message);
  }
};
