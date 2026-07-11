import { Request, Response, NextFunction } from "express";
import { AuthService } from "@src/services/auth.service";
import { AuthRepository } from "@src/repositories/auth.repository";

const authRepository = new AuthRepository();
const authService = new AuthService(authRepository);

export class AuthController {
  async register(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    try {
      const user = await authService.register(req.body);

      return res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user,
      });
    } catch (error) {
      next(error);
    }
  }
}