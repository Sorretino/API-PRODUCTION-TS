import { Company } from "~/entities/Company";

export interface ICompanysRepository {
  save(company: Company): Promise<Company>;
  all(status: boolean | null ): Promise<Company[]>;
  alterar(data: string,id: string): Promise<Company>;
  find(id: string): Promise<Company>;
  delete(id: string): Promise<Company>;
  findById(url: string): Promise<Company>;
  findByUrl(url: string): Promise<Company>;
  pagination(skip:number,limit: number): Promise<Company[]>;
  listmaster(data:Company): Promise<Company[]>;
}