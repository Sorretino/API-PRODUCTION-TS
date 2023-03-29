import { ICompanysRepository } from "../ICompanysRepository";
import { Company } from "../../entities/Company";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class CompanysRepository implements ICompanysRepository {

  async listmaster(data: Company) {
    const companie =  await PrismaProvider.company.findMany({

      include:{
        Workgallery: true,
      }
    });
    return companie;
  }

  async all(status:boolean|null): Promise<Company[]> {
    const company = PrismaProvider.company.findMany({
      
      where : status !== null ? { active: status } : {},
      select: {
        id: true,
        title: true,
        description: true,
        paragraph: true,
        object:true,
        solution:true,
        url:true,
        color:true,
        urlimage: true,
      },
      
    });
    return company;
  }
  async find(id:string) {
    const company = await PrismaProvider.company.findUnique({where:{id},
      include:{
      Workgallery: true,
    }});
    return company;
  }
  
  async findById(url:string) {
    const company = await PrismaProvider.company.findFirst({where:{url},
      include:{
      Workgallery: true,
    }});
    return company;
  }

  //pesquisa url blog
  async findByUrl(url:string) {
    const company = await PrismaProvider.company.findFirst({
      where:{url},
      include:{
      Workgallery: true,
    }});
    return company;
  }

  //paginação
  async pagination(skip:number,limit:number ): Promise<Company[]> {
    const company = await PrismaProvider.company.findMany({
      skip: skip,
      take: limit,
    });
    return company;
  }

  async save(data: Company): Promise<Company> {
    const company = await PrismaProvider.company.create({ data });
    return company;
  }

  //update
   
  async alterar(data:Record<string, string> ,id:string) {
    const updatecompany =  await PrismaProvider.company.findUnique({where:{id}});
        if(!updatecompany){
          throw new Error("RegisterNotFound");
        }
    const updatesubmenu = await PrismaProvider.company.update({where:{
     id:updatecompany.id 
    },
     data
  });
    return updatesubmenu;
  }

  async delete(id:string) {
    const findcompany =  await PrismaProvider.company.findUnique({where:{
      id
    }});
    if(!findcompany){
      throw new Error("RegisterNotFound");
    }
    const deletecompany = await PrismaProvider.company.delete({ where: { id } });
    return deletecompany;
  }

}