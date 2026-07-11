import { PrismaClient } from "@src/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is not set");
}

const adapter = new PrismaPg({
  connectionString,
});

export const prisma = new PrismaClient({
  adapter,
  log: process.env.NODE_ENV === "development" 
    ? ["query", "info", "warn", "error"] 
    : ["error"],
});