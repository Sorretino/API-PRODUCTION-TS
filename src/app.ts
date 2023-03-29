
import type { Application } from "express";
import express from "express";
import cors from "cors";
import upload from '../Muter/upload'
// imports routes

import { houseRouters,
      menuRouters,
      submenuRouters,
      userRouters,
      authRouters,
      companyRouters,
      workRoutes,
      scribedRoutes,
      developerRoutes,
      paymentRoutes,
      importerRoutes
     } from "./routes";


class Api {
  public app: Application;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
    this.app.use("/files", express.static(upload.UPLOADS_FOLDER));
    
  }

  middlewares() {
    this.app.use(express.json());
    this.app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
      res.header("Access-Control-Allow-Headers", "*");
      this.app.use(cors());
      next();
    });
  }

  routes() {
    this.app.use(userRouters);
    this.app.use(houseRouters);
    this.app.use(menuRouters);
    this.app.use(submenuRouters);
    this.app.use(authRouters);
    this.app.use(companyRouters);
    this.app.use(workRoutes);
    this.app.use(scribedRoutes),
    this.app.use(developerRoutes),
    this.app.use(paymentRoutes),
    this.app.use(importerRoutes)
  }
}

export const { app } = new Api();