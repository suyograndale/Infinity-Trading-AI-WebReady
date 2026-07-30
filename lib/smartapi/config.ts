export const SmartAPIConfig = {

  apiKey: process.env.NEXT_PUBLIC_SMARTAPI_API_KEY || "",

  clientCode: process.env.NEXT_PUBLIC_SMARTAPI_CLIENT_CODE || "",

  totpSecret: process.env.SMARTAPI_TOTP_SECRET || "",

};
