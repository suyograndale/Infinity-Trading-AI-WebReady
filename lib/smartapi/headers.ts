import { SmartAPIConfig } from "./config";

export function getHeaders() {

  return {

    "Content-Type": "application/json",

    Accept: "application/json",

    "X-UserType": "USER",

    "X-SourceID": "WEB",

    "X-ClientLocalIP": SmartAPIConfig.localIp,

    "X-ClientPublicIP": SmartAPIConfig.ipAddress,

    "X-MACAddress": SmartAPIConfig.macAddress,

    "X-PrivateKey": SmartAPIConfig.apiKey,

  };

}
