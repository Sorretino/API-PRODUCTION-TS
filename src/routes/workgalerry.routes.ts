import { Router } from "express";
import { createWorkController } from "../modules";


const workRoutes = Router();



workRoutes.get("/work", (request, response) => {
  return createWorkController.show(request, response);
});


 
export { workRoutes };