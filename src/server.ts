import express from 'express';
import serverless from 'serverless-http';
import rewrite from 'express-urlrewrite';

const app = express();
const router = express.Router();

router.all('/nf-test', (request, response) => response.json({
    text: '💙 Netlify Functions!',
}));

app.use(rewrite('/*', '/.netlify/functions/server/$1'));
app.use('/.netlify/functions/server', router);

export default app;
export const handler = serverless(app);
