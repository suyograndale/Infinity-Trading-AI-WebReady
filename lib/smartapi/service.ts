import { smartAPI } from "./client";
import { smartLogin } from "./login";

export async function initializeSmartAPI() {

  const config = smartAPI.getConfig();

  const login = await smartLogin();

  console.log("SmartAPI Ready");

  return {

    config,

    login,

  };

}
