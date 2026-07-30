import { smartAPI } from "./client";

export function initializeSmartAPI() {

  const config = smartAPI.getConfig();

  console.log("SmartAPI Ready");

  return config;

}
