import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  const body = await req.json();

  const response = await fetch(
    "https://apiconnect.angelone.in/rest/auth/angelbroking/user/v1/loginByPassword",
    {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",

        "X-UserType": "USER",
        "X-SourceID": "WEB",

        "X-ClientLocalIP":
          process.env.NEXT_PUBLIC_CLIENT_LOCAL_IP || "",

        "X-ClientPublicIP":
          process.env.NEXT_PUBLIC_CLIENT_PUBLIC_IP || "",

        "X-MACAddress":
          process.env.NEXT_PUBLIC_MAC_ADDRESS || "",

        "X-PrivateKey":
          process.env.NEXT_PUBLIC_SMARTAPI_API_KEY || "",
      },

      body: JSON.stringify(body),
    }
  );

  const data = await response.json();

  return NextResponse.json(data);
}
