import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../../entities/User";
import { hashSync } from "bcryptjs";

export class CreateUserUseCase {
  constructor(
    private usersRepository: IUsersRepository,
    /* private mailProvider: IMailProvider, */
  ) {}

  async execute(data: User) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    data.password = hashSync(data.password, 10);
    
    const newUser = await this.usersRepository.save(data);

    newUser.password = "";
   /*  await this.mailProvider.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: 'Equipe do Meu App',
        email: 'equipe@meuapp.com',
      },
      subject: 'Seja bem-vindo à plataforma',
      body: '<p>Você já pode fazer login em nossa plataforma.</p>'
    }) */

    return newUser;
  }

 
  
}