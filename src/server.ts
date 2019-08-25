import express from 'express';
import serverless from 'serverless-http';

const app = express();
const router = express.Router();

router.all('/nf-test', (request, response) => response.json({
    text: '💙 Netlify Functions!',
}));

app.use('/.netlify/functions/server', router);
app.use('/', router);

export default app;
export const handler = serverless(app);
