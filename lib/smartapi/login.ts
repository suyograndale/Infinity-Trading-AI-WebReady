import { saveSession, clearSession } from "./session";
import { createLoginRequest } from "./request";
import { SmartLoginResponse } from "./types";
import { defaultAuth } from "./auth";
import { smartApiPost } from "./http";

export async function smartLogin(): Promise<SmartLoginResponse> {

  console.log("Preparing SmartAPI Login...");

  defaultAuth.isLoggedIn = false;

  clearSession();

  const request = createLoginRequest();

  console.log(request);

  const response = await smartApiPost(request);

  console.log(response);

  if (!response.status) {
    throw new Error(response.message || "SmartAPI Login Failed");
  }

  saveSession(
    response.data.jwtToken,
    response.data.refreshToken,
    response.data.feedToken
  );

  return {
    jwtToken: response.data.jwtToken,
    refreshToken: response.data.refreshToken,
    feedToken: response.data.feedToken,
  };
}
