import { SmartAPIConfig } from "./config";

export async function createLoginRequest() {

  return {
    apiKey: SmartAPIConfig.apiKey,
    clientCode: SmartAPIConfig.clientCode,
  };

}
