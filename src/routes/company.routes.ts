import { Router } from "express";
import { createCompanyController } from "../modules";
import multer from "multer"; 
import uploads from "../../Muter/upload"
import authMidleware from "../Midlewares/authMidleware";

const companyRouters = Router();

const upload = multer(uploads.MULTER);

companyRouters.get("/companyWork", (request, response) => {
  return createCompanyController.show(request, response);
});

companyRouters.get("/company", (request, response) => {
  return createCompanyController.list(request, response);
});
companyRouters.get("/company/:url", (request, response) => {
  return createCompanyController.getById(request, response);
});

companyRouters.get("/companyByUrl/:url", (request, response) => {
  return createCompanyController.getByUrl(request, response);
});
companyRouters.get("/companyPaginate", (request, response) => {
  return createCompanyController.getpaginate(request, response);
});

companyRouters.post("/company",upload.single('urlimage'),(request, response) => {
 return createCompanyController.handle(request, response);
} );

companyRouters.put("/company/:id",upload.single('urlimage'),(request, response) => {
  return createCompanyController.updateById(request, response);
 } );

 companyRouters.delete("/company/:id", authMidleware.handle,(request, response) => {
  return createCompanyController.deleteById(request, response);
 } );
export { companyRouters };