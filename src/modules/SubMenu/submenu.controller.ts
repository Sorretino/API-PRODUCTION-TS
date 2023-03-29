import { Request, Response } from "express";
import { CreateSubMenuCase } from "./createSubmenu.service";

export class CreateSubMenuController {
  constructor(
    private createSubMenuCase: CreateSubMenuCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
 
    const { title, url, description,color, menuId } = request.body;
    try {
      const menu = await this.createSubMenuCase.execute({
        title,
        url,
        description,
        color,
        menuId,
      });
  
      return response.status(201).json(menu);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async list(request: Request, response: Response): Promise<Response> {
    try {
      const result = await this.createSubMenuCase.getAll();
      return response.status(201).json(result);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async updateById(request: Request, response: Response): Promise<Response> {
    
    try {
      const { id } = request.params;
      const { title, url,description,color, menuId } = request.body;
  
       let datatoSave:Record<string, string> = {
        title,
        url,
        description,
        color,
        menuId,
      }
      const menu = await this.createSubMenuCase.put(datatoSave,id);

      return response.status(201).json(menu);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  //delete 
  async deleteById(request: Request, response: Response): Promise<Response> {
    
    try {
      const { id } = request.params;
      
      const destroyseubmenu = await this.createSubMenuCase.destroy(id);

      return response.status(201).json(destroyseubmenu);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

}