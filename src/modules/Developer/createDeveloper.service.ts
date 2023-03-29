import { IDeveloperRepository } from "../../repositories/IDeveloperRepository";
import { Developer } from "../../entities/Developer";

export class CreateDeveloperCase {
  constructor(private develperRepository: IDeveloperRepository) {}

  async execute(data: Developer) {
    const newDev = await this.develperRepository.save(data);
    return newDev;
  }

  async getAll(params) {
    return await this.develperRepository.all(params);
  }

  // lista find
  async find(id: string) {
    return await this.develperRepository.find(id);
  }
}
