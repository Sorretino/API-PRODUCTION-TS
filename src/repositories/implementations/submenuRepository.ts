import { ISubMenusRepository } from "../ISubMenusRepository";
import { Submenu } from "../../entities/Submenu";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class SubMenusRepository implements ISubMenusRepository {
 
  //lis All 
  async list(data: Submenu) {
    const submenus =  await PrismaProvider.submenu.findMany();
    return submenus;
  }
  //create
  async save(data: Submenu){
    const submenus = await PrismaProvider.submenu.create({ data });
    return submenus;
  }

  //update
   
   async change(data:Record<string, string> ,id:string) {
    console.log(data, 'dados')
    const submenu =  await PrismaProvider.submenu.findUnique({where:{
      id
    }});
        if(!submenu){
          throw new Error("RegisterNotFound");
        }

    const updatesubmenu = await PrismaProvider.submenu.update({where:{
     id:submenu.id 
    },
     data
  });
    return updatesubmenu;
  }

  //update
  

  async delete(id:string) {
    const submenu =  await PrismaProvider.submenu.findUnique({where:{
      id
    }});
    if(!submenu){
      throw new Error("RegisterNotFound");
    }
    const updatesubmenu = await PrismaProvider.submenu.delete({ where: { id } });
    return updatesubmenu;
  }

}