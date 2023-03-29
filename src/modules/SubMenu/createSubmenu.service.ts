import { ISubMenusRepository } from "../../repositories/ISubMenusRepository";
import { Submenu } from "~/entities/Submenu";


export class CreateSubMenuCase {
  constructor(
    private submenusRepository: ISubMenusRepository,
   
  ) {}

  async execute(data: Submenu) {
    const newSubMenu = await this.submenusRepository.save(data);
    return newSubMenu;
  }

  async getAll(params) {
    return await this.submenusRepository.list(params);
  }

  async put(data:string ,id: string) {
    
    const newSubMenu = await this.submenusRepository.change(data,id);
    return newSubMenu;
  }
  async destroy(id: string) {
    
    const newSubMenu = await this.submenusRepository.delete(id);
    return newSubMenu;
  }
}