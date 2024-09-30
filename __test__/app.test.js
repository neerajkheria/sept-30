const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
    it('should respond with a message', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello, GitHub Actions!');
    });
});

describe('GET /sum', () => {
    it('should return the sum of two numbers', async () => {
        const a = 5;
        const b = 3;
        const response = await request(app).get(`/sum?a=${a}&b=${b}`);
        expect(response.status).toBe(200);
        expect(response.body.sum).toBe(a + b);
    });

    it('should return NaN if non-numeric values are provided', async () => {
        const response = await request(app).get('/sum?a=abc&b=xyz');
        expect(response.status).toBe(200);
        expect(response.body.sum).toBeNaN();
    });
});
