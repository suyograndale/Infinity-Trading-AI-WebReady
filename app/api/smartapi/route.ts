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
         "X-ClientLocalIP":
    process.env.CLIENT_LOCAL_IP || "",

        "X-ClientPublicIP":
          "X-ClientPublicIP":
  process.env.CLIENT_PUBLIC_IP || "",

        "X-MACAddress":
         "X-MACAddress":
  process.env.MAC_ADDRESS || "",

        "X-PrivateKey":
        "X-PrivateKey":
  process.env.SMARTAPI_API_KEY || "",
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
