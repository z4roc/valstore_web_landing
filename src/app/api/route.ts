import { NextApiResponse, NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  if (req.method === "GET") {
    // Handle GET request here
    return NextResponse.json({ app_version: "2.0.6" });
  } else {
    return NextResponse.error();
  }
}
