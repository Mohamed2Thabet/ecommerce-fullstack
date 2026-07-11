"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const errors_1 = require("../utils/errors"); // ← Add this
class AuthService {
    constructor(authRepository) {
        this.authRepository = authRepository;
    }
    async register(data) {
        // 1. Check if email already exists
        const existingUser = await this.authRepository.findByEmail(data.email);
        if (existingUser) {
            throw new errors_1.ConflictError("Email already exists"); // ← Changed
        }
        // 2. Hash password
        const hashedPassword = await bcrypt_1.default.hash(data.password, 10);
        // 3. Create user
        const user = await this.authRepository.createUser({
            ...data,
            password: hashedPassword,
        });
        // 4. Don't return the password
        const { password, ...userWithoutPassword } = user;
        return userWithoutPassword;
    }
}
exports.AuthService = AuthService;
