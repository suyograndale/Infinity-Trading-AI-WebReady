import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  try {

    const body = await req.json();

    return NextResponse.json({
      success: true,
      message: "SmartAPI Route Working",
      request: body,
    });

  } catch {

    return NextResponse.json(
      {
        success: false,
        message: "Invalid Request",
      },
      {
        status: 400,
      }
    );

  }

}
