import { IPaymentRepository } from "../../repositories/IPaymentRepository";
import { Payment } from "../../entities/Payment";


export class CreatePaymentCase {
  constructor(
    private paymentRepository: IPaymentRepository,
   
  ) {}

  async execute(data: Payment) {
    const newDev = await this.paymentRepository.save(data);
    return newDev;
  }

  async getAll(params) {
    return await this.paymentRepository.all(params);
  }
}