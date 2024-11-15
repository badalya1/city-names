import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useUpdateCity } from "@/api/cities.api";
import useTableModal from "../hooks/table-modal";

export default function EditCity() {
  const { editingCity, closeEditCityModal, editCityModal } = useTableModal();

  const [name, setName] = useState("");
  const [foundedYear, setFoundedYear] = useState("");
  const [cityId, setCityId] = useState("");

  const { mutateAsync } = useUpdateCity(cityId);

  useEffect(() => {
    setName(editingCity.name);
    setFoundedYear(editingCity.foundedYear);
    setCityId(editingCity._id);
  }, [editingCity]);

  const resetForm = () => {
    setName(editingCity.name);
    setFoundedYear(editingCity.foundedYear);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await mutateAsync(
      { name, foundedYear },
      {
        onSuccess: () => {
          closeEditCityModal();
          resetForm();
        },
      }
    );
  };

  return (
    <Dialog open={editCityModal} onOpenChange={closeEditCityModal}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit City</DialogTitle>
        </DialogHeader>
        <DialogDescription>Edit city data</DialogDescription>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="foundingYear">Founding Year</Label>
            <Input
              id="foundingYear"
              type="string"
              value={foundedYear}
              onChange={(e) => setFoundedYear(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Update
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
