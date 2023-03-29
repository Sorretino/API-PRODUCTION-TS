import { Router } from "express";
import { createDeveloperController } from "../modules";

const developerRoutes = Router();

developerRoutes.post("/dev", (request, response) => {
  return createDeveloperController.handle(request, response);
});

developerRoutes.get("/dev", (request, response) => {
  return createDeveloperController.list(request, response);
});
developerRoutes.get("/dev/:id", (request, response) => {
  return createDeveloperController.getById(request, response);
});

export { developerRoutes };
