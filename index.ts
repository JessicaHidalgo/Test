import express from 'express';
import entryPoint from './scr/app';

const app: express.Application = express();
const port: number = 9000;

app.use(entryPoint);

app.listen(port, () => {
    console.log('Servidor iniciado' + port );
});