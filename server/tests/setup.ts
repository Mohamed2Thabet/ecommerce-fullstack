// Environment already loaded by globalSetup.ts
import { prisma } from '@src/prisma/prisma';

export const setupTestDb = async () => {
  console.log('🧹 Cleaning test database...');
  
  // Truncate all tables to start fresh
  await prisma.$executeRaw`TRUNCATE TABLE "User", "RefreshToken" CASCADE;`;
};

export const teardownTestDb = async () => {
  await prisma.$disconnect();
};
