import device from "./device-models";

fixture`ninja-rmm-tests`.page`http://localhost:3001`;

test("Test One", async (t) => {
  await t
    .expect(device.name.visible)
    .ok()
    .expect(device.type.visible)
    .ok()
    .expect(device.capacity.visible)
    .ok()
    .expect(device.editButton.visible)
    .ok()
    .expect(device.removeButton.visible)
    .ok();
});
