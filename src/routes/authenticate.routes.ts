import { Router } from "express";
import { authenticateController } from "../modules";


const authRouters = Router();

authRouters.post("/auth", (request, response) => {
  return authenticateController.handle(request, response);
 
});



// authRouters.post('/auth',authenticateController.handle );
// routes.post("/House/create",authMidleware.eAdmin, upload.single("urlimage"),  controller.storeTwo);
export { authRouters };