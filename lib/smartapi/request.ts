import { SmartAPIConfig } from "./config";

export function createLoginRequest() {
  return {
    clientcode: SmartAPIConfig.clientCode,
    password: SmartAPIConfig.password,
    totp: SmartAPIConfig.totp,
  };
}
