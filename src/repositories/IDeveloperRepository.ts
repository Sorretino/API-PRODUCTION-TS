import { Developer } from "~/entities/Developer";

export interface IDeveloperRepository {
  save(dev: Developer): Promise<Developer>;
  all(dev: Developer): Promise<Developer[]>;
  find(id: string): Promise<Developer>;
}
