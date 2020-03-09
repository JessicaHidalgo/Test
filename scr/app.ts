import express, {Application, Request, Response} from 'express';
import bodyParser from 'body-parser';
import employeeRoutes from './routes/employeeRoutes' ;

const app : express.Application = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/employees',employeeRoutes)

export default app;