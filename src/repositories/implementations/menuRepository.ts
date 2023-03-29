import { IMenusRepository } from "../IMenusRepository";
import { Menu } from "../../entities/Menu";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class MenusRepository implements IMenusRepository {
   async list(data: Menu) {
    const menus =  await PrismaProvider.menu.findMany({

      include:{
        Submenu: true,
      }
    });
    return menus;
  }
  async save(data: Menu){
    const menu = await PrismaProvider.menu.create({ data });
    return menu;
  }
}