import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.get('/', (request, response) => {
    response.send('Hello world!');
});

app.use('/', router);

export default app;
export const handler = serverless(app);

