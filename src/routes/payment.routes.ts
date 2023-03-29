import { Router } from "express";
import { createPaymentController } from "../modules";


const paymentRoutes = Router();

paymentRoutes.post("/payment", (request, response) => {
  return createPaymentController.handle(request, response);
});

paymentRoutes.get("/payment/show", (request, response) => {
    return createPaymentController.list(request, response);
  });

 
export { paymentRoutes };