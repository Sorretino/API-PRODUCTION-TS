import { Request, Response } from "express";
import { CreateWorkCase } from "./createWorkgallery.service";

export class CreateWorkgalleryController {
  constructor(
    private createWorkCase: CreateWorkCase,
  ) {}

  // async handle(request: Request, response: Response): Promise<Response> {
  //   let  originalname  = request.file.originalname;
    
  //   console.log(originalname, "req imagens no handle");
    
  //   const { title, grid, companyId, urlimage } = request.body;
  //   let confPass = originalname;
  //   console.log(confPass, "pass");
  //   // confPass = urlimage === undefined ?  'sem-imagem' : urlimage
  
  //   try {
  //     const house = await this.createWorkCase.execute({
  //       title,
  //       grid,
  //       companyId,
  //       urlimage: `${process.env.URL_SERVER}${confPass}`
  //     });
  
  //     return response.status(201).json(house);  
  //   } catch (err) {
  //     return response.status(400).json({
  //       message: err.message || 'Unexpected error.'
  //     })
  //   }
  // }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      
      const users = await this.createWorkCase.getAll();
      return response.status(201).json(users);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }
  // async getById(request: Request, response: Response): Promise<Response> {
    
  //   try {
  //     const { url } = request.body;
     
  //     const blogbyUrl =  await this.createWorkCase.findByUrl(url);
  //     return response.status(201).json(blogbyUrl);
  //     //return response.status(201).json(url);  
  //   } catch (err) {
  //     return response.status(400).json({
  //       message: err.message || 'Unexpected error.'
  //     })
  //   }
  // }





}