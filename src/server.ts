import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.post('/nf-test', (request, response) => {
    response.send('💙 Netlify Functions!');
});


export default app;
export const handler = serverless(app);

