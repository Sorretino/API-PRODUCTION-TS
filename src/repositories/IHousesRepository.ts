import { House } from "~/entities/House";

export interface IHousesRepository {
  save(house: House): Promise<House>;
  all(status: boolean | null ): Promise<House[]>;
  alterar(data: string,id: string): Promise<House>;
  find(id: string): Promise<House>;
  delete(id: string): Promise<House>;
  findById(url: string): Promise<House>;
  findByUrl(url: string): Promise<House>;
  pagination(skip:number,limit: number): Promise<House[]>;
}