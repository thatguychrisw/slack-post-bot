import request from 'supertest'
import app from '../src/server'

describe('Slack Command — /nf-test', () => {
    test('it responds with a 200 on post', () => {
        return request(app).post('/.netlify/functions/server/nf-test').expect(200);
    });
});
