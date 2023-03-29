import { Router } from "express";
import { createImporterController } from "../modules";


const importerRoutes = Router();

importerRoutes.get("/import", (request, response) => {
  return createImporterController.handle();
});

importerRoutes.get('/banana', (request, response) => {
  return createImporterController.banana();
})
importerRoutes.get('/banana2/:status', (request, response) => {
  return createImporterController.banana2(request, response);
})



export { importerRoutes };