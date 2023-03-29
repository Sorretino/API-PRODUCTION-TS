//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { SubMenusRepository } from "../../repositories/implementations/submenuRepository";
import { CreateSubMenuCase } from "./createSubmenu.service";
import { CreateSubMenuController } from "./submenu.controller";

const submenusRepository = new SubMenusRepository();

const createSubMenuCase = new CreateSubMenuCase(
  submenusRepository

);

const createSubMenuController = new CreateSubMenuController(createSubMenuCase);

export { createSubMenuCase, createSubMenuController };
