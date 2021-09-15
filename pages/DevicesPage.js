import { Selector } from "testcafe";

const axios = require("axios");

export async function getDevices() {
  axios
    .get("http://localhost:3000/devices")
    .then((res) => {
      console.log(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
}

class Devices {
  constructor() {
    this.name = Selector(".device-name");
    this.type = Selector(".device-type");
    this.capacity = Selector(".device-capacity");
    this.editButton = Selector(".device-edit");
    this.removeButton = Selector(".device-remove");
  }
}

export default new Devices


