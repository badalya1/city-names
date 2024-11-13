import { Router } from "express";
import citiesRouter from "./cities/router";
import listsRouter from "./lists/router";
import type { Request, Response } from "express";

const apiRouter = Router();

apiRouter.use("/lists", listsRouter);
apiRouter.use("/cities", citiesRouter);

export default apiRouter;
