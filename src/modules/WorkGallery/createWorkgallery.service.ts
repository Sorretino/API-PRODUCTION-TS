import { IWorkgalleryRepository } from "../../repositories/IWorkgalleryRepository";
import { Workgallery } from "../../entities/Workgallery";


export class CreateWorkCase {
  constructor(
    private worksRepository: IWorkgalleryRepository,
   
  ) {}

  // async execute(data: Workgallery) {
  //   const newwork = await this.worksRepository.save(data);
  //   return  newwork;
  // }

  async getAll(params) {
   const newwork = await this.worksRepository.list(params);
    return newwork;
  }
  // lista find
//  async find(id: string) {
//   return  await this.worksRepository.find(id);
// }



}