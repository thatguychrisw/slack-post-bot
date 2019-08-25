import request from 'supertest'
import app from '../src/app'

test('it responds successfully to GET /hello-world', () => {
    return request(app).get('/hello-world').expect(200);
});
