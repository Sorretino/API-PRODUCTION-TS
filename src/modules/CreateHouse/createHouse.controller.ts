import { Request, Response } from "express";
import { CreateHouseCase } from "./createHouse.service";

export class CreateHouseController {
  constructor(private createHouseCase: CreateHouseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    let originalname = request.file.originalname;

    console.log(originalname, "req imagens no handle");

    const { title, description, description_long, url, position, urlimage } =
      request.body;
    let confPass = originalname;
    console.log(confPass, "pass");
    // confPass = urlimage === undefined ?  'sem-imagem' : urlimage

    try {
      const house = await this.createHouseCase.execute({
        title,
        description,
        description_long,
        position,
        url,
        urlimage: `${process.env.URL_SERVER}${confPass}`,
      });

      return response.status(201).json(house);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }

  async list(request: Request, response: Response): Promise<Response> {
    try {
      let { active } = request.params;
      typeof active === undefined ? (active = null) : "";
      const users = await this.createHouseCase.getAll(active);

      return response.status(201).json(users);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
  async getById(request: Request, response: Response): Promise<Response> {
    try {
      const { url } = request.body;

      const blogbyUrl = await this.createHouseCase.findByUrl(url);
      return response.status(201).json(blogbyUrl);
      //return response.status(201).json(url);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
  async getByUrl(request: Request, response: Response): Promise<Response> {
    try {
      const { url } = request.params;
      console.log(url);
      const blogbyUrl = await this.createHouseCase.findByUrl(url);
      console.log(blogbyUrl, "passou no controller");
      return response.status(201).json(blogbyUrl);
      //return response.status(201).json(url);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
  //paginate
  async getpaginate(request: Request, response: Response): Promise<Response> {
    try {
      const LIMIT: number = 5;
      let { skip } = request.query;
      const result = await this.createHouseCase.getpages(0);
      if (!Array.isArray(result)) {
        throw new Error("error paginate");
      }
      let size = result.length;
      let pages = Math.ceil(size / LIMIT);
      //console.log(result,'result array')
      let firstPageindex = (skip - 1) * LIMIT;
      let lastPageindex = firstPageindex + LIMIT;
      let dados = result.slice(firstPageindex, lastPageindex);
      //console.log(firstPageindex,lastPageindex, 'resultado')

      return response.status(200).json({
        size,
        pages,
        LIMIT,
        actual: parseInt(skip),
        dados,
      });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }

  async updateById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      let originalname = request.file.originalname;
      console.log(originalname, "req imagens no handle");
      const { title, description, description_long, url, position, urlimage } =
        request.body;
      if (id !== null) {
        const Onetimehors = await this.createHouseCase.find(id);
        console.log(Onetimehors, "dados anterior do banco ");
        let ImagePosted: string;
        if (request.file) {
          ImagePosted = `${process.env.URL_SERVER}${request.file.originalname}`;
        } else {
          ImagePosted = Onetimehors.urlimage;
        }
        let datatoSave: Record<string, string> = {
          title,
          description,
          description_long,
          position,
          url,
          urlimage: ImagePosted,
        };
        console.log(datatoSave, "dados vindo para alterar");
        const house = await this.createHouseCase.update(datatoSave, id);

        return response.status(201).json(house);
      } else {
        throw new Error("Id não informado");
      }
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
  //delete
  async deleteById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;

      await this.createHouseCase.destroy(id);

      return response.status(201).json({ delete: true + " " + id });
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
