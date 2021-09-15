// import { ClientFunction } from "testcafe";
import devices, { getDevices } from "../pages/DevicesPage";

fixture`Devices`.page(`http://localhost:3001/`);

test("Test One", async (t) => {
  getDevices();

  await t
  .expect(devices.name.visible).ok()
  .expect(devices.type.visible).ok()
  .expect(devices.capacity.visible).ok()
  .expect(devices.editButton.visible).ok()
  .expect(devices.removeButton.visible).ok()
});
