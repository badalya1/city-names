import { City } from "@/api/types/api.types";
import { createContext, useContext } from "react";

interface TableModalContextValue {
  newCityModal: boolean;
  editCityModal: boolean;
  editingCity: City;
  openNewCityModal: () => void;
  closeNewCityModal: () => void;
  openEditCityModal: (city: City) => void;
  closeEditCityModal: () => void;
}

export const TableModalContext = createContext<
  TableModalContextValue | undefined
>(undefined);

export default () => {
  const context = useContext(TableModalContext);
  if (!context) {
    throw new Error(
      "useTableModalContext must be used within a TableModalProvider"
    );
  }
  return context;
};
