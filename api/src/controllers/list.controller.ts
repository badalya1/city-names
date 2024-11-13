import { Request, Response } from "express";
import { injectable, inject } from "inversify";
import { TYPES } from "../types";
import { CityListService } from "../services/list.service";

@injectable()
export class CityListController {
  constructor(
    @inject(TYPES.CityListService) private cityListService: CityListService
  ) {}

  getAllCityLists = async (req: Request, res: Response): Promise<void> => {
    try {
      const cityLists = await this.cityListService.getAllCityLists();
      res.json(cityLists);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Failed to fetch city lists" });
    }
  };

  getCityListById = async (req: Request, res: Response): Promise<void> => {
    try {
      const cityList = await this.cityListService.getCityListById(
        req.params.id
      );
      if (cityList) {
        res.json(cityList);
      } else {
        res.status(404).json({ error: "City list not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to fetch city list" });
    }
  };

  createCityList = async (req: Request, res: Response): Promise<void> => {
    try {
      const cityList = await this.cityListService.createCityList(req.body);
      res.status(201).json(cityList);
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to create city list" });
    }
  };

  updateCityList = async (req: Request, res: Response): Promise<void> => {
    try {
      const cityList = await this.cityListService.updateCityList(
        req.params.id,
        req.body
      );
      if (cityList) {
        res.json(cityList);
      } else {
        res.status(404).json({ error: "City list not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to update city list" });
    }
  };

  deleteCityList = async (req: Request, res: Response): Promise<void> => {
    try {
      const success = await this.cityListService.deleteCityList(req.params.id);
      if (success) {
        res.status(204).send();
      } else {
        res.status(404).json({ error: "City list not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(400).json({ error: "Failed to delete city list" });
    }
  };
}
