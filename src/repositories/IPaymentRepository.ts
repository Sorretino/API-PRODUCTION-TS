import { Payment } from "~/entities/Payment";

export interface IPaymentRepository {
  save(dev: Payment): Promise<Payment>;
  all(dev:Payment ): Promise<Payment[]>;
  
}