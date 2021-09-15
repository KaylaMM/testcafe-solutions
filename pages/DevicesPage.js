import { Selector } from "testcafe";

const axios = require("axios");

export async function getDevices() {
  return axios
    .get("http://localhost:3000/devices")
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log(error);
    });
}

export class Devices {
  constructor(text) {
    this.deviceInfo = Selector(".device-info");
    this.name = Selector(".device-name").withText(text);
    this.type = Selector(".device-type").withText(text);
    this.capacity = Selector(".device-capacity").withText(text);
    this.editButton = Selector(".device-edit");
    this.removeButton = Selector(".device-remove");
  }
}