import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
/* import { IMailProvider } from "../../providers/IMailProvider"; */

export class ReadUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    /* private mailProvider: IMailProvider, */
  ) {}

  async execute(params) {
    return await this.usersRepository.all(params);
  }
}