
import { IUsersRepository } from "~/repositories/IUsersRepository";


export class AuthenticateService {

  constructor(
    private authenticRepository: IUsersRepository,
  ) {}

  async execute(email:string) {
    const result = await this.authenticRepository.getOneByEmailToLogin(email)
    return result;
  } 
}



