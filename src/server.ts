import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.all('/nf-test', (request, response) => response.json({
    text: '💙 Netlify Functions!',
}));

export default app;
export const handler = serverless(app);
