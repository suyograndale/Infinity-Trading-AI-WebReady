export const SmartAPIConfig = {
  apiKey: process.env.NEXT_PUBLIC_SMARTAPI_API_KEY || "",
  clientCode: process.env.NEXT_PUBLIC_SMARTAPI_CLIENT_CODE || "",
  password: process.env.SMARTAPI_PASSWORD || "",
  totp: process.env.SMARTAPI_TOTP || "",
};
