import { config } from "dotenv";

// Load .env BEFORE importing any app modules
config();

// Use dynamic import to ensure config() runs first
(async () => {
  const { default: app } = await import("./app");

  const PORT = process.env.PORT || 5000;
  const dbName = process.env.DATABASE_URL?.split('/').pop()?.split('?')[0];

  app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
    console.log(`📊 Connected to database: ${dbName}`);
  });
})();