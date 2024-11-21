import { NextResponse } from "next/server";

export async function GET(req: Request) {
  if (req.method === "GET") {
    // Handle GET request here
    return NextResponse.json({ app_version: "2.1.0" });
  } else {
    return NextResponse.error();
  }
}
