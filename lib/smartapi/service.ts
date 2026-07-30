import { SmartAPIEndpoints } from "./api";
import { smartAPI } from "./client";
import { smartLogin } from "./login";
import { session } from "./session";


export async function initializeSmartAPI() {

  const config = smartAPI.getConfig();

  const login = await smartLogin();
console.log(SmartAPIEndpoints.baseUrl);
  console.log("SmartAPI Ready");
console.log("Logged In :", session.loggedIn);
  console.log("Authentication Layer Ready");
  return {

    config,

    login,

  };

}

