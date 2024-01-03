import { NextResponse } from "next/server";
import { dbConnect } from "../../../utils/dbConnect";
import PostModel from "../../models/posts";

export async function GET(req) {
  try {
    await dbConnect();
    const data = await PostModel.find();
    console.log(data);
    return NextResponse.json({
      success: true,
      message: "success",
      status: 200,
      data,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "internal server error",
      status: 400,
    });
  }
}
