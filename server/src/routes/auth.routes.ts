import { Router } from "express";
import { AuthController } from "@src/controllers/auth.controller";
import validateRequest from "@src/middleware/validateRequest";
import { registerSchema } from "@src/validators/auth.validator";

const router = Router();

const authController = new AuthController();

router.post(
  "/register",
  validateRequest(registerSchema),
  authController.register
);

export default router;