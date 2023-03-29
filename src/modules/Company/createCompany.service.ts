import { ICompanysRepository } from "../../repositories/ICompanysRepository";
import { Company } from "../../entities/Company";


export class CreateCompanyCase {
  constructor(
    private companysRepository: ICompanysRepository,
   
  ) {}

  async execute(data: Company) {
    const newCompany = await this.companysRepository.save(data);
    return newCompany;
  }

  async getAll(params) {
    return await this.companysRepository.all(params);
  }
  async getallwork(data:Company) {
    return await this.companysRepository.listmaster(data);
  }
  
  async getpages(params) {
    return await this.companysRepository.pagination(params);
  }
  // lista find
 async find(id: string) {
  return  await this.companysRepository.find(id);
}
async findByUrl(url: string) {
  return  await this.companysRepository.findByUrl(url);
}
  async update(data:string ,id: string) {
    const newCompany = await this.companysRepository.alterar(data,id);
    return newCompany;
  }
  async destroy(id: string) {
    
    const newCompany = await this.companysRepository.delete(id);
    return newCompany;
  }

}