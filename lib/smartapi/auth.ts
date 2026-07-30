export interface SmartAuth {

  jwtToken: string;

  refreshToken: string;

  feedToken: string;

  isLoggedIn: boolean;

}

export const defaultAuth: SmartAuth = {

  jwtToken: "",

  refreshToken: "",

  feedToken: "",

  isLoggedIn: false,

};
