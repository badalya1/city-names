// Cities

export interface City {
  _id: string;
  name: string;
  foundedYear: string;
}

export interface CreateCityInput {
  name: string;
  foundedYear: string;
}

export interface UpdateCityInput {
  name?: string;
  foundedYear?: string;
}

//City lists

export interface CityList {
  _id: string;
  name: string;
  color: string;
}

export interface CreateCityListInput {
  name: string;
  color: string;
}

export interface UpdateCityListInput {
  name?: string;
  color?: string;
}
