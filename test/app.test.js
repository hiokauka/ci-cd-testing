const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return greeting text', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
    expect(res.text).toBe('Hello from Node.js app with CI/CD!, I try to deploy this app to Vercel using GitHub Actions');
  });
});
