import request from 'supertest'
import app from '../src/server'

describe('Slack Command APIs', () => {
    test('it responds to GET requests', () => {
        return request(app).get('/').expect(200);
    });
});
