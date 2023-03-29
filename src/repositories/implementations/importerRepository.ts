import { IImporterRepository } from "../IImporterRepository";
import { Importer } from "../../entities/Importer";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class ImporterRepository implements IImporterRepository {

  async findByPhone(param: any): Promise<any> {
    const lead = await PrismaProvider.importer.findUnique({param});
    return lead;
  }

  async createDoc(data: any): Promise<any> {
    const document = await PrismaProvider.importer.createMany( { data } );
    return document;
  }

  async updateDoc(): Promise<any> {
    const document = await PrismaProvider.importer.updateMany({
      data: {
        config_id: '6398bf47fbeb30c5813a9008',
      },
    })
    return document;
  }
  async updateDoc2(status:any): Promise<any> {
    console.log(status,'repositorie')
    const document2 = await PrismaProvider.importer.updateMany({
      where: 
        {
          status:status
        },
     
      data: {
        status:'UNSUBSCRIBED',
      },

    })
    return document2;
  }

}