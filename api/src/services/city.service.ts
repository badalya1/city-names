import { injectable, inject } from "inversify";
import { Model } from "mongoose";
import { TYPES } from "../types";
import { City, CityDocument } from "../db/models/city.model";

@injectable()
export class CityService {
  constructor(
    @inject(TYPES.CityModel) private cityModel: Model<CityDocument>
  ) {}

  async getAllCities() {
    return this.cityModel.find();
  }

  async getCityById(id: string): Promise<City | null> {
    return this.cityModel.findById(id).lean();
  }

  async createCity(cityData: City): Promise<City> {
    const city = new this.cityModel(cityData);
    return city.save();
  }

  async updateCity(id: string, cityData: Partial<City>): Promise<City | null> {
    return this.cityModel
      .findByIdAndUpdate(id, { $set: cityData }, { new: true })
      .lean();
  }

  async deleteCity(id: string): Promise<boolean> {
    const result = await this.cityModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
