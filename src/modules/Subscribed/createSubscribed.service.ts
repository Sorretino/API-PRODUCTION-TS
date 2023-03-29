import { ISubscribedRepository } from "../../repositories/ISubscribedRepository";
import { Subscribed } from "../../entities/Subscribed";


export class CreateSubscribedCase {
  constructor(
    private subscribedRepository: ISubscribedRepository,
   
  ) {}

  async execute(data: Subscribed) {
    const newwork = await this.subscribedRepository.save(data);
    return  newwork;
  }

  async getAll(params) {
   const scribed = await this.subscribedRepository.list(params);
    return scribed;
  }
  // lista find
//  async find(id: string) {
//   return  await this.worksRepository.find(id);
// }

async destroy(id: string) {
    
  const newHouse = await this.subscribedRepository.delete(id);
  return newHouse;
}

}