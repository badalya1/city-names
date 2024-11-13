import mongoose, { HydratedDocument, Schema } from "mongoose";

export interface City {
  name: string;
  foundedYear: number;
}

export type CityDocument = HydratedDocument<City>;

const CitySchema = new Schema<City>(
  {
    name: { type: String, required: true },
    foundedYear: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

export const CityModel = mongoose.model<City>("city", CitySchema);
