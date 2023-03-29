import { Router } from "express";
import { createSubscribedController } from "../modules";


const scribedRoutes = Router();

scribedRoutes.post("/scribed", (request, response) => {
  return createSubscribedController.handle(request, response);
});

scribedRoutes.get("/scribed/show", (request, response) => {
    return createSubscribedController.show(request, response);
  });

  scribedRoutes.delete("/scribed/:id",(request, response) => {
    return createSubscribedController.deleteById(request, response);
   } );
 
export { scribedRoutes };