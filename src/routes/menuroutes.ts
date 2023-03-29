import { Router } from "express";
import { createMenuController } from "../modules";


const menuRouters = Router(); 

menuRouters.get("/menu", (request, response) => {
  return createMenuController.getAll(request, response);
});

menuRouters.post("/menu",(request, response) => {
 return createMenuController.handle(request, response);
} );

export { menuRouters };