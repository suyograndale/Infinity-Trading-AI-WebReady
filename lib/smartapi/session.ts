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

export function saveSession(
  jwtToken: string,
  refreshToken: string,
  feedToken: string
) {
  session.jwtToken = jwtToken;
  session.refreshToken = refreshToken;
  session.feedToken = feedToken;
  session.loggedIn = true;
}

export function clearSession() {
  session.jwtToken = "";
  session.refreshToken = "";
  session.feedToken = "";
  session.loggedIn = false;
}
