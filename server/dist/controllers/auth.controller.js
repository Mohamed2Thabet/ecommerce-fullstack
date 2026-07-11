"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const auth_service_1 = require("@src/services/auth.service");
const auth_repository_1 = require("@src/repositories/auth.repository");
const authRepository = new auth_repository_1.AuthRepository();
const authService = new auth_service_1.AuthService(authRepository);
class AuthController {
    async register(req, res, next) {
        try {
            const user = await authService.register(req.body);
            return res.status(201).json({
                success: true,
                message: "User registered successfully",
                data: user,
            });
        }
        catch (error) {
            next(error);
        }
    }
}
exports.AuthController = AuthController;
