// Cities

export interface City {
  _id: string;
  name: string;
  foundingDate: string;
}

export interface CreateCityInput {
  name: string;
  foundingDate: string;
}

export interface UpdateCityInput {
  name?: string;
  foundingDate?: string;
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
