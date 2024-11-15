"use client";

import { useState } from "react";
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
import { useCreateCity } from "@/api/cities.api";
import useTableModal from "../hooks/table-modal";

export default function CreateCity() {
  const tableModal = useTableModal();
  const [name, setName] = useState("");
  const [foundedYear, setFoundedYear] = useState("");

  const { mutate } = useCreateCity();

  const resetForm = () => {
    setName("");
    setFoundedYear("");
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitted:", {
      name,
      foundedYear,
    });
    mutate({ name, foundedYear });
    tableModal.closeNewCityModal();
    resetForm();
  };

  return (
    <Dialog
      open={tableModal.newCityModal}
      onOpenChange={tableModal.closeNewCityModal}
    >
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create New City</DialogTitle>
        </DialogHeader>
        <DialogDescription>Create new city</DialogDescription>
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
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
