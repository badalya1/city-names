import { Container } from "inversify";
import { TYPES } from "./types";
import { CityModel, ListModel } from "./db/models";
import { CityService } from "./services/city.service";
import { CityListService } from "./services/list.service";

const container = new Container();

// Bind models
container.bind(TYPES.CityModel).toConstantValue(CityModel);
container.bind(TYPES.CityListModel).toConstantValue(ListModel);

// Bind services
container.bind<CityService>(TYPES.CityService).to(CityService);
container.bind<CityListService>(TYPES.CityListService).to(CityListService);

export { container };
