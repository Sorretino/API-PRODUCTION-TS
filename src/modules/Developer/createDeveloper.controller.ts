import { Request, Response } from "express";
import { CreateDeveloperCase } from "./createDeveloper.service";

export class CreateDeveloperController {
  constructor(private createDeveloperCase: CreateDeveloperCase) {}
  // const modfy = request.body.name.replace(/\s+/g, ' ').trim();
  // console.log(modfy,'modigficado');
  // const texto = this.formatMessage(request.body.description);
  // console.log(texto.replace(/<[^>]*>/g, ''));
  private formatPhone(phoneNumber: string) {
    return phoneNumber.replace(/[^0-9]+/g, "");
  }
  private validatePhone(rawPhoneNumber: string) {
    const phoneNumber = this.formatPhone(rawPhoneNumber);

    return phoneNumber.length === 11;
  }
  private formatMessage(formtMessage: string) {
    return formtMessage.replace(/[(\r\n|\r|\n|*|~|_|`|'|/\|<|^>|*>)]/g, "");
    ///<[^>]*>/g, ''
  }
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, phone, city, price, description } = request.body;

    const phoneModify = this.validatePhone(phone)
      ? this.formatPhone(phone)
      : "(00)997313515";

    console.log(phoneModify, "modigficado");
    const ModifyDescription = this.formatMessage(description);
    console.log(ModifyDescription);

    try {
      const devs = await this.createDeveloperCase.execute({
        name: this.formatMessage(name),
        email,
        phone: phoneModify,
        city: this.formatMessage(city),
        price,
        description: ModifyDescription,
      });

      return response.status(201).json(devs);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }

  async list(request: Request, response: Response): Promise<Response> {
    try {
      const users = await this.createDeveloperCase.getAll();

      return response.status(201).json(users);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }

  async getById(request: Request, response: Response): Promise<Response> {
    try {
      const { id } = request.params;
      console.log(request.params, "controller");

      const devbyUrl = await this.createDeveloperCase.find(id);
      return response.status(201).json(devbyUrl);
      //return response.status(201).json(url);
    } catch (err) {
      return response.status(400).json({
        message: err.message || "Unexpected error.",
      });
    }
  }
}
