import { SmartAPIConfig } from "./config";

export class SmartAPIClient {

  constructor() {

    console.log("SmartAPI Initialized");

  }

  getConfig() {

    return SmartAPIConfig;

  }

}

export const smartAPI = new SmartAPIClient();
