import { ISubscribedRepository } from "../ISubscribedRepository";
import {Subscribed } from "../../entities/Subscribed";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class SubscribedRepository implements ISubscribedRepository {

    async save(data: Subscribed): Promise<Subscribed> {
        const house = await PrismaProvider.subscribed.create({ data });
        return house;
      }

      async list(data: Subscribed){
        const scribeds =  await PrismaProvider.subscribed.findMany();
          return scribeds;
      }

      async delete(id:string) {
        const findhouse =  await PrismaProvider.subscribed.findUnique({where:{
          id
        }});
        if(!findhouse){
          throw new Error("RegisterNotFound");
        }
        const deletehouse = await PrismaProvider.subscribed.delete({ where: { id } });
        return deletehouse;
      }
}