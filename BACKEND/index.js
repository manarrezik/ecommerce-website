import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import multer from 'multer';
import path from 'path';
import dotenv from 'dotenv';
import { Router } from 'express';
import productRouter from './routes/productroute.js';
import blogRouter from './routes/blogroute.js';
import prodcategoryRouter from './routes/prodcategoryroute.js';
import blogcategoryRouter from './routes/blogcategoryroute.js';
import brandRouter from './routes/brandroute.js';

import  authRouter  from './routes/authroute.js';
import bodyParser from 'body-parser';
const route = express.Router();
dotenv.config();
let router = Router();
const PORT = process.env.PORT || 7000;

const app = express();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    optionsSuccessStatus: 200
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false}));
app.use("/api/user" , authRouter);
app.use("/api/product" , productRouter);
app.use("/api/blog" , blogRouter);
app.use("/api/pcategory" , prodcategoryRouter);
app.use("/api/bcategory" , blogcategoryRouter);
app.use("/api/brand" , brandRouter);
// app.use(notfound);
// app.use(errorHandler)
mongoose.connect(process.env.mongo_url)
    .then(() => {
        app.use(express.json());
        // app.use(express.urlencoded({extended: true}));

        app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
    })
    .catch((err) => { console.log(err, "Received an Error"); });
