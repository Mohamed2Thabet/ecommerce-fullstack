// Global setup runs BEFORE any test files are loaded
import { config } from 'dotenv';
import * as path from 'path';

export default function setup() {
  // Load .env.test before ANY imports happen
  config({ path: path.resolve(__dirname, '../.env.test') });
  
  console.log('🧪 Test environment loaded (global setup)');
  console.log('📊 Database:', process.env.DATABASE_URL?.split('@')[1]?.split('?')[0]);
}
