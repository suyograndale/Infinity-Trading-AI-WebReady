import { SmartLoginResponse } from "./types";

export async function smartLogin(): Promise<SmartLoginResponse> {

  return {

    jwtToken: "",

    refreshToken: "",

    feedToken: "",

  };

}
