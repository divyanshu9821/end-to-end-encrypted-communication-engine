import express from 'express'
import router from './routes/index.js';

export function startExpressServer(){
    const app = express();
    app.use(router)
    app.listen(process.env.APP_PORT || 9090);
}