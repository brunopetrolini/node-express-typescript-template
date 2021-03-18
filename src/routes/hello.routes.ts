import { Router, Request, Response } from "express";

const helloRouter = Router();

helloRouter.get("/", (request: Request, response: Response) => {
  return response.status(200).json({ message: "Hello World" });
});

export { helloRouter };
