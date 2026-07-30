import { createLoginRequest } from "./request";
import { SmartLoginResponse } from "./types";
import { defaultAuth } from "./auth";
import { session } from "./session";
export async function smartLogin(): Promise<SmartLoginResponse> {

  console.log("Preparing SmartAPI Login...");

  defaultAuth.isLoggedIn = false;
const request = createLoginRequest();

console.log(request);
  session.loggedIn = false;
  return {

    jwtToken: "",

    refreshToken: "",

    feedToken: "",

  };

}
