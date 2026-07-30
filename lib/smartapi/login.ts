import { createLoginRequest } from "./request";
import { SmartLoginResponse } from "./types";
import { defaultAuth } from "./auth";
import { session } from "./session";
import { smartApiPost } from "./http";
export async function smartLogin(): Promise<SmartLoginResponse> {

  console.log("Preparing SmartAPI Login...");

  defaultAuth.isLoggedIn = false;
const request = createLoginRequest();

console.log(request);
  session.loggedIn = false;
  const response = await smartApiPost(request);

console.log(response);
  return {

    jwtToken: "",

    refreshToken: "",

    feedToken: "",

  };

}
