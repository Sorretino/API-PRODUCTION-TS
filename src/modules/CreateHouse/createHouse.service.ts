import { IHousesRepository } from "../../repositories/IHousesRepository";
import { House } from "../../entities/House";


export class CreateHouseCase {
  constructor(
    private housesRepository: IHousesRepository,
   
  ) {}

  async execute(data: House) {
    const newHouse = await this.housesRepository.save(data);
    return newHouse;
  }

  async getAll(params) {
    return await this.housesRepository.all(params);
  }
  
  async getpages(params) {
    return await this.housesRepository.pagination(params);
  }
  // lista find
 async find(id: string) {
  return  await this.housesRepository.find(id);
}
async findByUrl(url: string) {
  return  await this.housesRepository.findByUrl(url);
}
  async update(data:string ,id: string) {
    const newHouse = await this.housesRepository.alterar(data,id);
    return newHouse;
  }
  async destroy(id: string) {
    
    const newHouse = await this.housesRepository.delete(id);
    return newHouse;
  }

}