import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { CityService } from "../services/city.service";

@injectable()
export class CityController {
  constructor(@inject(TYPES.CityService) private cityService: CityService) {}

  getAllCities = async (req: Request, res: Response) => {
    try {
      const cities = await this.cityService.getAllCities();
      res.json(cities);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Failed to fetch cities" });
    }
  };

  getCityById = async (req: Request, res: Response) => {
    console.log("Running");
    try {
      const city = await this.cityService.getCityById(req.params.id);
      if (city) {
        res.json(city);
      } else {
        res.status(404).json({ message: "City not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to fetch city" });
    }
  };

  createCity = async (req: Request, res: Response) => {
    try {
      const city = await this.cityService.createCity(req.body);
      res.status(201).json(city);
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to create city" });
    }
  };

  updateCity = async (req: Request, res: Response) => {
    try {
      const city = await this.cityService.updateCity(req.params.id, req.body);
      if (city) {
        res.json(city);
      } else {
        res.status(404).json({ message: "City not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to update city" });
    }
  };

  deleteCity = async (req: Request, res: Response) => {
    try {
      const success = await this.cityService.deleteCity(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ message: "City not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ message: "Failed to delete city" });
    }
  };
}
