//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { WorkgalleryRepository } from "../../repositories/implementations/workgalleryRepository";
import { CreateWorkCase } from "./createWorkgallery.service";
import { CreateWorkgalleryController } from "./CreateWorkgalerry.controller";

const worksRepository = new WorkgalleryRepository();

const createWorkCase = new CreateWorkCase(
    worksRepository
    );

const createWorkController = new CreateWorkgalleryController(createWorkCase);

export { createWorkCase, createWorkController };