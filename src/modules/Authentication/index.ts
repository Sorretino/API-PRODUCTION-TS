import { UsersRepository } from "../../repositories/implementations/usersRepository";
import { AuthenticateService } from "./AuthenticateService";
import { AuthenticationController } from "./AuthenticationController";

const authenticateRepository = new UsersRepository();


const authenticateService = new AuthenticateService(authenticateRepository);

const authenticateController = new AuthenticationController(authenticateService);

export { authenticateService, authenticateController };


