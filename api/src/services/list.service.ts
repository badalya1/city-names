import { injectable, inject } from "inversify";
import { Model } from "mongoose";
import { TYPES } from "../types";
import { CityList, ListDocument } from "../db/models/list.model";

@injectable()
export class CityListService {
  constructor(
    @inject(TYPES.CityListModel) private cityListModel: Model<ListDocument>
  ) {}

  async getAllCityLists() {
    return this.cityListModel.find().populate("cities").lean();
  }

  async getCityListById(id: string) {
    return this.cityListModel.findById(id).populate("cities").lean();
  }

  async createCityList(cityListData: CityList): Promise<CityList> {
    const cityList = new this.cityListModel(cityListData);
    return (await cityList.save()).populate("cities");
  }

  async updateCityList(id: string, cityListData: Partial<CityList>) {
    return this.cityListModel
      .findByIdAndUpdate(id, { $set: cityListData }, { new: true })
      .populate("cities")
      .lean();
  }

  async deleteCityList(id: string): Promise<boolean> {
    const result = await this.cityListModel.deleteOne({ _id: id });
    return result.deletedCount === 1;
  }
}
