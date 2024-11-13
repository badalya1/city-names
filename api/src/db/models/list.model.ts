import mongoose, { HydratedDocument, Schema, Types } from "mongoose";
import { CityDocument } from "./city.model";

export interface CityList {
  shortName: string;
  fullName: string;
  ownerId: Types.ObjectId;
  labelColor: string;
  cities: Types.DocumentArray<CityDocument>;
}

export type ListDocument = HydratedDocument<CityList>;

const CityListSchema = new Schema<CityList>(
  {
    shortName: { type: String, required: true },
    fullName: { type: String, required: true },
    labelColor: { type: String, required: true },
    ownerId: { type: Schema.ObjectId, required: true },
    cities: [{ type: Schema.ObjectId, ref: "city" }],
  },
  {
    timestamps: true,
  }
);

export const ListModel = mongoose.model<CityList>("list", CityListSchema);
