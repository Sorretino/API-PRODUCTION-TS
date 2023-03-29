import { IMenusRepository } from "../../repositories/IMenusRepository";
import { Menu } from "../../entities/Menu";


export class CreateMenuCase {
  constructor(
    private menusRepository: IMenusRepository,
   
  ) {}

  async execute(data: Menu) {
    const newMenu = await this.menusRepository.save(data);
    return newMenu;
  }



  async all(menu:Menu) {
    const newMenu = await this.menusRepository.list(menu);
    return newMenu;
  }

}