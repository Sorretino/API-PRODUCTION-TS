import { IWorkgalleryRepository } from "../IWorkgalleryRepository";
import { Workgallery } from "../../entities/Workgallery";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class WorkgalleryRepository implements IWorkgalleryRepository {

    async list(data: Workgallery){
        const works =  await PrismaProvider.workgallery.findMany();
          return works;
      }


}