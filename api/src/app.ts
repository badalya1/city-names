import "reflect-metadata";
import express, { json, urlencoded } from "express";
import mongoose from "mongoose";
import cors from "cors";
import { Container } from "inversify";
import { CityController } from "./controllers/city.controller";
import { CityListController } from "./controllers/list.controller";
import { TYPES } from "./types";
import { container } from "./inversify.config";
import { getMongoConfig } from "./db/config";

export class App {
  private app: express.Application;
  private container: Container;
  private port = process.env.PORT || 3000;

  constructor() {
    this.app = express();
    this.container = container;
    this.setupContainer();
    this.setupMiddleware();
    this.setupRoutes();
  }

  private setupContainer(): void {
    // Bind controllers
    this.container
      .bind<CityController>(TYPES.CityController)
      .to(CityController);
    this.container
      .bind<CityListController>(TYPES.CityListController)
      .to(CityListController);
  }

  private setupMiddleware(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private setupRoutes(): void {
    const cityController = this.container.get<CityController>(
      TYPES.CityController
    );
    const cityListController = this.container.get<CityListController>(
      TYPES.CityListController
    );

    // City routes
    this.app.get("/api/cities", cityController.getAllCities);
    this.app.get("/api/cities/:id", cityController.getCityById);
    this.app.post("/api/cities", cityController.createCity);
    this.app.put("/api/cities/:id", cityController.updateCity);
    this.app.delete("/api/cities/:id", cityController.deleteCity);

    // City List routes
    this.app.get("/api/lists", cityListController.getAllCityLists);
    this.app.get("/api/lists/:id", cityListController.getCityListById);
    this.app.post("/api/lists", cityListController.createCityList);
    this.app.put("/api/lists/:id", cityListController.updateCityList);
    this.app.delete("/api/lists/:id", cityListController.deleteCityList);
  }

  public async connect(): Promise<void> {
    try {
      const mongoConfig = getMongoConfig();
      await mongoose.connect(mongoConfig.connectionString, mongoConfig.options);
      console.log(
        `Connected to MongoDB database: ${mongoConfig.options.dbName}`
      );
    } catch (error) {
      console.error("MongoDB connection error:", error);
      process.exit(1);
    }
  }

  public start(): void {
    this.app.listen(this.port, () => {
      console.log(`Server is running on port ${this.port}`);
    });
  }
}
