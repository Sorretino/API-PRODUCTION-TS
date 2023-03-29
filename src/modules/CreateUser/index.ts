//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UsersRepository } from "../../repositories/implementations/usersRepository";
import { CreateUserUseCase } from "./createUser.service";
import { CreateUserController } from "./createUser.controller";

const usersRepository = new UsersRepository();
//const mailtrapMailProvider = new MailtrapMailProvider()

const createUserUseCase = new CreateUserUseCase(
  usersRepository
  //  mailtrapMailProvider,
);

const createUserController = new CreateUserController(createUserUseCase);

export { createUserUseCase, createUserController };
