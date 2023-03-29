import { IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class UsersRepository implements IUsersRepository {

  async all(status:boolean|null): Promise<User[]> {
    const users = PrismaProvider.user.findMany({
      where : status !== null ? { active: status } : {},
      select: {
        id: true,
        name: true,
        email: true,
        sector: true,
        image: true,
      },
    });
    return users;
  }

  async findByEmail(email: string): Promise<User> {
    const user = PrismaProvider.user.findUnique({ where: { email } });
    return user;
  }

  async save(data: User): Promise<User> {
    const user = await PrismaProvider.user.create({ data });
    return user;
  }

  async getOneByEmailToLogin(email: string) {

    const result = await PrismaProvider.user.findFirst({ where: { email } });
    return result;
  }

}