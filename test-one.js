import page from "./page-models";
import https from "https";

const executeRequest = () => {
  return new Promise((resolve) => {
    const options = {
      hostname: "http://localhost:3000/devices",
      port: 3000,
      path: "/",
      method: "GET",
    };

    const req = https.request(options, (res) => {
      console.log("statusCode:", res.statusCode);
      console.log("headers:", res.headers);
      resolve();
    });

    req.on("error", (e) => {
      console.error(e);
    });

    req.end();
  });
};

fixture`ninja-rmm-tests`.page`http://localhost:3001`;

test("Test One", async (t) => {
  //    for(const page of devices.)
  await t
    .expect(page.name.visible)
    .ok()
    .expect(page.type.visible)
    .ok()
    .expect(page.capacity.visible)
    .ok()
    .expect(page.editButton.visible)
    .ok()
    .expect(page.removeButton.visible)
    .ok();
});
