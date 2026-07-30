export interface SmartSession {

  jwtToken: string;

  refreshToken: string;

  feedToken: string;

  loggedIn: boolean;

}

export const session: SmartSession = {

  jwtToken: "",

  refreshToken: "",

  feedToken: "",

  loggedIn: false,

};
