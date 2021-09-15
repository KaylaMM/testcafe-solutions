import { Devices, Buttons, getDevices } from "../pages/DevicesPage";

fixture`Devices`.page(`http://localhost:3001/`);

test("Test One", async (t) => {
  let deviceData = await getDevices();

  await t.expect(new Devices("").deviceInfo.count).eql(deviceData.length);

  deviceData.forEach(async (device) => {
    await t
      .expect(new Devices(device.system_name).name.visible)
      .ok()
      .expect(new Devices(device.type).type.visible)
      .ok()
      .expect(new Devices(`${device.hdd_capacity} GB`).capacity.visible)
      .ok()
      .expect(new Devices("").editButton.exists)
      .eql(true)
      .expect(new Devices("").removeButton.exists)
      .eql(true);
  });
});
