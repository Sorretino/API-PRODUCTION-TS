//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { HousesRepository } from "../../repositories/implementations/houseRepository";
import { CreateHouseCase } from "./createHouse.service";
import { CreateHouseController } from "./createHouse.controller";

const housesRepository = new HousesRepository();

const createHouseCase = new CreateHouseCase(
  housesRepository

);

const createHouseController = new CreateHouseController(createHouseCase);

export { createHouseCase, createHouseController };
