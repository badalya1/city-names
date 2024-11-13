import { connect, disconnect, Types } from "mongoose";
import { City, CityModel } from "../../src/db/models/city.model";
import { CityList, ListModel } from "../../src/db/models/list.model";
import { getMongoConfig } from "../../src/db/config";
import { CityDocument } from "../../src/db/models/city.model";

const seedCities: City[] = [
  { name: "Paris", foundedYear: 1210 },
  { name: "Vienna", foundedYear: 1147 },
  { name: "Berlin", foundedYear: 1237 },
  { name: "Warsaw", foundedYear: 1321 },
  { name: "Milan", foundedYear: 1899 },
];

const seedCityLists: CityList[] = [
  {
    shortName: "Central Europe France",
    fullName: "Central European Cities Including France",
    labelColor: "#FF0000",
    ownerId: new Types.ObjectId(),
    cities: new Types.DocumentArray([]), // Will be populated with actual IDs
  },
  {
    shortName: "Austria",
    fullName: "Austrian Cities",
    ownerId: new Types.ObjectId(),
    labelColor: "#00FF00",
    cities: new Types.DocumentArray([]), // Will be populated with actual IDs
  },
];

async function seed() {
  try {
    // Connect to database
    const mongoConfig = getMongoConfig();
    await connect(mongoConfig.connectionString, mongoConfig.options);
    console.log("Connected to MongoDB");

    // Clear existing data
    await Promise.all([CityModel.deleteMany({}), ListModel.deleteMany({})]);
    console.log("Cleared existing data");

    // Seed cities
    const cities = await CityModel.insertMany(seedCities);
    console.log("Seeded cities");

    // Map city IDs for city lists
    const parisViennaBerlin = cities.filter((city: CityDocument) =>
      ["Paris", "Vienna", "Berlin"].includes(city.name)
    );

    const austrianCities = cities.filter((city: CityDocument) =>
      ["Vienna"].includes(city.name)
    );

    // Update city lists with actual city IDs
    seedCityLists[0].cities.push(...parisViennaBerlin);
    seedCityLists[1].cities.push(...austrianCities);

    // Seed city lists
    await ListModel.insertMany(seedCityLists);
    console.log("Seeded city lists");

    console.log("Database seeding completed successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  } finally {
    await disconnect();
  }
}

seed();
