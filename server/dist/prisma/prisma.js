"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
const client_1 = require("@src/generated/prisma/client");
const adapter_pg_1 = require("@prisma/adapter-pg");
const connectionString = process.env.DATABASE_URL;
if (!connectionString) {
    throw new Error("DATABASE_URL environment variable is not set");
}
const adapter = new adapter_pg_1.PrismaPg({
    connectionString,
});
exports.prisma = new client_1.PrismaClient({
    adapter,
    log: process.env.NODE_ENV === "development"
        ? ["query", "info", "warn", "error"]
        : ["error"],
});
