import  express from 'express';

import {config} from 'dotenv';
config();

import cors  from 'cors';

import cookieParser from 'cookie-parser';

import morgan from 'morgan';

import userRoutes from './routes/user.router.js'
import courseRoutes from './routes/course.router.js'
import paymentRoutes from './routes/payment.router.js'
import errorMiddleware from './middlewares/error.middleware.js';

const app = express();


app.use(morgan('dev'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

app.use(cors({
    // difrent domain comunicate each other
    origin:[process.env.FRONTEND_URL],
    // cookie or other data flow easly
    credentials:true
}))

app.use('/ping',(req,res)=>{
    res.send('/Pong')
})

// 3 routew define of 3 model 
app.use('/api/vi/user',userRoutes);
app.use('/api/vi/courses', courseRoutes);
app.use('/api/vi/payment', paymentRoutes);


app.all('*',(req,res)=>{
    res.status(404).send('OOPS!! 404 Page Not Found')
})

app.use(errorMiddleware)


export default app;