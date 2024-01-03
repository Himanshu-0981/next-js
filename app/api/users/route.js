import { NextResponse, NextRequest } from "next/server";
import { data } from "@/utils/data";

export async function GET(req) {
  // headers
  const requestHeaders = new Headers(req.Headers);

  // URI Query Params
  const requestQuery = new URL(req.url).searchParams;
  console.log(requestQuery);
  // To get the query parameters
  //   console.log(requestQuery.get("search"));

  // Cookies
  const cookie = requestHeaders.get("Cookie");
  //   console.log(cookie);

  return NextResponse.json({
    success: true,
    message: "success",
    data: data,
  });
}

export async function POST(req) {
  // Request body data
  const body = await req.json();
  // console.log(body)

  return NextResponse.json({
    success: true,
    message: "success",
  });
}
