import { Request, Response } from "express";
import { CreateSubscribedCase } from "./createSubscribed.service";

export class CreateSubscribedController {
  constructor(
    private createSubscribedCase: CreateSubscribedCase,
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {

    //console.log(request.body, "req imagens no handle");
    
    const { name, email, phone, subject,message } = request.body;
    const phoneModify = request.body.phone.replace(/[^0-9]+/g,'');
    console.log(phoneModify,'modigficado');
    try {
      const house = await this.createSubscribedCase.execute({
        name,
        email,
        phone:phoneModify,
        subject,
        message,
      });
  
      return response.status(201).json(house);  
    } catch (err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      })
    }
  }

  async show(request: Request, response: Response): Promise<Response> {
    try {
      
      const users = await this.createSubscribedCase.getAll();
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

//delete 
async deleteById(request: Request, response: Response): Promise<Response> {
    
  try {
    const { id } = request.params;
    
    await this.createSubscribedCase.destroy(id);

    return response.status(201).json({"delete":true + " " + id});  
  } catch (err) {
    return response.status(400).json({
      message: err.message || 'Unexpected error.'
    })
  }
}



}