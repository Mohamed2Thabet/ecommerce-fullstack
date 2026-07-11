import bcrypt from "bcrypt";
import { AuthRepository } from "../repositories/auth.repository";
import { RegisterInput } from "../validators/auth.validator";
import { ConflictError } from "../utils/errors";   // ← Add this

export class AuthService {
  constructor(private authRepository: AuthRepository) {}

  async register(data: RegisterInput) {
    // 1. Check if email already exists
    const existingUser = await this.authRepository.findByEmail(data.email);

    if (existingUser) {
      throw new ConflictError("Email already exists");   // ← Changed
    }

    // 2. Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

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