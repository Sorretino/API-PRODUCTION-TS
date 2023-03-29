import { DeveloperRepository } from "../../repositories/implementations/developerRepository";
import { CreateDeveloperCase } from "./createDeveloper.service";
import { CreateDeveloperController } from "./createDeveloper.controller";

const developerRepository = new DeveloperRepository();

const createDeveloperCase = new CreateDeveloperCase(
    developerRepository

);

const createDeveloperController = new CreateDeveloperController(createDeveloperCase);

export { createDeveloperCase, createDeveloperController };