import { PaymentRepository } from "../../repositories/implementations/paymentRepository";
import { CreatePaymentCase } from "./createPayment.service";
import { CreatePaymentController } from "./createPayment.controller";

const paymentRepository = new PaymentRepository();

const createPaymentCase = new CreatePaymentCase(
    paymentRepository

);

const createPaymentController = new CreatePaymentController(createPaymentCase);

export { createPaymentCase, createPaymentController };