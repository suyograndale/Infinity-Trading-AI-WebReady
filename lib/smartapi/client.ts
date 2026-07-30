import { SmartAPIConfig } from "./config";

export class SmartAPIClient {

  constructor() {

    console.log("SmartAPI Initialized");

  }

  getConfig() {

    return SmartAPIConfig;

  }

  async login() {

    return true;

  }

}

export const smartAPI = new SmartAPIClient();
