import { Router } from "express";
import { createUserController, readUserController } from "../modules";

const userRouters = Router();

userRouters.post("/users", (request, response) => {
  return createUserController.handle(request, response);
});
userRouters.get("/users", (request, response) => {
  return readUserController.handle(request, response);
});



export { userRouters };
