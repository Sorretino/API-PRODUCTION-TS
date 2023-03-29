import { Request, Response } from "express";
import { ReadUserUseCase } from "./readUser.service";

export class ReadUserController {
  constructor(
    private readUserUseCase: ReadUserUseCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    try {
      let { active } = request.params;
      (typeof(active) === undefined) ? active = null : '';
      const users = await this.readUserUseCase.execute(active);
      return response.status(201).json(users);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
}