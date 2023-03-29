import { IImporterRepository } from "../../repositories/IImporterRepository";
import { Importer } from "../../entities/Importer";


export class CreateImporterCase {
  constructor(
    private importerRepository: IImporterRepository,
   
  ) {}


  async findByPhone(param: string): Promise<any> {
    return await this.importerRepository.findPhone(param);
  }


  async createMany(data: Importer) {
    const newDev = await this.importerRepository.createDoc(data);
    return newDev;
  }

  async updateMany() {
    const newDev = await this.importerRepository.updateDoc()
    return newDev;
  }
  async updateMany2(status:string) {
    console.log(status,'service')
    const newDev = await this.importerRepository.updateDoc2(status)
    return newDev;
  }


}