import { Router } from "express";
import { createHouseController } from "../modules";
import multer from "multer";
import uploads from "../../Muter/upload";
import authMidleware from "../Midlewares/authMidleware";
const houseRouters = Router();
const upload = multer(uploads.MULTER);

houseRouters.get("/house", (request, response) => {
  return createHouseController.list(request, response);
});
houseRouters.get("/house/:url", (request, response) => {
  return createHouseController.getById(request, response);
});

houseRouters.get("/houseByUrl/:url", (request, response) => {
  return createHouseController.getByUrl(request, response);
});
houseRouters.get("/housePaginate", (request, response) => {
  return createHouseController.getpaginate(request, response);
});

houseRouters.post("/house", upload.single("urlimage"), (request, response) => {
  return createHouseController.handle(request, response);
});

houseRouters.put(
  "/house/:id",
  upload.single("urlimage"),
  (request, response) => {
    return createHouseController.updateById(request, response);
  }
);

houseRouters.delete("/house/:id", (request, response) => {
  return createHouseController.deleteById(request, response);
});
export { houseRouters };
