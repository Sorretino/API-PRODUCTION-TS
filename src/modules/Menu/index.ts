//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { MenusRepository } from "../../repositories/implementations/menuRepository";
import { CreateMenuCase } from "./createMenu.service";
import { CreateMenuController } from "./menu.controller";

const menusRepository = new MenusRepository();

const createMenuCase = new CreateMenuCase(
  menusRepository

);

const createMenuController = new CreateMenuController(createMenuCase);

export { createMenuCase, createMenuController };
