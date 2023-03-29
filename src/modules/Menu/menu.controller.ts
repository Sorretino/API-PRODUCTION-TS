import { Request, Response } from "express";
import { CreateMenuCase } from "./createMenu.service";

export class CreateMenuController {
  constructor(
    private createMenuCase: CreateMenuCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
 
    const { title, url, order } = request.body;
    try {
      const menu = await this.createMenuCase.execute({
        title,
        url,
        order,
      });
  
      return response.status(201).json(menu);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async getAll(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.createMenuCase.all();
      return response.status(201).json(result);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}