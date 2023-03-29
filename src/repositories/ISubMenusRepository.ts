import { Submenu } from "~/entities/Submenu";

export interface ISubMenusRepository {
  save(sub: Submenu): Promise<Submenu>;
  list(sub:Submenu): Promise<Submenu[]>;
  change(data: string,id: string): Promise<Submenu>;
  delete(id: string): Promise<Submenu>;
}