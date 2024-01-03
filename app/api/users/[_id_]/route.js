import { NextResponse } from "next/server";

export const GET = async (req, context) => {
  // to get dynamic params
  const params = context.params._id_;

  return NextResponse.json({
    message: "success",
    success: true,
  });
};
