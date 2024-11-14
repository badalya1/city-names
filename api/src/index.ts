import "reflect-metadata";
import "dotenv/config";

import { App } from "./app";

const app = new App();

await app.connect();
app.start();
