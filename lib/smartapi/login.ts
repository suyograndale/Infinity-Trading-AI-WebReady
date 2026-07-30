import { createLoginRequest } from "./request";
import { SmartLoginResponse } from "./types";
import { defaultAuth } from "./auth";

export async function smartLogin(): Promise<SmartLoginResponse> {

  console.log("Preparing SmartAPI Login...");

  defaultAuth.isLoggedIn = false;
const request = await createLoginRequest();

console.log(request);
  return {

    jwtToken: "",

    refreshToken: "",

    feedToken: "",

  };

}
