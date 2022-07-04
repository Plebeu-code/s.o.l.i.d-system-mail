import { Router } from "express";
import { createUserControlle } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (req, res) => {
  return createUserControlle.handler(req, res);
});

export { router };
