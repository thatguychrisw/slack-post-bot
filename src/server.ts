import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello world!');
});

app.use('/.netlify/functions/server', router);

module.exports = app;
module.exports.handler = serverless(app);
