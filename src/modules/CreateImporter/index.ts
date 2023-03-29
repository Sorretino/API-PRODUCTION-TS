import { ImporterRepository } from "../../repositories/implementations/importerRepository";
import { CreateImporterCase } from "./createImporter.service";
import { CreateImporterController } from "./createImporter.controller";

const importerRepository = new ImporterRepository();

const createImporterCase = new CreateImporterCase(
    importerRepository

);

const createImporterController = new CreateImporterController(createImporterCase);

export { createImporterCase, createImporterController };