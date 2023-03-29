import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUser.service";

export class CreateUserController {
  constructor(
    private createUserUseCase: CreateUserUseCase,
   
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, sector, image } = request.body;
    let confPass;
    confPass = password === undefined ?  '1234@banana' : password

    try {
      const user = await this.createUserUseCase.execute({
        name,
        email,
        password: confPass,
        sector,
        image,
      });
  
      return response.status(201).json(user);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  

  
}