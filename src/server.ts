import express from 'express';
import serverless from 'serverless-http';

const app = express();

app.get('/', (request, response) => {
    response.send('Hello world!');
});


export default app;
export const handler = serverless(app);

