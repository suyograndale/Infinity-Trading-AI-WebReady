import { createLoginRequest } from "./request";
import { SmartLoginResponse } from "./types";
import { defaultAuth } from "./auth";
import { clearSession } from "./session";
import { smartApiPost } from "./http";

export async function smartLogin(): Promise<SmartLoginResponse> {

  console.log("Preparing SmartAPI Login...");

  defaultAuth.isLoggedIn = false;

  clearSession();

  const request = createLoginRequest();

  console.log(request);

  const response = await smartApiPost(request);

  console.log(response);

  return {
    jwtToken: "",
    refreshToken: "",
    feedToken: "",
  };
}
