import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.all('/nf-test', (request, response) => response.json({
    text: '💙 Netlify Functions!',
}));

app.all('/weather-test', (request, response) => response.json({
    text: '💨 It\'s a storm!',
}));

export default app;
export const handler = serverless(app);
