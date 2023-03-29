import { Request, Response } from "express";
import { compare } from "bcryptjs";
import {secret, expireIn} from "../../Midlewares/config/auth";
import { sign } from "jsonwebtoken";
import {UsersRepository} from "~/repositories/implementations/usersRepository";
import { AuthenticateService } from "./AuthenticateService";
import { AdminProps } from "~/infra/PropsTypes/AdminProps";
import { User} from "../../entities/User"

export class AuthenticationController{
  constructor(
    private authenticationCase: AuthenticateService,
  ) {}

  async handle(request: Request, response: Response) {
    try {
      const { email, password } = request.body;
      const admin:AdminProps = await this.authenticationCase.execute(email);
      //console.log(admin, 'dados')
      if (!admin) throw new Error("User not found");
      if (!(await compare(password, admin.password))) throw new Error("Access not permited");
      admin.password = "";
      const token = sign({ id: admin.id }, secret, { 
        expiresIn: expireIn,
      });
      //console.log(token, 'dados token')
      const result = {
        user: admin,
        token: token,
        session: admin.id,
      };
      //console.log(result,'resutado')
      
      return response.status(201).json(result);
       //response.status(200).json(result);
    } catch (error: any) {
      response.status(400).json("erro");
      throw new Error(error);
    }
  }


  // async login(request: Request, response: Response) {
 
  //   const { email, password } = request.body;
  //   const user = await this.usersRepository.findByEmail({email})

  //   if (user) {
  //     throw new Error('User already exists.');
  //   }
  //   const verifyPass = await bcrypt.compare(password, user.password)
  //   if(!verifyPass){
  //     throw new Error('User already exists.');
  //   }
  //    const token = JWT.sign({ id: user.id },secret,{ expiresIn: '8h' },
  //     // {
  //     //   token: token,
  //     // }
  //    )
  //    console.log(token)
  // }
}

  
