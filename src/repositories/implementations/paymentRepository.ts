import { IPaymentRepository } from "../IPaymentRepository";
import { Payment } from "../../entities/Payment";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class PaymentRepository implements IPaymentRepository {
  async all(data: Payment){
    const devs =  await PrismaProvider.paymentDevs.findMany();
    return devs; 
  }

  async save(data: Payment): Promise<Payment> {
    const house = await PrismaProvider.paymentDevs.create({ data });
    return house;
  }
}