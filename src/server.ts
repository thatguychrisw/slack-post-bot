import express from 'express';
import serverless from 'serverless-http';
import bodyParser from 'body-parser';

const app = express();
const router = express.Router();

router.all('/nf-test', (request, response) => {
    response.json({
        'text': '💙 Netlify Functions!',
    });
});

app.use(bodyParser);
app.use('/.netlify/functions/server', router);

export default app;
export const handler = serverless(app);

