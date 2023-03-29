import { User } from "~/entities/User";

export interface IUsersRepository {
  findByEmail(email: string): Promise<User>;
  all(status: boolean | null ): Promise<User[]>;
  save(user: User): Promise<User>;
  getOneByEmailToLogin(email:string): Promise<User>;
}