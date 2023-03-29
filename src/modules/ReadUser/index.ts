//import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { UsersRepository } from "../../repositories/implementations/usersRepository";
import { ReadUserUseCase } from "./readUser.service";
import { ReadUserController } from "./readUser.controller";

const usersRepository = new UsersRepository()
//const mailtrapMailProvider = new MailtrapMailProvider()

const readUserUseCase = new ReadUserUseCase(
  usersRepository,
//  mailtrapMailProvider,
)

const readUserController = new ReadUserController(
  readUserUseCase
)

export { readUserUseCase, readUserController }