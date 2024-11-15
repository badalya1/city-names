import { ReactNode, useState } from "react";
import type { City } from "@/api/types/api.types";
import { TableModalContext } from "../hooks/table-modal";

// Custom hook to use the context

export const TableModalProvider = ({ children }: { children: ReactNode }) => {
  const [newCityModal, setNewCityModal] = useState(false);
  const [editCityModal, setEditCityModal] = useState(false);
  const [editingCity, setEditingCity] = useState<City>({
    _id: "",
    name: "",
    foundedYear: "",
  });

  const openNewCityModal = () => setNewCityModal(true);
  const closeNewCityModal = () => setNewCityModal(false);

  const openEditCityModal = (city: City) => {
    setEditingCity(city);
    setEditCityModal(true);
  };

  const closeEditCityModal = () => {
    setEditCityModal(false);
    setEditingCity({
      _id: "",
      name: "",
      foundedYear: "",
    });
  };

  return (
    <TableModalContext.Provider
      value={{
        newCityModal,
        editCityModal,
        editingCity,
        openNewCityModal,
        closeNewCityModal,
        openEditCityModal,
        closeEditCityModal,
      }}
    >
      {children}
    </TableModalContext.Provider>
  );
};
