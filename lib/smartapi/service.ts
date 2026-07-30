import { SmartAPIEndpoints } from "./api";
import { smartAPI } from "./client";
import { smartLogin } from "./login";

export async function initializeSmartAPI() {

  const config = smartAPI.getConfig();

  const login = await smartLogin();
console.log(SmartAPIEndpoints.baseUrl);
  console.log("SmartAPI Ready");

  return {

    config,

    login,

  };

}
console.log("Authentication Layer Ready");
