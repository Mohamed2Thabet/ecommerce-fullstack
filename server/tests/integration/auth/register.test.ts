import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import app from '@src/app';           // Adjust path if needed
import { setupTestDb, teardownTestDb } from '../../setup';

describe('Auth Routes', () => {
  beforeAll(async () => {
    await setupTestDb();
  });

  afterAll(async () => {
    await teardownTestDb();
  });

  describe('POST /api/v1/auth/register', () => {
    it('should register a new user successfully', async () => {
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send({
          name: 'Test User',
          email: 'testusdddddder@example.com',
          password: 'Password123c!'
        });

      expect(response.status).toBe(201);
      expect(response.body.success).toBe(true);
      expect(response.body.message).toBe('User registered successfully');
      expect(response.body.data).toHaveProperty('id');
      expect(response.body.data.email).toBe('testusdddddder@example.com');
      expect(response.body.data).not.toHaveProperty('password');
    });

    it('should return 409 if email already exists', async () => {
      const response = await request(app)
        .post('/api/v1/auth/register')
        .send({
          name: 'uplicate User',
          email: 'testusdddddder@example.com',   // same email
          password: 'Password123c!'
        });

      expect(response.status).toBe(409);
      expect(response.body.success).toBe(false);
    });
  });
});