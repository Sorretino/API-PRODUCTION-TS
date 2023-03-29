import { Request, Response } from "express";
import { CreatePaymentCase } from "./createPayment.service";

export class CreatePaymentController {
  constructor(private createPaymentCase: CreatePaymentCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, price, project, developersId } = request.body;
    try {
      const devs = await this.createPaymentCase.execute({
        name,
        price,
        project: "teste",
        developersId: "6405d71362cd6505b9e7781f",
      });

      return response.status(201).json(devs);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }

  async list(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.createPaymentCase.getAll();

      return response.status(201).json(users);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
