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
          process.env.SMARTAPI_API_KEY "",

        "X-ClientPublicIP":
          process.env.CLIENT_PUBLIC_IP "",

        "X-MACAddress":
          process.env.CLIENT_LOCAL_IP || "",

        "X-PrivateKey":
          process.env.MAC_ADDRESS || "",
      },

      body: JSON.stringify(body),
    }
  );

  if (!response.ok) {
  return NextResponse.json(
    {
      status: false,
      message: "SmartAPI Request Failed",
    },
    {
      status: response.status,
    }
  );
}
const data = await response.json();
  return NextResponse.json(data);
}
