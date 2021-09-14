import { Selector } from "testcafe";

export default class Page {
  //text can be named something else
  constructor() {
    //introduce an element's property to the model and assign a selector to it, in this case it would be devicesPage

    this.name = Selector(".device-name");
    this.type = Selector(".device-type");
    this.capacity = Selector(".device-capacity");
    this.editButton = Selector(".device-edit");
    this.removeButton = Selector(".device-remove");
  }
}

//Part of Test Two
// class DeviceInput {
//   constructor() {}
// }
