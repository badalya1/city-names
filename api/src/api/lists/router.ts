import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // Get all lists
  res.json([
    { id: 1, name: "Grocery List" },
    { id: 2, name: "To-Do List" },
    { id: 3, name: "Shopping List" },
  ]);
});

router.get("/:id", (req: Request, res: Response) => {
  // Get a specific list
  const list = { id: 1, name: "Grocery List" };
  res.json(list);
});

router.post("/", (req: Request, res: Response) => {
  // Create a new list
  const newList = { id: 4, name: "Reading List" };
  res.status(201).json(newList);
});

router.put("/:id", (req: Request, res: Response) => {
  // Update a list
  const updatedList = { id: 1, name: "Updated Grocery List" };
  res.json(updatedList);
});

router.delete("/:id", (req: Request, res: Response) => {
  // Delete a list
  res.sendStatus(204);
});

export default router;
