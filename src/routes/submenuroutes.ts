import { Router } from "express";
import { createSubMenuController } from "../modules";


const submenuRouters = Router(); 

submenuRouters.get("/submenu", (request, response) => {
  return createSubMenuController.list(request, response);
});

submenuRouters.post("/submenu",(request, response) => {
 return createSubMenuController.handle(request, response);
} );

submenuRouters.put("/submenu/:id",(request, response) => {
  return createSubMenuController.updateById(request, response);
 } );

 submenuRouters.delete("/submenu/:id",(request, response) => {
  return createSubMenuController.deleteById(request, response);
 } );

export { submenuRouters };