import { IDeveloperRepository } from "../IDeveloperRepository";
import { Developer } from "../../entities/Developer";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class DeveloperRepository implements IDeveloperRepository {
  async all(data: Developer) {
    const devs = await PrismaProvider.developers.findMany({
      include: {
        paymentdevs: true,
      },
    });
    return devs;
  }
  // async save(data: Developer): Promise<Developer> {
  //   const dev = await PrismaProvider.developers.create({ data });
  //   return dev;
  // }
  async save(data: Developer): Promise<Developer> {
    const house = await PrismaProvider.developers.create({ data });
    console.log(data, "repository");
    return house;
  }

  async find(id: string) {
    const house = await PrismaProvider.developers.findUnique({
      where: { id },
      include: {
        paymentdevs: true,
      },
    });
    return house;
  }
}
