import express from "express";

import { helloRouter } from "./routes/hello.routes";

const app = express();

app.use(express.json());

app.use("/hello", helloRouter);

app.listen(3333, () =>
  console.log("🚅 Server running on http://localhost:3333")
);
