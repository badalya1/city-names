import { Router } from "express";
import type { Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  // Get all cities
  res.json([
    { id: 1, name: "New York" },
    { id: 2, name: "London" },
    { id: 3, name: "Tokyo" },
  ]);
});

router.get("/:id", (req: Request, res: Response) => {
  // Get a specific city
  const city = { id: 1, name: "New York" };
  res.json(city);
});

router.post("/", (req: Request, res: Response) => {
  // Create a new city
  const newCity = { id: 4, name: "Paris" };
  res.status(201).json(newCity);
});

router.put("/:id", (req: Request, res: Response) => {
  // Update a city
  const updatedCity = { id: 1, name: "Big Apple" };
  res.json(updatedCity);
});

router.delete("/:id", (req: Request, res: Response) => {
  // Delete a city
  res.sendStatus(204);
});

export default router;
