"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const prisma_1 = require("@src/prisma/prisma");
class AuthRepository {
    async findByEmail(email) {
        return prisma_1.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
    async createUser(data) {
        return prisma_1.prisma.user.create({
            data,
        });
    }
}
exports.AuthRepository = AuthRepository;
