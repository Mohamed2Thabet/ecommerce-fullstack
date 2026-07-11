import { prisma } from "@src/prisma/prisma";
import { Prisma, User } from "@src/generated/prisma/client";

export class AuthRepository {
  async findByEmail(email: string): Promise<User | null> {
    return prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<User> {
    return prisma.user.create({
      data,
    });
  }
}