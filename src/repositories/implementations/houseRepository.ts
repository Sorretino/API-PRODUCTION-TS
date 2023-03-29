import { IHousesRepository } from "../IHousesRepository";
import { House } from "../../entities/House";
import { PrismaClient } from "@prisma/client";
const PrismaProvider = new PrismaClient();

export class HousesRepository implements IHousesRepository {
  async all(status: boolean | null): Promise<House[]> {
    const house = PrismaProvider.house.findMany({
      where: status !== null ? { active: status } : {},
      select: {
        id: true,
        title: true,
        description: true,
        description_long: true,
        url: true,
        position: true,
        active: true,
        urlimage: true,
      },
    });
    return house;
  }
  async find(id: string) {
    const house = await PrismaProvider.house.findUnique({ where: { id } });
    return house;
  }

  async findById(url: string) {
    const house = await PrismaProvider.house.findFirst({ where: { url } });
    return house;
  }

  //pesquisa url blog
  async findByUrl(url: string) {
    const house = await PrismaProvider.house.findFirst({ where: { url } });
    return house;
  }

  //paginação
  async pagination(skip: number, limit: number): Promise<House[]> {
    const house = await PrismaProvider.house.findMany({
      orderBy: [
        {
          createdAt: "desc",
        },
      ],
      skip: skip,
      take: limit,
    });
    return house;
  }

  async save(data: House): Promise<House> {
    const house = await PrismaProvider.house.create({ data });
    return house;
  }

  //update

  async alterar(data: Record<string, string>, id: string) {
    const updatehouse = await PrismaProvider.house.findUnique({
      where: { id },
    });
    if (!updatehouse) {
      throw new Error("RegisterNotFound");
    }
    const updatesubmenu = await PrismaProvider.house.update({
      where: {
        id: updatehouse.id,
      },
      data,
    });
    return updatesubmenu;
  }

  async delete(id: string) {
    const findhouse = await PrismaProvider.house.findUnique({
      where: {
        id,
      },
    });
    if (!findhouse) {
      throw new Error("RegisterNotFound");
    }
    const deletehouse = await PrismaProvider.house.delete({ where: { id } });
    return deletehouse;
  }
}
