import { Menu } from "~/entities/Menu";

export interface IMenusRepository {
  save(menu: Menu): Promise<Menu>;
  list(menu:Menu): Promise<Menu[]>;
}