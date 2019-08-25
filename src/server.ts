import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.all('/nf-test', (request, response) => {
    response.send('💙 Netlify Functions!');
});

app.use('/.netlify/functions/server', router);

export default app;
export const handler = serverless(app);

